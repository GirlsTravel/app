<template lang="pug">
div(class='post')
  h1(class='post__title') {{ title }}
  UserAvatar(
    :author='author'
    :photoURL='photoURL'
    class='post__author'
  )
  p(class='post__body') {{ body }}
  PostMetrics(
    :likes='likes'
    :dislikes='dislikes'
    :comments='comments'
    class='post__metrics'
  )
</template>

<script>
import UserAvatar from '~/components/elements/UserAvatar.vue'
import PostMetrics from '~/components/elements/PostMetrics.vue'

export default {
  components: {
    UserAvatar,
    PostMetrics
  },
  props: {
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
    likes: {
      type: Number,
      required: true
    },
    dislikes: {
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
  computed: {},
  methods: {}
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

  &__metrics
    justify-self: start
</style>
