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
    @click='$emit("commentClicked")'
    class='metrics__button'
  )
    IconComment(class='metrics__icon')
    span(class='metrics__text') {{ comments }}
  //- 
  //- button(
  //-   @click='$emit("editClicked")'
  //-   class='metrics__button'
  //- )
  //-   IconEdit(class='metrics__icon')
  //-   span(class='metrics__text') Edit
  //-
  //- button(
  //-   @click='$emit("deleteClicked")'
  //-   class='metrics__button'
  //- )
  //-   IconDelete(class='metrics__icon')
  //-   span(class='metrics__text') Delete
</template>

<script>
import IconComment from '~/assets/svg/comment.svg'
import IconDelete from '~/assets/svg/trash.svg'
import IconEdit from '~/assets/svg/edit.svg'
import IconLike from '~/assets/svg/heart.svg'

export default {
  components: {
    IconComment,
    IconLike,
    IconEdit,
    IconDelete
  },
  props: {
    likes: {
      type: Number,
      required: true
    },
    comments: {
      type: Number,
      default: 0
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
      background: $blue

  &__icon
    width: $unit*2
    fill: $dark

  &__text
    margin-left: $unit
    color: $dark
</style>
