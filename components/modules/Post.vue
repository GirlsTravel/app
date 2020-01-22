<template lang="pug">
div(class='post')
  h1(class='post__title') {{ title }}
  p(class='post__body') {{ body }}
  UserAvatar(
    :author='author'
    class='post__author'
  )
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
  grid-template-columns: 1fr auto
  grid-gap: $unit*5
  // background: $pri-cl
  border-bottom: 2px solid $pri-cl
  // margin: $unit*2
  padding: $unit*2

  &__title
    font-weight: $fw-bold
    font-size: $fs1
    grid-row: 1 / 2
    grid-column: 1 / -1

  &__body
    grid-row: 2 / 3
    grid-column: 1 / -1
    white-space: pre-line

  &__author
    grid-row: 3 / 4
    grid-column: 1 / 2

  &__metrics
    grid-row: 4 / 5
    grid-column: 1 / -1
    justify-self: start
    +mq-xs
      grid-row: 3 / 4
      grid-column: 2 / 3
      align-self: end
      justify-self: end
</style>
