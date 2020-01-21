<template lang="pug">
div(class='container')
  Post(
    v-if='post'
    :title='post.title'
    :body='post.body'
    :author='post.author'
    :likes='post.likes'
    :dislikes='post.dislikes'
    :comments='post.comments'
  )

  section
    h2 {{ posts.length }} Answers
    ul
      li(
        v-for='(post, index) in Object.values(comments)'
        :key='post + index'
      )
        PostComment(
          :body='post.body'
          :author='post.author'
        )
</template>

<script>
import { mapState } from 'vuex'
import Post from '~/components/modules/Post.vue'
import PostComment from '~/components/modules/PostComment.vue'

export default {
  components: {
    Post,
    PostComment
  },
  computed: {
    post() {
      const { id } = this.$route.params
      return this.posts[id]
    },
    ...mapState({
      posts: (state) => state.posts.posts,
      comments: (state) => state.posts.comments
    })
  },
  async fetch({ store, params }) {
    const { id } = params
    await store.dispatch('posts/fetchPost', { id })
    await store.dispatch('posts/fetchPostComments', { postId: id })
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
