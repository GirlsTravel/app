<template lang="pug">
div(class='post')
  h1(class='post__title') {{ title }}
  AuthorHeader(
    :author='author'
    :photoURL='photoURL'
    :createdAt='createdAt'
    @deleteClicked='handleDeleteArticle'
    @editClicked='editQuestion'
    class='post__author 2'
  )
  div(
    v-lazy:background-image='heroImageURL'
    class='post__image'
  )
  p(class='post__body') {{ body }}
  PostMetrics(
    :likes='likes'
    :isLiked='isLiked'
    @likeClicked='toggleLike'
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
    handle: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    heroImageURL: {
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
        (like) => like.articleId === this.id && !like.commentId
      )
    },

    ...mapGetters({
      currentLikes: 'articles/currentLikes',
      isAuth: 'auth/isAuthUser'
    })
  },
  methods: {
    toggleLike() {
      if (!this.isAuth) this.$router.push({ name: 'auth-signup' })

      if (this.isLiked) {
        console.log('delete like')
        this.deleteLike({ id: this.currentLike.id })
      } else {
        console.log('create like')
        this.createLike({ articleId: this.id })
      }
    },

    editQuestion() {
      this.$router.push({
        name: 'articles-id-handle-edit',
        params: {
          id: this.id,
          handle: this.handle
        }
      })
    },

    async handleDeleteArticle() {
      await this.deleteArticle({ id: this.id })
      this.$router.push({ name: 'index' })
    },

    ...mapActions({
      createLike: 'articles/createLike',
      deleteLike: 'articles/deleteLike',
      deleteArticle: 'articles/deleteArticle'
    })
  }
}
</script>
<style lang="sass" scoped>
.post
  display: grid
  grid-gap: $unit*2
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

  &__image
    width: 100%
    height: $unit*40
    background-color: $pri-cl
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    margin: $unit*2 0
</style>
