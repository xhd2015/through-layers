

function getLast(arr){
    return arr? arr[arr.length-1]:null
}

function capitalize(str){
    if(str===""){
        return ""
    }
    return str!=null? str[0].toUpperCase()+str.slice(1) : null
}

function decapitalize(str){
    if(str===""){
        return ""
    }
    return str!=null? str[0].toLowerCase()+str.slice(1) : null
}

export {
    getLast,
    capitalize,
    decapitalize
}