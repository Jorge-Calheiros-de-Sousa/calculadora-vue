import Vue from "vue";
import App from './App';


new Vue({
    render: a => a(App),
    data: {
        title: "Ola mundo!"
    }
}).$mount("#app")