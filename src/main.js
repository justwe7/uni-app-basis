import Vue from 'vue'
import App from './App'
import store from './store'  
import * as Global from "@/common/js/global";//定义全局的一些方法 挂载至vue原型链



Vue.prototype.$store = store  
Vue.config.productionTip = false

Object.assign(Vue.prototype, {
  $global: Global,
  $get: Global.$get,
  $post: Global.$post,
});

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
