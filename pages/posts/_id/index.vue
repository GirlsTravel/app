<template lang="pug">
div(class='container')
  Post(
    v-if='currentQuestion'
    :title='currentQuestion.title'
    :body='currentQuestion.body'
    :author='currentQuestion.username'
    :photoURL='currentQuestion.photoURL'
    :createdAt='currentQuestion.createdAt'
    :likes='currentQuestion.likes'
    :comments='currentQuestion.comments'
    :id='currentQuestion.id'
  )

  section
    div(class='answer')
      div
        h2 {{ currentComments.length }} Answers
        a(
          v-if='!isAnswerFormShown'
          @click='isAnswerFormShown = true'
          class='answer__button'
        ) Add Answer
      form(
        v-if='isAnswerFormShown'
        @submit.stop.prevent=''
      )
        BaseTextarea(
          v-model='answer'
          ref='answerTextarea'
          class='textarea'
          placeholder='Write your answer'
        )
        BaseButton(
          @click='submitAnswer'
        )
        BaseButton(
          text='Cancel'
          @click='cancelAnswer'
        )

    ul
      li(
        v-for='(comment, index) in currentComments'
        :key='comment + index'
      )
        PostComment(
          :body='comment.body'
          :author='comment.username'
          :photoURL='comment.photoURL'
          :createdAt='comment.createdAt'
          :id='comment.id'
          :questionId='currentQuestion.id'
          :likes='comment.likes'
          :comments='comment.comments'
          @edit='editComment'
        )
      li(

      )
        NoAnswerResults(
          @addAnswer='isAnswerFormShown = true'
        )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Post from '~/components/modules/Post.vue'
import PostComment from '~/components/modules/PostComment.vue'
import NoAnswerResults from '~/components/modules/NoAnswerResults.vue'

export default {
  components: {
    Post,
    PostComment,
    NoAnswerResults
  },
  data() {
    return {
      answer: '',
      isAnswerFormShown: false,
      editAnswerData: null
    }
  },
  computed: {
    ...mapGetters({
      currentQuestion: 'posts/currentQuestion',
      currentComments: 'posts/currentComments'
    })
  },
  async fetch({ store, params }) {
    const { id } = params
    await store.dispatch('posts/fetchPost', { id })
    await store.dispatch('posts/fetchPostComments', { questionId: id })
  },
  methods: {
    async submitAnswer() {
      if (this.editAnswerData) {
        // Edit an existing answer
        const { commentId } = await this.updateComment({
          id: this.editAnswerData.id,
          body: this.answer
        })
        console.log('commentId: ', commentId)
      } else {
        // Create a new answer
        const { id } = this.$route.params
        const commentId = await this.createComment({
          questionId: id,
          body: this.answer
        })
        console.log('commentId: ', commentId)
      }
      this.cancelAnswer()
    },

    editComment({ commentId }) {
      const comment = this.currentComments.find(
        (comment) => comment.id === commentId
      )
      this.editAnswerData = comment
      this.answer = comment.body
      this.isAnswerFormShown = true
      this.$nextTick(() => this.$refs.answerTextarea.$el.focus())
    },

    cancelAnswer() {
      this.answer = ''
      this.isAnswerFormShown = false
      this.editAnswerData = null
    },

    ...mapActions({
      createComment: 'posts/createComment',
      updateComment: 'posts/updateComment',
      watchPostComments: 'posts/watchPostComments',
      watchPostMeta: 'posts/watchPostMeta',
      unsubscribeAllListeners: 'posts/unsubscribeAllListeners'
    })
  },
  beforeMount() {
    const { id } = this.$route.params
    this.watchPostComments({ questionId: id })
    this.watchPostMeta()
  },
  beforeDestroy() {
    console.log('beforeDestroy')
    this.unsubscribeAllListeners()
  }
}
</script>

<style lang="sass" scoped>
.container
  & header
    display: flex
    justify-content: space-between
    align-items: center
    // border-bottom: 2px solid $pri-cl
    padding: $unit*2

  & h1
    font-size: $fs1
    font-weight: $fw-bold

  & h2
    font-weight: $fw-bold
    font-size: $fs1

  & a
    padding: $unit*2
    background: $sec-cl
    color: $white

  & .answer
    border-bottom: 4px solid $pri-cl
    padding: $unit*2 $unit*2

    & div
      display: flex
      align-items: center

    &__button
      padding: $unit $unit*2
      background: $blue
      border-radius: $unit*2
      margin-left: auto
      color: $white

    & .textarea
      margin-top: $unit*2
</style>
