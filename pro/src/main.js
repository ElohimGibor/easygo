// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



Vue.config.productionTip = false
/* 引入element ui */

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI) //使用 这个插件库（UI）



/* 引入 mint-ui   *  */

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI) 

/* eslint-disable no-new */


// /* 引入vuex*/
// import Vuex from "vuex";
// Vue.use(Vuex);
 

new Vue({
  el: "#app",
  router,
  
  // template: '<App/>',
  // components: { App }
  render: h => h(App)

})
