<template lang="pug">
div(class='post')
  a(class='post__title') {{ title }}
  p(class='post__body') {{ body }}
  UserAvatar(
    :author='author'
    class='post__author'
  )
  PostMetrics(
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
  grid-gap: $unit
  // background: $pri-cl
  border-bottom: 2px solid $pri-cl
  // margin: $unit*2
  padding: $unit*2

  &__title
    font-weight: $fw-bold
    grid-row: 1 / 2
    grid-column: 1 / -1
    color: $blue

  &__body
    grid-row: 2 / 3
    grid-column: 1 / -1

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
