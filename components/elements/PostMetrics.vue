<template lang="pug">
div(class='metrics')
  button(
    @click='$emit("likeClicked")'
    :class='{ active: isLiked }'
    class='metrics__button'
  )
    IconLike(class='metrics__icon')
    span(class='metrics__text') {{ likes }}

  button(
    v-if='comments !== undefined'
    @click='$emit("commentClicked")'
    class='metrics__button'
  )
    IconComment(class='metrics__icon')
    span(class='metrics__text') {{ comments }}
</template>

<script>
import IconLike from '~/assets/svg/heart.svg'
import IconComment from '~/assets/svg/comment.svg'

export default {
  components: {
    IconLike,
    IconComment
  },
  props: {
    likes: {
      type: Number,
      required: true
    },
    comments: {
      type: Number
    },
    isLiked: {
      type: Boolean,
      default: false
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
.metrics
  display: grid
  grid-auto-flow: column
  grid-gap: $unit*2

  &__button
    @extend %flex--row-center
    background: $pri-cl
    padding: $unit/2 $unit*1.5
    border-radius: $unit*2
    // border: 2px solid $pri-cl

    &.active

      & .metrics__icon
        fill: rgb(237, 73, 86)

  &__icon
    width: $unit*2
    fill: $dark

  &__text
    margin-left: $unit
    color: $dark
</style>
