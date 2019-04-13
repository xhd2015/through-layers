/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
    return obj !== null && typeof obj === 'object'
}
function isPlainObject(obj){
    return obj !== null && obj.constructor === Object
}
function isArray(obj){
    return Array.isArray(obj)
}
function isString(obj){
    return obj!==null && obj.constructor === String
}
function isFunction(obj){
    return obj!==null && obj.constructor === Function
}
function isType(obj,type){
    return obj!==null && obj.constructor === type
}
function isMap(obj){
    return obj!=null && obj.constructor===Map
}

function setForceDeepProperty(obj,pathArray,value){
    let currentTarget = obj
    for(let i=0;i<pathArray.length;++i){
        let key = pathArray[i]
        if(i===pathArray.length - 1){
            currentTarget[key]=value
            return
        }
        // check existence
        if(!(key in currentTarget)){
            currentTarget[key] = {}
        }
        currentTarget = currentTarget[key]
    }
}

function plainObjectToMap(obj){
    if(isMap(obj)){
        return obj
    }
    let m = new Map()
    for(let k in obj){
        m.set(k, obj[k])
    }
    return m
}

let _global = global!=null?global:window

export {
    isObject,
    isArray,
    isPlainObject,
    isString,
    setForceDeepProperty,
    isFunction,
    plainObjectToMap,
    _global
}