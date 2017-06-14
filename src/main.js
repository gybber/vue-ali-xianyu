
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper' 
import store from './store/'
import mint from '@/library/mint'
import axios from 'axios'
import lrz from 'lrz'  //图片懒加载
import RegionPicker from 'vue-region-picker'
import REGION_DATA from 'china-area-data'

axios.default.timeout = 5000

Vue.use(RegionPicker, { //三级联动
  region: REGION_DATA,
  vueVersion: 2
})

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.lrz = lrz
import APIJS from './assets/js/api.js'
Vue.prototype.api = APIJS
import UtilJS from './assets/js/util.js'
Vue.prototype.util = UtilJS
/* eslint-disable no-new */
let Hub = new Vue()
let vm = new Vue({
  el: '#app',
  router,
  store,
  mint,
  template: '<App/>',
  components: { App }
})
console.log(vm)
