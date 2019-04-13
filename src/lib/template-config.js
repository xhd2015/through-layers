const {
    isObject,
    isArray,
    isPlainObject,
    isString,
    setForceDeepProperty,
    isFunction,
    _global
} = require("./util")

const {
    setDeepExistingReactiveProperty,
    getDeepExistingProperty,
    setDeepForceReactiveProperty
} = require("./vue-utils")

const {
    parseStringTemplateToArray,
    renderTemplateArray,
    templateToRender
} = require("./template-utils")

function setterOfKeyToCache(path) {
    return function setterToCache(val) {
        // set will always fall into data[cacheKey]
        let vm = this
        setDeepExistingReactiveProperty(vm, [vm._cacheRoot(), ...path.split(".")], val)
        // this[cacheKey+"." + path]=val
    }
}
// the key point is, for template#1 and template#2, where template#1 has a higher priority, and value is taken from template#2
//                   we ensure that the final value depends on both template#1 and template#2
function getterOfTemplateRenderers(templateRenders) {
    return function getterFromTemplate() {
        let vm = this
        for (let renderer of templateRenders) {
            let val = renderer.call(vm)
            if (val != null) {
                // resolved
                return val
            }
        }
        // not resolved
        return null
    }
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

   better to be used with CacheInput.vue
 * computed getter and setter pair
 * @param {*} templateRenders 
 * @param path used to set, not useful for get
 */
function getProxyGetterSetterPair(path) {
    let pair = {}
    // let cacheKeyPrefix = cacheKey + "."
    pair.set = function proxiedSetter(val) {
        let vm = this
        return vm._getSetterOf(path).call(vm, val)
    }
    pair.get = function getterFromTemplate() {
        let vm = this
        return vm._getGetterOf(path).call(vm)
    }
    return pair
}

function isConfigKey(key) {
    if (key == null) {
        return false
    }
    if (key === "_meta") {
        return false
    }
    if (key === "") {
        console.warn("key is ignored because it is empty")
        return false
    }
    return true
}
function isEqualOrStartsWith(s,start,split){
    return s==null? false: (s===start || s.startsWith(start+split))
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
    } else if (isFunction(v)) {
        return [v]
    }
    throw "value is not a string, an array or a function, v=" + v
}

/**
 * to flatten keys, such that { a0:{ b0:"b0", b1:"b1" }} ===> {"a0.b0":"b0", "a0.b1":"b1"}
 * @param {Object,Function, Array} value 
 * @param {string} prefix 
 * @param {Object} res 
 */
function toFlatten(value, prefix, res) {
    if (!isPlainObject(value)) {
        res[prefix] = value
    } else {
        for (let k in value) {
            toFlatten(value[k], prefix + "." + k, res)
        }
    }
}

/**
 * normalize config, so that all keys are flatten, all values are string array
 * meta keys , cacehRoot, and empty key "" are not kept
 * @param {Object} config 
 */
function normalizeConfig(cacheRoot, config) {
    let cache = {}
    let computed = {}
    for (let key in config) {
        let value = config[key]
        if (!isConfigKey(key)) {
            continue
        }
        let cfg = isEqualOrStartsWith(key,cacheRoot,".")? cache:computed
        toFlatten(value, key, cfg)
    }
    return {cache, computed}
}


function cachedGetByKeyPath(keyPath) {
    let vm = this
    if (keyPath.startsWith(vm._cachePrefix())) {
        // data
        // console.debug("getDeepExistingProperty = ", getDeepExistingProperty)
        return getDeepExistingProperty(vm, keyPath.split("."))
    } else {
        // computed
        if (!(keyPath in vm)) {
            throw "keyPath is expected to be a computed property, but it is not in vm instance at runtime, check constructor config please.Key:" + keyPath
        }
        return vm[keyPath]
    }
}

function cachedSetByKeyPath(keyPath, val) {
    let vm = this
    if (keyPath.startsWith(vm._cachePrefix())) {
        setDeepExistingReactiveProperty(vm, [...keyPath.split(".")], val)
    } else {
        vm[keyPath] = val
    }
}

function getPresetData() {
    return {}
}



function makeAllPropertyData(cacheRoot, normalizedConfig) {
    let localData = getPresetData()
    localData[cacheRoot] = {}
    // add cache.* to data
    for (let k in normalizedConfig.computed) {
        let pathArray = [cacheRoot,...k.split(".")]
        setForceDeepProperty(localData,pathArray, null)
    }
    for(let k in normalizedConfig.cache){
        let pathArray = k.split(".")
        setForceDeepProperty(localData,pathArray, normalizedConfig.cache[k])
    }
    console.debug("all property data = ", localData)
    return localData
}


/**
 * transfer a configuration to a group of renderers
 * @param {PlainObject, String Template,or Function} conf 
 */
function templateConfToRenderer(conf) {
    let value = getStringOrFunctionArray(conf)
    let templateRenders = []
    for (let v of value) {
        let renderFunction
        if (isString(v)) {
            renderFunction = templateToRender(v, cachedGetByKeyPath)
        } else if (isFunction(v)) {
            renderFunction = v
        }
        templateRenders.push(renderFunction)
    }
    return templateRenders
}

function setOrCreateCachePath(key, value) {
    setDeepForceReactiveProperty(vm[vm._cacheRoot()], key.split("."), value)
}

/**
 * early set
 * @param accepter  vm or methods
 */
function earlySetGetter(accepter,key,conf,str){
    let templateRenderers = templateConfToRenderer(conf)
    accepter._setGetterFunctionString(key, str == null ? conf.toString() : str)
    accepter._setGetterOf(key, getterOfTemplateRenderers(templateRenderers))
}
/**
 * just change the getter, setter and other things are not touched
 * after this, vm.$forceUpdate() will be called
 * @param {*} key 
 * @param {*} conf 
 */
function changeGetterConfig(key, conf, str) {
    let vm = this
    earlySetGetter(vm,key,conf,str)
    vm.$forceUpdate()
}

function changeGetterConfigString(key, confString) {
    this.changeGetterConfig(key, eval("(" + confString + ")"), confString)
}

function emptyOnNullGetter() {
    let vm = this
    return function (k) {
        let v = vm.get(k)
        return v == null ? "" : v
    }
}

function getPresetMethods(cacheRoot, cachPrefix, manifest) {
    let getterMap = {}
    let setterMap = {}
    let getterStringMap = {}
    return {
        get: cachedGetByKeyPath,
        set: cachedSetByKeyPath,
        cachedGetByKeyPath,
        cachedSetByKeyPath,
        emptyOnNullGetter,
        setOrCreateCachePath,
        changeGetterConfig,
        changeGetterConfigString,

        getGetterFunctionString(key) {
            return getterStringMap[key]
        },

        _cachePrefix() {
            return cachPrefix
        },
        _cacheRoot() {
            return cacheRoot
        },
        _getGetterOf(key) {
            return getterMap[key]
        },
        _getSetterOf(key) {
            return setterMap[key]
        },
        _setGetterOf(key, getter) {
            getterMap[key] = getter
        },
        _setSetterOf(key, setter) {
            setterMap[key] = setter
        },
        _setGetterFunctionString(key, conf) {
            getterStringMap[key] = conf
        },
        getManifest() {
            return manifest
        }
    }
}

function getPresetCreatedHook() {
    return []
}
function getBeforeCreateHook(){
    return []
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
    let normalizedConfig = normalizeConfig(cacheRoot, config)
    let cachePrefix = cacheRoot + "."
    let data = function () {
        return makeAllPropertyData(cacheRoot, normalizedConfig)
    }
    if (!dataAsFunction) {
        data = data()
    }

    let manifest = {
        properties: {},
        methods: {}
    }
    let methods = getPresetMethods(cacheRoot, cachePrefix, manifest)
    for (let k in computed) {
        manifest.properties[k] = {}
    }
    for (let k in methods) {
        manifest.methods[k] = {}
    }


    for (let key in normalizedConfig.computed) {
        computed[key] = getProxyGetterSetterPair(key)
    }
    // _setter, _getter, the changeable proxy
    let beforeCreate = getBeforeCreateHook()
    let created = getPresetCreatedHook()

    beforeCreate.push(function () {
        let vm = this
        for (let key in normalizedConfig.computed) {
            earlySetGetter(methods,key,normalizedConfig.computed[key])
            methods._setSetterOf(key, setterOfKeyToCache(key))
        }
    })
   
    return {
        computed,
        data,
        methods,
        created,
        watch:{},
        mounted: [],
        beforeCreate
    }
}

// module.exports = {
//     parseDataComputed
// }

export {
    parseDataComputed,
    emptyOnNullGetter
}