import Vue from 'vue'
import App from './App.vue'


import VueResource from 'vue-resource';

//Task the global Vue to use the Vue Resource
Vue.use(VueResource);


new Vue({
  el: '#app',
  render: h => h(App)
})
