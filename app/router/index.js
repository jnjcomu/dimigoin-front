import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from './Auth.vue'
import DefaultMainLayout from '../layout/default/MainLayout.vue'
import DefaultLeftLayout from '../layout/default/LeftLayout.vue'
import DefaultRightLayout from '../layout/default/RightLayout.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      components: {
        default: DefaultMainLayout,
        leftLayout: DefaultLeftLayout,
        rightLayout: DefaultRightLayout
      }
    },
    {
      path: '/auth',
      name: 'Auth',
      component: {
        default: Auth
      }
    }
  ]
})

export default router
