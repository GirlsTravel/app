<template lang="pug">
div(
  @click='$router.push({ name: "blogs-id-handle", params: { id, handle } })'
  class='post'
)
  nuxt-link(
    :to='{ name: "blogs-id-handle", params: { id, handle } }'
    class='post__title'
  ) {{ title }}
  UserProfilePhoto(
    :author='author'
    :photoURL='photoURL'
    :createdAt='createdAt'
    class='post__profile-image'
  )
  div(class='post__image')
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
    handle: {
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
  grid-template-rows: 1fr auto
  grid-template-columns: 1fr auto
  padding: $unit*2
  cursor: pointer

  &__title
    grid-row: 1 / 2
    grid-column: 1 / 2
    font-weight: $fw-bold
    font-size: 18px
    margin-bottom: $unit

  &__body
    grid-row: 2 / 3
    grid-column: 1 / 2

  &__image
    grid-row: 1 / -1
    grid-column: 2 / 3
    width: $unit*10
    background-image: url('https://images.unsplash.com/photo-1584391789468-048a5ae45358?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80')
    background-position: center
    background-repeat: no-repeat
    background-size: cover
</style>
