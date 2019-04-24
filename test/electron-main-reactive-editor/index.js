const Vue = require('vue').default
const Entry = require('./Entry').default

var rootVue = new Vue(Entry)
rootVue.$mount("#app")