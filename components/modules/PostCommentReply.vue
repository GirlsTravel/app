<template lang="pug">
div(class='comment-reply')
  UserProfilePhoto(
    :author='author'
    :photoURL='photoURL'
    class='comment-reply__image'
  )
  p(class='comment-reply__body')
    a(
      class='comment-reply__author'
    ) {{ author }}&nbsp;
    | {{ body }}
  //- p(class='comment-reply__actions') Like Reply
</template>

<script>
import UserProfilePhoto from '~/components/elements/UserProfilePhoto.vue'
import PostMetrics from '~/components/elements/PostMetrics.vue'

export default {
  components: {
    UserProfilePhoto,
    PostMetrics
  },
  props: {
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
    questionId: {
      type: String,
      required: true
    },
    commentId: {
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
.comment-reply
  display: grid
  grid-gap: $unit
  grid-template-columns: auto 1fr
  // border-top: 4px solid $pri-cl
  // border-bottom: 2px solid $pri-cl
  padding: $unit*2 0

  &__image
    align-self: flex-start
    width: $unit*4
    height: $unit*4

  &__body
    color: $dark

  &__author
    font-weight: $fw-bold
    color: $black

  &__actions
    grid-column: 2 / 3
    color: $grey
</style>
