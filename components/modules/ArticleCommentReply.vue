<template lang="pug">
div(class='comment-reply')
  AuthorHeader(
    :author='author'
    :photoURL='photoURL'
    :createdAt='createdAt'
    @deleteClicked='deleteReply({ id })'
    @editClicked='$emit("edit", { replyId: id })'
    class='comment-reply__image'
  )
  p(class='comment-reply__body') {{ body }}
</template>

<script>
import { mapActions } from 'vuex'
import AuthorHeader from '~/components/modules/AuthorHeader.vue'

export default {
  components: {
    AuthorHeader
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
    articleId: {
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
      deleteReply: 'articles/deleteReply'
    })
  }
}
</script>
<style lang="sass" scoped>
.comment-reply
  display: grid
  grid-auto-flow: row
  grid-gap: $unit
  padding: $unit*2 0 $unit*2 $unit*2
  border-left: 4px solid $pri-cl

  &__body
    color: $dark

  &__author
    font-weight: $fw-bold
    color: $black
</style>
