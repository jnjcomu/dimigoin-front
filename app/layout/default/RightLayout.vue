<template>
  <div>
    <alert-menu></alert-menu>
    <portal-menu></portal-menu>
  </div>
</template>

<style scoped>

</style>

<script>
import AlertMenu from '../../components/AlertMenu.vue'
import PortalMenu from '../../components/PortalMenu.vue'

export default {
  components: {
    AlertMenu,
    PortalMenu
  }
}
</script>
