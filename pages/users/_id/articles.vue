<template lang="pug">
div(class='questions')
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
</template>

<script>
import { mapState } from 'vuex'
import ArticleSummary from '~/components/modules/ArticleSummary.vue'

export default {
  components: {
    ArticleSummary
  },
  props: {},
  async fetch({ store }) {
    await store.dispatch('articles/init')
  },
  data() {
    return {}
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

  &__list
    display: grid
    grid-gap: $unit

    &-item
      background: $white
</style>
