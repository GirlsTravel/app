<template lang="pug">
div(class='questions')
  header(class='questions__header')
    h1 Questions
    nuxt-link(
      :to='{ name: "posts-new" }'
      class='questions__header-link'
    ) Ask Question

  ul(class='questions__list')
    li(
      v-for='(post, index) in Object.values(posts)'
      :key='post + index'
      class='questions__list-item'
    )
      PostSummary(
        :id='post.id'
        :title='post.title'
        :titleSlug='post.titleSlug'
        :body='post.body'
        :author='post.username'
        :photoURL='post.photoURL'
        :likes='post.likes'
        :comments='post.comments'
        :createdAt='post.createdAt'
      )
    li(
      class='questions__list-item'
    )
      NoQuestionResults()
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
    sortedPosts() {
      return Object.values(this.posts).sort(
        (a, b) => b.createdAt.seconds - a.createdAt.seconds
      )
    },

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
.questions
  display: grid
  grid-gap: $unit
  grid-template-rows: min-content 1fr

  &__header
    display: flex
    justify-content: space-between
    align-items: center
    padding: $unit*2
    background: $white

    &-link
      padding: $unit $unit*2
      background: $blue
      border-radius: $unit*2
      color: $white

  & h1
    font-size: $fs1
    font-weight: $fw-bold

  &__list
    display: grid
    grid-gap: $unit

    &-item
      background: $white
</style>
