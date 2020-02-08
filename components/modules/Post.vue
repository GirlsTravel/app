<template lang="pug">
div(class='post')
  h1(class='post__title') {{ title }}
  AuthorHeader(
    :author='author'
    :photoURL='photoURL'
    :createdAt='createdAt'
    class='post__author'
  )
  p(class='post__body') {{ body }}
  PostMetrics(
    :likes='likes'
    :comments='comments'
    :isLiked='isLiked'
    @likeClicked='toggleLike'
    @deleteClicked='handleDeleteQuestion'
    @editClicked='editQuestion'
    class='post__metrics'
  )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AuthorHeader from '~/components/modules/AuthorHeader.vue'
import PostMetrics from '~/components/elements/PostMetrics.vue'

export default {
  components: {
    AuthorHeader,
    PostMetrics
  },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    photoURL: {
      type: String,
      required: true
    },
    createdAt: {
      type: Object,
      required: true
    },
    likes: {
      type: Number,
      required: true
    },
    comments: {
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    isLiked() {
      return Boolean(this.currentLike)
    },

    currentLike() {
      return this.currentLikes.find(
        (like) => like.questionId === this.id && !like.commentId
      )
    },

    ...mapGetters({
      currentLikes: 'posts/currentLikes'
    })
  },
  methods: {
    toggleLike() {
      if (this.isLiked) {
        console.log('delete like')
        this.deleteLike({ id: this.currentLike.id })
      } else {
        console.log('create like')
        this.createLike({ questionId: this.id })
      }
    },

    editQuestion() {
      this.$router.push({ name: 'posts-id-edit', params: { id: this.id } })
    },

    async handleDeleteQuestion() {
      await this.deleteQuestion({ id: this.id })
      this.$router.push({ name: 'index' })
    },

    ...mapActions({
      createLike: 'posts/createLike',
      deleteLike: 'posts/deleteLike',
      deleteQuestion: 'posts/deleteQuestion'
    })
  }
}
</script>
<style lang="sass" scoped>
.post
  display: grid
  grid-gap: $unit*2
  // background: $pri-cl
  // border-top: 4px solid $pri-cl
  border-bottom: 4px solid $pri-cl
  // margin: $unit*2
  padding: $unit*2

  &__title
    font-weight: $fw-bold
    font-size: $fs1

  &__author

  &__body
    white-space: pre-line
    color: $dark

  &__metrics
    justify-self: start
</style>
