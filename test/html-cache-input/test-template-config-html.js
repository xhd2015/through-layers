const {
    parseDataComputed
}=require("../../src/lib/template-config")
const CacheInput = require("../../src/components/CacheInput").default


// the config, a plain object
let config = {
    _meta:{
        // the cache root is "cache"
        cacheRoot:"cache"
    },
    // the property can be a path string
    "app.name":"${cache.app.name}",
    // and can also be a plain object, note that this object will eventually becomes: "app.version"
    app:{
        version:"${cache.app.version}"
    },
    window:{
        // try in order
        title:["${cache.window.title}","${app.name} - ${app.version}","not set"]
    }
}

let computedConfig = parseDataComputed(config)

// add components
computedConfig.components = {
    CacheInput
}

// create vue, and mount
let vm = new Vue(computedConfig)
vm.$mount("#app")