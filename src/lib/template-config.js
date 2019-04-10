const { isObject,
    isArray,
    isPlainObject ,
    isString,
    setForceDeepProperty
} = require("./util")

const {
    setDeepExistingReactiveProperty,
    getDeepExistingProperty
} = require("./vue-utils")

console.debug("require vue-utils = ", require("./vue-utils"))

// const Vue = require('vue')

/**
 * 
 * @param {*} template 
 * @return {type:"plain"|"placeholder", content:<string or key>}
 */
function parseTemplate(template) {
    let res = []
    let s = template
    let i = 0
    let placeStart = "${"
    let placeEnd = "}"
    while (i < s.length) {
        let startIdx = s.indexOf(placeStart, i)
        if (startIdx === -1) {
            res.push({ type: "plain", content: s.substring(i) })
            break
        }
        let endIdx = s.indexOf(placeEnd, startIdx + placeStart.length)
        if (endIdx === -1) {
            throw "${ is found, but no ending }";
        }
        let name = s.substring(startIdx + placeStart.length, endIdx)
        if (!name) {
            throw "${} is empty";
        }
        if (i < startIdx) {
            res.push({ type: "plain", content: s.substring(i, startIdx) })
        }
        res.push({ type: "placeholder", content: name })
        i = endIdx + placeEnd.length
    }
    return res
}

/**
 // because the computed property has a limitation, and naturally it cannot be resolved
// we distinct computed property and data property by distinguishing the key prefix:
//    if the key starts with "cache.", then it is resovled to data, using deep traversing
//    else it is resolved to computed, using that full key
//  this is not perfect, but can absolutely solve the problem.
// the original limitation comes from that an object is either a data property or a computed property
// consider if part keys of an object is in data, and part of them can be specified in computed,
// this seems possible to make, but in fact it cannot be resolved simply.Because you must add the part of computed
//  into data, and data is just static data, no function call.

   better to be used wit CacheInput.vue
 * computed getter and setter pair
 * @param {*} templateConfigArray 
 * @param path used to set, not useful for get
 */
function toGetterSetterPair(path,templateConfigArray,cacheKey){
    let pair = {}
    let segments = path.split(".")
    let cacheKeyPrefix = cacheKey + "."
    pair.set = function setterToCache(val){
        // set will always fall into data[cacheKey]
        setDeepExistingReactiveProperty(this,[cacheKey,...segments], val)
        // this[cacheKey+"." + path]=val
    }

    // all placeholders, they must be present at runtime
    let allPlaceHolders = []
    for(let templateConfig of templateConfigArray){
        let placeHolders = []
        for(let cfg of templateConfig){
            if(cfg.type==="placeholder"){
                placeHolders.push(cfg.content)
            }
        }
        allPlaceHolders.push(placeHolders)
    }
    // the key point is, for template#1 and template#2, where template#1 has a higher priority, and value is taken from template#2
    //                   we ensure that the final value depends on both template#1 and template#2
    pair.get = function getterFromTemplate(){
        let vm  = this
        for(let i in allPlaceHolders){
            let placeHolder = allPlaceHolders[i]
            // in the first pass, we resolve value and check
            // template string will be concatenated in the second pass
            let allResolved = true
            let cachedPlaceHolderValue = {}
            for(let propKey of placeHolder){
                if(propKey in cachedPlaceHolderValue){
                    continue
                }
                let resolved = null
                if(propKey.startsWith(cacheKeyPrefix)){
                    // data
                    // console.debug("getDeepExistingProperty = ", getDeepExistingProperty)
                    resolved =  getDeepExistingProperty(vm,propKey.split("."))
                }else{
                    // computed
                    if(!(propKey in vm)){
                        throw "propKey is expected to be a computed property, but it is not in vm instance at runtime, check constructor config please.Key:"+propKey
                    }
                    resolved = vm[propKey]
                }
                if(resolved===null){
                    allResolved = false
                    break
                }
                // cache the value
                cachedPlaceHolderValue[propKey] = resolved
            }
            // render template now
            if(allResolved){
                let result = ""
                for(let template of templateConfigArray[i]){
                    if(template.type==='plain'){
                        result += template.content
                    }else if(template.type=='placeholder'){
                        result += cachedPlaceHolderValue[template.content]
                    }
                }
                return result
            }
        }
        // not resolved
        return null
    }
    return pair
}

function isConfigKey(key){
    if (key === "_meta") {
        return false
    }
    if (key === "") {
        console.warn("key is ignored because it is empty")
        return false
    }
    return true
}
function getStringArray(v){
    if(isString(v)){
        return [v]
    }else if(isArray(v)){
          // check that every item in the array must be string also
          for(let i of v){
            if(!isString(i)){
                throw "value in the array is not a string"
            }
        }
        return v
    }
    throw "value is not string nor array"
}
function toFlatten(value,prefix,res){
    // f(obj,key,prefix) returns {}
    if(!isPlainObject(value)){
        res[prefix] =  getStringArray(value)
    }else{
        for(let k in value){
            toFlatten(value[k],prefix + "." + k, res)
        }
    }
}

/**
 * normalize config, so that all keys are flatten, all values are string array
 * meta keys  and empty key "" is not kept
 * @param {*} config 
 */
function normalizeConfig(config){
    let newConfig = {}
    for(let key in config){
        let value =  config[key]
        if(!isConfigKey(key)){
            continue
        }
        toFlatten(value,key,newConfig)
    }
    return newConfig
}


/**
 * parse config to computed, config has the form:{
 *     _meta:{
 *         cacheRoot:"cache"
 *     },
 *     app:{
 *         name:"${cache.app.name}"
 *     }
 * }
 * 
 * and will be transformed to:
 * {
 *    data:{
 *       cache:{
 *          app:{
 *             name:null
 *          }
 *       }
 *    },
 *    computed:{
 *        app:{
 *           name:{
 *             get(){return this.cache.app.name}
 *             set(val){this.cache.app.name=val}
 *           }
 *        }
 *    }
 * }
 * @param {*} config 
 */
function parseDataComputed(config) {
    let meta = config["_meta"] || { cacheRoot: "cache"}
    let cacheRoot = meta["cacheRoot"] || "cache"
    let computed = {}
    let normalizedConfig = normalizeConfig(config)
    let cachePrefix = cacheRoot + "."
    let data = {}
    // add cache.* to data
    for(let k in normalizedConfig){
        if(k===cacheRoot || k.startsWith(cachePrefix)){
            continue
        }
        setForceDeepProperty(data, [cacheRoot, ...k.split(".")],null)
    }

    for (let key in normalizedConfig) {
        let value = normalizedConfig[key]
        let templateConfigArray = []
        for(let v of value){
            templateConfigArray.push(parseTemplate(v))
        }
        computed[key] = toGetterSetterPair(key,templateConfigArray, cacheRoot)
    }
    return {computed, data}
}

// module.exports = {
//     parseDataComputed
// }

export {
    parseDataComputed
}