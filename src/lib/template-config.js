
const {
    isObject,
    isArray,
    isPlainObject,
    isString,
    setForceDeepProperty,
    isFunction
} = require("./util")

const {
    setDeepExistingReactiveProperty,
    getDeepExistingProperty
} = require("./vue-utils")

const {
    parseStringTemplateToArray,
    renderTemplateArray,
    templateToRender
} = require("./template-utils")

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

   better to be used with CacheInput.vue
 * computed getter and setter pair
 * @param {*} templateRenders 
 * @param path used to set, not useful for get
 */
function toGetterSetterPair(path, templateRenders, cacheKey) {
    let pair = {}
    let segments = path.split(".")
    // let cacheKeyPrefix = cacheKey + "."
    pair.set = function setterToCache(val) {
        // set will always fall into data[cacheKey]
        setDeepExistingReactiveProperty(this, [cacheKey, ...segments], val)
        // this[cacheKey+"." + path]=val
    }
    // the key point is, for template#1 and template#2, where template#1 has a higher priority, and value is taken from template#2
    //                   we ensure that the final value depends on both template#1 and template#2
    pair.get = function getterFromTemplate() {
        let vm = this
        for (let renderer of templateRenders) {
            let val = renderer.call(vm)
            if(val!=null){
                // resolved
                return val
            }
        }
        // not resolved
        return null
    }
    return pair
}

function isConfigKey(key) {
    if (key === "_meta") {
        return false
    }
    if (key === "") {
        console.warn("key is ignored because it is empty")
        return false
    }
    return true
}


function getStringOrFunctionArray(v) {
    if (isString(v)) {
        return [v]
    } else if (isArray(v)) {
        // check that every item in the array must be string or function also
        for (let i of v) {
            if (!isString(i) && !isFunction(i)) {
                throw "value in the array is not a string nor a function"
            }
        }
        return v
    }else if(isFunction(v)){
        return [v]
    }
    throw "value is not a string, an array or a function"
}

/**
 * to flatten keys, such that { a0:{ b0:"b0", b1:"b1" }} ===> {"a0.b0":"b0", "a0.b1":"b1"}
 * @param {} value 
 * @param {*} prefix 
 * @param {*} res 
 */
function toFlatten(value, prefix, res) {
    if (!isPlainObject(value)) {
        res[prefix] = getStringOrFunctionArray(value)
    } else {
        for (let k in value) {
            toFlatten(value[k], prefix + "." + k, res)
        }
    }
}

/**
 * normalize config, so that all keys are flatten, all values are string array
 * meta keys  and empty key "" is not kept
 * @param {*} config 
 */
function normalizeConfig(config) {
    let newConfig = {}
    for (let key in config) {
        let value = config[key]
        if (!isConfigKey(key)) {
            continue
        }
        toFlatten(value, key, newConfig)
    }
    return newConfig
}


function cachedGetByKeyPath(keyPath){
    let vm = this
    if (keyPath.startsWith(vm._cachePrefix())) {
        // data
        // console.debug("getDeepExistingProperty = ", getDeepExistingProperty)
        return  getDeepExistingProperty(vm, keyPath.split("."))
    } else {
        // computed
        if (!(keyPath in vm)) {
            throw "keyPath is expected to be a computed property, but it is not in vm instance at runtime, check constructor config please.Key:" + keyPath
        }
        return vm[keyPath]
    }
}
function cachedSetByKeyPath(keyPath,val){
    let vm = this
    if(keyPath.startsWith(vm._cachePrefix())){
        setDeepExistingReactiveProperty(vm, [...keyPath.split(".")], val)
    }else{
        vm[keyPath]=val
    }
}

function getPresetData(){
    return {}
}
function getPresetMethods(cacheRoot,cachPrefix){
    return {
        get:cachedGetByKeyPath,
        set:cachedSetByKeyPath,
        cachedGetByKeyPath,
        cachedSetByKeyPath,
        _cachePrefix(){ return cachPrefix },
        _cacheRoot() { return cacheRoot}
    }
}
function makeAllPropertyData(cacheRoot,cachePrefix,normalizedConfig){
    let localData =  getPresetData()
    // add cache.* to data
    for (let k in normalizedConfig) {
        if (k === cacheRoot || k.startsWith(cachePrefix)) {
            continue
        }
        setForceDeepProperty(localData, [cacheRoot, ...k.split(".")], null)
    }
    return localData
}

/**
 * parse config to computed, config has the form:{
 *     _meta:{
 *         cacheRoot:"cache",
 *         dataAsFunction:true, // should data be a function,usually for component
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
    let meta = config["_meta"] || {
        cacheRoot: "cache"
    }
    let cacheRoot = meta["cacheRoot"] || "cache"
    let dataAsFunction = "dataAsFunction" in meta ? (!!meta.dataAsFunction) : true
    let computed = {}
    let normalizedConfig = normalizeConfig(config)
    let cachePrefix = cacheRoot + "."
    let data = function(){ return makeAllPropertyData(cacheRoot,cachePrefix,normalizedConfig) }
    if (!dataAsFunction) {
        data = data()
    }

    for (let key in normalizedConfig) {
        let value = normalizedConfig[key]
        let templateRenders = []
        for (let v of value) {
            let renderFunction
            if(isString(v)){
                renderFunction= templateToRender(v, cachedGetByKeyPath) 
            }else if(isFunction(v)){
                renderFunction=v
            }
            templateRenders.push(renderFunction)
        }
        computed[key] = toGetterSetterPair(key, templateRenders, cacheRoot)
    }
    return {
        computed,
        data,
        methods: getPresetMethods(cacheRoot,cachePrefix)
    }
}

// module.exports = {
//     parseDataComputed
// }

export {
    parseDataComputed
}