<template lang="pug">
div(class='container')
  header(class='')
    h1 All Questions
    nuxt-link(
      :to='{ name: "posts-new" }'
    ) Ask Question

  ul
    li(
      v-for='(post, index) in Object.values(posts)'
      :key='post + index'
    )
      PostSummary(
        :id='post.id'
        :title='post.title'
        :body='post.body'
        :author='post.username'
        :photoURL='post.photoURL'
        :likes='post.likes'
        :dislikes='post.dislikes'
        :comments='post.comments'
        :createdAt='post.createdAt'
      )
    li(
      class=''
    )
      NoQuestionResults(

      )
</template>

<script>
import { mapState } from 'vuex'
import PostSummary from '~/components/modules/PostSummary.vue'
import NoQuestionResults from '~/components/modules/NoQuestionResults.vue'

export default {
  components: {
    PostSummary,
    NoQuestionResults
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts
    })
  },
  async fetch({ store }) {
    await store.dispatch('posts/init')
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
    padding: $unit $unit*2
    background: $blue
    border-radius: $unit*2
    color: $white
</style>
