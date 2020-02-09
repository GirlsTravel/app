<template lang="pug">
div(class='post-comment')
  AuthorHeader(
    :author='author'
    :photoURL='photoURL'
    :createdAt='createdAt'
    class='post-comment__author'
  )
  p(class='post-comment__body') {{ body }}

  PostMetrics(
    :likes='likes'
    :comments='comments'
    :isLiked='isLiked'
    @likeClicked='toggleLike'
    class='post-comment__metrics'
    @commentClicked='loadReplies'
    @deleteClicked='deleteComment({ id })'
    @editClicked='$emit("edit", { commentId: id })'
  )

  ul(
    v-if='areRepliesShown'
    class='post-comment__replies'
  )
    li(
      v-for='(reply, index) in commentReplies'
    )
      PostCommentReply(
        :body='reply.body'
        :author='reply.username'
        :photoURL='reply.photoURL'
        :id='reply.id'
        :commentId='reply.id'
        :questionId='reply.questionId'
        :createdAt='reply.createdAt'
        @edit='editReply'
      )

  CommentForm(
    v-if='areRepliesShown'
    @primaryButtonClick='submitReply'
    @secondaryButtonClick='cancelReply'
    primaryButtonLabel='Post'
    secondaryButtonLabel='Cancel'
    textareaPlaceholder='Write your reply...'
  )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AuthorHeader from '~/components/modules/AuthorHeader.vue'
import PostMetrics from '~/components/elements/PostMetrics.vue'
import PostCommentReply from '~/components/modules/PostCommentReply.vue'
import CommentForm from '~/components/modules/CommentForm.vue'

export default {
  components: {
    AuthorHeader,
    PostMetrics,
    PostCommentReply,
    CommentForm
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
    id: {
      type: String,
      required: true
    },
    createdAt: {
      type: Object,
      required: true
    },
    likes: {
      type: Number,
      required: true
    },
    comments: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      reply: '',
      editReplyData: null,
      areRepliesShown: false
    }
  },
  computed: {
    commentReplies() {
      return this.currentReplies.filter((reply) => reply.commentId === this.id)
    },

    isLiked() {
      return Boolean(this.currentLike)
    },

    currentLike() {
      return this.currentLikes.find(
        (like) =>
          like.questionId === this.questionId && like.commentId === this.id
      )
    },

    ...mapGetters({
      currentReplies: 'posts/currentReplies',
      currentLikes: 'posts/currentLikes'
    })
  },
  methods: {
    async submitReply() {
      if (this.editReplyData) {
        const { replyId } = await this.updateReply({
          id: this.editReplyData.id,
          body: this.reply
        })
        console.log('edit replyId: ', replyId)
      } else {
        const { replyId } = await this.createReply({
          questionId: this.questionId,
          commentId: this.id,
          body: this.reply
        })
        console.log('create replyId: ', replyId)
      }

      this.cancelReply()
    },

    editReply({ replyId }) {
      const reply = this.currentReplies.find((reply) => reply.id === replyId)
      this.editReplyData = reply
      this.reply = reply.body
      this.$nextTick(() => this.$refs.replyTextarea.$el.focus())
    },

    loadReplies() {
      if (!this.areRepliesShown) {
        this.areRepliesShown = true
        this.watchPostCommentReplies({
          questionId: this.questionId,
          commentId: this.id
        })
      }
    },

    cancelReply() {
      this.reply = ''
      this.editReplyData = null
    },

    toggleLike() {
      if (this.isLiked) {
        console.log('delete like')
        this.deleteLike({ id: this.currentLike.id })
      } else {
        console.log('create like')
        this.createLike({
          questionId: this.questionId,
          commentId: this.id
        })
      }
    },

    ...mapActions({
      createReply: 'posts/createReply',
      updateReply: 'posts/updateReply',
      fetchPostCommentReplies: 'posts/fetchPostCommentReplies',
      watchPostCommentReplies: 'posts/watchPostCommentReplies',
      createLike: 'posts/createLike',
      deleteLike: 'posts/deleteLike',
      deleteComment: 'posts/deleteComment'
    })
  }
}
</script>
<style lang="sass" scoped>
.post-comment
  display: grid
  grid-gap: $unit*2
  padding: $unit*2

  &__author

  &__body
    color: $dark

  &__metrics
    justify-self: start

  &__replies
    // border-top: 4px solid $pri-cl

  & a
    // text-align: center
    // margin: 0 auto 0 0
    // border-radius: 8px
    // background: $pri-cl
    // padding: 8px 16px
</style>
