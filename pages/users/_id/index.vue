<template lang="pug">
div(class='questions')
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
</template>

<script>
import { mapState } from 'vuex'
import PostSummary from '~/components/modules/PostSummary.vue'

export default {
  components: {
    PostSummary
  },
  props: {},
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

  &__list
    display: grid
    grid-gap: $unit

    &-item
      background: $white
</style>
