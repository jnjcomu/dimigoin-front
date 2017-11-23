<template>
  <main>
    <app-nav></app-nav>
    <div class="row">
      <router-view class="col-xs-2" name="rightLayout"></router-view>
      <router-view class="col-xs"></router-view>
      <router-view class="col-xs-2" name="leftLayout"></router-view>
    </div>
    <app-footer></app-footer>
  </main>
</template>

<style scoped>

</style>

<script>
import 'normalize.css'
import 'flexboxgrid'
import 'font-awesome/css/font-awesome.css'
import './style/theme.css'

import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppNav,
    AppFooter
  }
}
</script>