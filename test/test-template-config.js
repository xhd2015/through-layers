const {parseDataComputed} = require("../src/lib/template-config")
const Vue =require('vue')

let config = {
    "app.name":"${cache.app.name}",
    app:{
        version:"${cache.app.version}"
    },
    window:{
        title:["${cache.window.title}","${app.name} - ${app.version}","not set"]
    }
}
let computedConfig = parseDataComputed(config)

console.info("config =", computedConfig)


let vm = new Vue(computedConfig)

console.info("window.title = ", vm["window.title"])

vm["app.name"]="MyVue"
vm["app.version"]="1.0.0"


console.info("window.title = ", vm["window.title"])

vm["cache.window.title"]="Proper Set of Title"

console.info("window.title = ", vm["window.title"])