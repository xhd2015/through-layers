/**
 * set an existing property, the property must exist
 * @param {} vm 
 * @param {*} pathArray 
 * @param {*} value 
 */
function setDeepExistingReactiveProperty(vm,pathArray,value){
    let currentTarget = vm
    for(let i=0;i<pathArray.length;++i){
        let key = pathArray[i]
        if(i===pathArray.length - 1){
            vm.$set(currentTarget,key, value)
            return
        }
        // check existence
        if(!(key in currentTarget)){
            throw "path segment :" + pathArray.slice(0,i+1).join(".") + " does not exist"
        }
        currentTarget = currentTarget[key]
    }
}

function getDeepExistingProperty(vm,pathArray){
    let currentTarget = vm
    for(let i=0;i<pathArray.length;++i){
        let key = pathArray[i]
        if(!(key in currentTarget)){
            throw "path segment :" + pathArray.slice(0,i+1).join(".") + " does not exist"
        }
        currentTarget = currentTarget[key]
    }
    return currentTarget
}

// module.exports = {
//     setDeepExistingReactiveProperty,
//     getDeepExistingProperty
// }

export {
    setDeepExistingReactiveProperty,
    getDeepExistingProperty
}