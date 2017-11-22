/* eslint-disable no-new */

import 'babel-polyfill'

import Vue from 'vue'
import { Observable } from 'rxjs/Observable'
import VueRx from 'vue-rx'

import App from './App.vue'

import store from './store'
import router from './router'

Vue.use(VueRx, {
  Observable
})

new Vue({
  store,
  router,

  el: '#app',
  render: (h) => h(App)
})
