<template lang="pug">
div(class='container')
  header(class='')
    h1 All Posts
    a New Post

  ul
    li(
      v-for='(post, index) in posts'
      :key='post + index'
    )
      Post(
        :title='post.title'
        :body='post.body'
        :author='post.author'
      )
</template>

<script>
import { mapState } from 'vuex'
import Post from '~/components/modules/Post.vue'

export default {
  components: {
    Post
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts
    })
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.container
  & header
    display: flex
    justify-content: space-between
    align-items: center
    border-bottom: 2px solid $pri-cl
    padding: $unit*2

  & h1
    font-size: $fs1
    font-weight: $fw-bold

  & a
    padding: $unit*2
    background: $sec-cl
    color: $white
</style>
