<template lang="pug">
div(class='post-metrics')
  div
    IconComment(class='icon')
    span {{ comments }}
  div
    IconLike(class='icon')
    span {{ likes }}
  div
    IconDislike(class='icon')
    span {{ dislikes }}
</template>

<script>
import IconComment from '~/assets/svg/comment.svg'
import IconLike from '~/assets/svg/thumbs-up.svg'
import IconDislike from '~/assets/svg/thumbs-down.svg'

export default {
  components: {
    IconComment,
    IconLike,
    IconDislike
  },
  props: {
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
      default: 0
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
.post-metrics
  display: grid
  grid-auto-flow: column
  grid-gap: $unit*2

.icon
  width: $unit*2
  fill: $dark

span
  margin-left: $unit
  color: $dark
</style>
