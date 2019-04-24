import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const EditorIndex = require('./index/EditorIndex').default
const App = require('./App').default

export default new Router({
    routes: [
        // dynamic segments start with a colon
        {
            path:'/appIndex',
            component:App
        },
        {
            path: '*',
            redirect: '/appIndex'
        },
        { 
            path: '/editorIndex', 
            component: EditorIndex
        }
      ]
})