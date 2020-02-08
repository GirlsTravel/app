<template lang="pug">
div(class='comment-reply')
  //- div(class='comment-reply__header')
  AuthorHeader(
    :author='author'
    :photoURL='photoURL'
    :createdAt='createdAt'
    class='comment-reply__image'
  )
    //- a(
    //-   class='comment-reply__author'
    //- ) {{ author }}&nbsp;
  p(
    class='comment-reply__body'
  )
    | {{ body }}
  //- p(class='comment-reply__actions') Like Reply
  PostMetrics(
    @deleteClicked='deleteReply({ id })'
    @editClicked='$emit("edit", { replyId: id })'
  )
</template>

<script>
import { mapActions } from 'vuex'
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
    },
    createdAt: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    ...mapActions({
      deleteReply: 'posts/deleteReply'
    })
  }
}
</script>
<style lang="sass" scoped>
.comment-reply
  display: grid
  grid-auto-flow: row
  grid-gap: $unit
  // grid-template-columns: auto 1fr
  // border-top: 4px solid $pri-cl
  // border-bottom: 2px solid $pri-cl
  padding: $unit*2 0
  padding-left: $unit*2
  border-left: 4px solid $pri-cl

  // &__header
  //   display: flex

  &__image
    // width: $unit*4
    // height: $unit*4

  &__body
    color: $dark

  &__author
    font-weight: $fw-bold
    color: $black

  // &__actions
  //   grid-column: 2 / 3
  //   color: $grey
</style>
