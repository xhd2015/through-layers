<template>
  <div>
        <label>Return Type:</label>
        <cache-input key-path="method.return.type"></cache-input> <br />
        <label>Method Name:</label>
        <cache-input key-path="method.name"></cache-input> <br />
        <label>Parameter Type:</label>
        <cache-input key-path="method.parameter.type"></cache-input>  <button @click="$refs['method.parameter.type'].unset()">Unset</button><br />


        <hr/>
        <!--controller-->
        <div>
            <label><h3>Controller Method</h3></label><br/>
            <span>public {{this['method.return.type']}} {{this['method.name']}}({{this['method.caculated.param.var.decl']}}){
                return null;
            }
            </span>
        </div>

        <div>
            <label><h3>Sql Implementation</h3></label> <br/>
            <span>
                &lt;select id="{{this['method.name']}}"&gt;
                    SELECT * FROM t_mapper
                /&lt;select&gt;
            </span>
        </div>
  </div>

</template>

<script>
const {
    parseDataComputed
}=require("../../src/lib/template-config")

const {
     getLast,capitalize,decapitalize
} = require("../../src/lib/data-utils")

const CacheInput = require("../../src/components/CacheInput").default


// the config, a plain object
let config = {
    _meta:{
        // the cache root is "cache"
        cacheRoot:"cache",
        dataAsFunction:true
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
        }
    }
}

let computedConfig = parseDataComputed(config)

// add components
computedConfig.components = {
    CacheInput
}

export default computedConfig
</script>