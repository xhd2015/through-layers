<template>
  <div>

      <!--file chooser-->
      <div>
          <label>Choose A File:</label>
          <input disabled="disabled" :value="cache.defaultPrefix"/>
          <input disabled="disabled" :value="cache.javaBase"/>
          <input :value="cache.filePath"/>
          <button @click="loadFileContent">Load File</button>
      </div>
        <label>Return Type:</label>
        <cache-input key-path="method.return.type"></cache-input> <br />
        <label>Method Name:</label>
        <cache-input key-path="method.name"></cache-input> <br />
        <label>Parameter Type:</label>
        <cache-input key-path="method.parameter.type"></cache-input>  <button @click="$refs['method.parameter.type'].unset()">Unset</button><br />
        <label>SQL Implementation:</label>
        <cache-textarea key-path="method.sql.body" rows="20"></cache-textarea>  <button @click="$refs['method.sql.body'].unset()">Unset</button><br />

        <hr/>
        <!--controller-->
        <div>
            <div>
                <label>Edit Templatefor Sql</label>
                <div>
                <div>
                    <textarea :value="getGetterFunctionString('gen.sql.method').toString()" placeholder="template, string,function,array..."></textarea>
                    <button @click="changeTemplate('gen.sql.method',$event.target.previousElementSibling.value)">Confirm</button>
                </div>
                <p>Manifest:</p>
                <p>Properties: {{Object.keys(getManifest().properties).join(", ")}}</p>
                <p>Methods: {{Object.keys(getManifest().methods).join(", ")}}</p>
                </div>
            </div>

            <label>File Loaded:{{get('file.fullPath')}}</label> <span>Postion: {{get('cache.selectionPos')}}</span> <br/>
            <textarea ref="loadedContentArea" rows="30" style="width:1000px;" @click="changeSelectionStart"></textarea> <br/>

            <label><h3>Controller Method</h3></label><br/>
            <span>{{get('gen.controller.method')}}</span>

        </div>

        <div>
            <label><h3>Sql Implementation</h3></label> <br/>
            <span> {{ get('gen.sql.method')}}  </span>
        </div>
  </div>

</template>

<script>
const {
    parseDataComputed,
    emptyOnNullGetter
}=require("../../src/lib/template-config")

const {
     getLast,capitalize,decapitalize
} = require("../../src/lib/data-utils")

const {
    plainObjectToMap
} = require("../../src/lib/util")

const path = require('path')
const fs = require('fs')

const CacheInput = require("../../src/components/CacheInput").default
const CacheTextarea = require("../../src/components/CacheTextarea").default


           
// a module level get
let get 

// define the map at runtime and save them back
// s=eval("(function s(){console.log('this=',this)})")
// s.toString()

// the config, a plain object
// we wish to split our configuration into meaningful fragments,and combine them together
let defaultPrefix = path.resolve('.')
let config = {
    _meta:{
        // the cache root is "cache"
        cacheRoot:"cache",
        dataAsFunction:true
    },
    // not computed
    cache:{
        "defaultPrefix":defaultPrefix,
        "javaBase":path.resolve(defaultPrefix, "resources/java-test/src/main/java"),
        "filePath":"com/controller/UserController.java",
        selectionPos:null,
        editRange: {
            start:null,
             end:null
        }
    },
    file:{
        fullPath: function(){ return path.resolve(get('cache.defaultPrefix'),get('cache.javaBase'),get('cache.filePath'))}
    },
    method:{
        "return":{
            type:"${cache.method.return.type}"
        },
        name:"${cache.method.name}",
        parameter:{
            type:"${cache.method.parameter.type}"
        },
        caculated:{
            "param.var.decl": function(){
                let paramType = this.get('method.parameter.type')
                if(paramType){
                    let name = decapitalize(getLast(paramType.split(".")))
                    if(name){
                        return paramType + " " + name
                    }
                }
                return ""
            }
        },
        sql:{
            body:"${cache.method.sql.body}"
        }
    },
    gen:{
        controller:{
            // basic constructure can also be viewed even no
            method(){
                return `public ${get('method.return.type')} ${get('method.name')}(${get('method.caculated.param.var.decl')}){
                             return null;
                }`
            }
        },
        sql:{
            "param.decl":["parameterType=\"${method.parameter.type}\"",""],
            "result.type.decl":["resultType=\"${method.return.type}\"",""],
            method(){
                return `<select id="${get('method.name')}" ${get('gen.sql.param.decl')} ${get('gen.sql.result.type.decl')}>
                  ${get('method.sql.body')} 
                </select>`
            }
        }
    }
    
}

let computedConfig = parseDataComputed(config)

// console.log(computedConfig)

computedConfig.beforeCreate.push(function(){ get = emptyOnNullGetter.call(this)});

// computedConfig.created.push(function(){ get = this.emptyOnNullGetter()});

// add components
computedConfig.components = {
    CacheInput,
    CacheTextarea
}
computedConfig.methods.changeTemplate = function(key,value){
    console.debug("changing key:",key," template to ", value)
    this.changeGetterConfigString(key,value)
}
computedConfig.methods.resetSelection = function(selectionStart){
  this.set("cache.selectionPos",selectionStart)
  if(selectionStart==null){
    this.set("cache.editRange.start",null)
    this.set("cache.editRange.end",null)
  }else{
    this.set("cache.editRange.start",selectionStart)
    this.set("cache.editRange.end",selectionStart)
  }
}
computedConfig.methods.loadFileContent = function(){
    this.$refs.loadedContentArea.value = fs.readFileSync(get('file.fullPath'),'utf8')
    this.resetSelection(null)
}
computedConfig.methods.changeSelectionStart = function(event){
    console.debug("changing selectionStart to ", event.target.selectionStart)
    this.resetSelection(event.target.selectionStart)
}

// not work
// computedConfig.watch[function(){get("gen.controller.method")}]= function(val){
//     console.debug("watching gen.controller.method changed, val = ", val)
//     // replace this range
//     loadedContentArea.setRangeText(val,get('cache.selectionPos'))
// }


let watch = computedConfig.watch = plainObjectToMap(computedConfig.watch)
watch.set(
    function(){
        console.log("get watch value = ", this.get("gen.controller.method"))
        return this.get("gen.controller.method")
    }, 
    
    {
    handler(val){

    console.debug("watching gen.controller.method changed")
    // replace this range
    if(this.$refs.loadedContentArea){
        let start = this.get("cache.editRange.start")
        if(start==null){
            console.debug("selection pos is not set, edit inline skip")
            return
        }
        let end = this.get("cache.editRange.end")
        this.$refs.loadedContentArea.setRangeText(val,start, end)
        this.set("cache.editRange.end", start + val.length)
    }
    },
    lazy:false,
    immediate:false
}
)


/**
 * 1. In the intial, the user can view his output is a box, on the fly.
 * 2. then, he can choose to bind this box to a part of a file, the file is structured
 * 
 */


export default computedConfig
</script>