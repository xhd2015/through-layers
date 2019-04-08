import Vue from "vue";
import App from "./components/App"
import Test from "./components/Test"


let v = new Vue({
    el: "#app",
    components: {App, Test},
    template: `<test></test>`
});
