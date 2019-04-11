const App = require('./App').default

console.debug('App = ', App)
let v= new Vue({
    components:{App},
    template:`<app></app>`
})
v.$mount("#app")

console.debug("new vue instance = ", v)
