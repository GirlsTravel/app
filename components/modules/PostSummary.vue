<template lang="pug">
div(
  @click='$router.push({ name: "questions-id-title", params: { id, title: titleSlug } })'
  class='post'
)
  nuxt-link(
    :to='{ name: "questions-id-title", params: { id, title: titleSlug } }'
    class='post__title'
  ) {{ title }}
  UserProfilePhoto(
    :author='author'
    :photoURL='photoURL'
    :createdAt='createdAt'
    class='post__profile-image'
  )
  PostMetrics(
    :likes='likes'
    :comments='comments'
    class='post__metrics'
  )
</template>

<script>
import UserProfilePhoto from '~/components/modules/UserAvatar.vue'
import PostMetrics from '~/components/elements/PostMetrics.vue'
import IconComment from '~/assets/svg/comment.svg'

export default {
  components: {
    UserProfilePhoto,
    PostMetrics,
    IconComment
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
    titleSlug: {
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
    likes: {
      type: Number,
      required: true
    },
    comments: {
      type: Number,
      required: true
    },
    createdAt: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    createdAtFromNow() {
      if (!this.createdAt) return ''
      const date = new Date(this.createdAt.seconds * 1000)
      return this.$moment(date).fromNow()
    }
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
.post
  display: grid
  grid-gap: $unit
  padding: $unit*2
  cursor: pointer

  &__title
    font-weight: $fw-bold
    font-size: 18px
    margin-bottom: $unit

  &__body

  &__metrics
    justify-self: start
</style>
