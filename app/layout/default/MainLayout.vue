<template>
  <div>
    <post v-for="post in posts" :key="post.id"></post>
  </div>
</template>

<style scoped>

</style>

<script>
import store from '../../store'
import Post from '../../components/Post.vue'

export default {
  data () {
    return {
      posts: store.post.getList
    }
  },
  components: {
    Post
  }
}
</script>
