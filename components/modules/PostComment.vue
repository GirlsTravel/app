<template lang="pug">
div(class='post-comment')
  UserAvatar(
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
      )

  form(
    v-if='areRepliesShown'
    @submit.stop.prevent='submitReply'
  )
    BaseTextarea(
      v-model='reply'
      class='textarea'
      placeholder='Write your reply'
    )
    BaseButton
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import UserAvatar from '~/components/elements/UserAvatar.vue'
import PostMetrics from '~/components/elements/PostMetrics.vue'
import PostCommentReply from '~/components/modules/PostCommentReply.vue'

export default {
  components: {
    UserAvatar,
    PostMetrics,
    PostCommentReply
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
      const replyId = await this.createReply({
        questionId: this.questionId,
        commentId: this.id,
        body: this.reply
      })
      console.log('replyId: ', replyId)
      this.reply = ''
    },

    async loadReplies() {
      if (!this.areRepliesShown) {
        this.areRepliesShown = true
        await this.fetchPostCommentReplies({
          questionId: this.questionId,
          commentId: this.id
        })
      }
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
      fetchPostCommentReplies: 'posts/fetchPostCommentReplies',
      createLike: 'posts/createLike',
      deleteLike: 'posts/deleteLike'
    })
  }
}
</script>
<style lang="sass" scoped>
.post-comment
  display: grid
  grid-gap: $unit*2
  // background: $pri-cl
  // border-top: 4px solid $pri-cl
  border-bottom: 4px solid $pri-cl
  // margin: $unit*2
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
