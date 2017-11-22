import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './Main.vue'
import Auth from './Auth.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'Main', component: Main },
    { path: '/auth', name: 'Auth', component: Auth }
  ]
})

export default router
