import axios from 'axios'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import VueLazyComponent from '../node_modules/@xunlei/vue-lazy-component'
import './filter'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueLazyComponent)
/* eslint-disable no-new */

Vue.prototype.$http = axios
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
