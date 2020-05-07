<template lang="pug">
div(class='questions')
  header(class='questions__header')
    h1 Articles
    nuxt-link(
      :to='{ name: "articles-new" }'
      class='questions__header-link'
    ) Write Article

  ul(class='questions__list')
    li(
      v-for='(post, index) in Object.values(posts)'
      :key='post + index'
      class='questions__list-item'
    )
      ArticleSummary(
        :id='post.id'
        :title='post.title'
        :handle='post.handle'
        :body='post.body'
        :heroImageURL='post.heroImageURL'
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
import ArticleSummary from '~/components/modules/ArticleSummary.vue'
import NoQuestionResults from '~/components/modules/NoQuestionResults.vue'

export default {
  components: {
    ArticleSummary,
    NoQuestionResults
  },
  async fetch({ store }) {
    await store.dispatch('articles/init')
  },
  computed: {
    sortedPosts() {
      return Object.values(this.posts).sort(
        (a, b) => b.createdAt.seconds - a.createdAt.seconds
      )
    },

    ...mapState({
      posts: (state) => state.articles.posts
    })
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
    height: min-content

    &-item
      background: $white
</style>
