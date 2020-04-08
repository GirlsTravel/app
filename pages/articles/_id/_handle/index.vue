<template lang="pug">
div(class='question')
  ViewHeader(
    title=''
    primaryActionLabel='Share'
    secondaryActionLabel='‹ Back'
    @primaryActionClick=''
    @secondaryActionClick='$router.push({ name: "articles" })'
    class='question__view-header'
  )
  Article(
    v-if='article'
    :title='article.title'
    :handle='article.handle'
    :body='article.body'
    :heroImageURL='article.heroImageURL'
    :author='article.username'
    :photoURL='article.photoURL'
    :createdAt='article.createdAt'
    :likes='article.likes'
    :comments='article.comments'
    :id='article.id'
    class='question__post'
  )

  section(class='question__add-answer')
    header(class='question__add-answer-header')
      h2 {{ currentComments.length }} Answers
      button(
        v-if='!isAnswerFormShown'
        @click='handleAddAnswerClick'
        class='question__add-answer-button'
      ) Add Answer
    CommentForm(
      v-if='isAnswerFormShown'
      v-model='answer'
      @primaryButtonClick='submitAnswer'
      @secondaryButtonClick='cancelAnswer'
      primaryButtonLabel='Post'
      secondaryButtonLabel='Cancel'
      textareaPlaceholder='Write your answer'
      ref='answerTextarea'
      class='question__add-answer-form'
    )

  ul(class='question__list')
    li(
      v-for='(comment, index) in currentComments.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)'
      :key='comment + index'
      class='question__list-item'
    )
      ArticleComment(
        :body='comment.body'
        :author='comment.username'
        :photoURL='comment.photoURL'
        :createdAt='comment.createdAt'
        :id='comment.id'
        :articleId='article.id'
        :likes='comment.likes'
        :comments='comment.comments'
        @edit='editComment'
      )
    li(
      class='question__list-item'
    )
      NoAnswerResults(
        @addAnswer='handleAddAnswerClick'
      )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ViewHeader from '~/components/modules/ViewHeader.vue'
import Article from '~/components/modules/Article.vue'
import ArticleComment from '~/components/modules/ArticleComment.vue'
import NoAnswerResults from '~/components/modules/NoAnswerResults.vue'
import CommentForm from '~/components/modules/CommentForm.vue'

export default {
  components: {
    ViewHeader,
    Article,
    ArticleComment,
    NoAnswerResults,
    CommentForm
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
      currentComments: 'articles/currentComments',
      isAuth: 'auth/isAuthUser'
    })
  },
  async asyncData({ store, params }) {
    const { id } = params
    const article = await store.dispatch('articles/fetchPost', { id })
    return { article }
  },
  async fetch({ store, params }) {
    const { id } = params
    await store.dispatch('articles/fetchPost', { id })
    await store.dispatch('articles/fetchPostComments', { articleId: id })
    store.dispatch('articles/watchPost', { id })
  },
  beforeMount() {
    const { id } = this.$route.params
    this.watchPostComments({ articleId: id })
    this.watchPostMeta()
  },
  beforeDestroy() {
    console.log('beforeDestroy')
    this.unsubscribeAllListeners()
  },
  methods: {
    checkIfAuth() {
      if (!this.isAuth) this.$router.push({ name: 'auth-signup' })
    },

    async submitAnswer() {
      try {
        this.$toast.show('One moment, submitting your answer.')
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
            articleId: id,
            body: this.answer
          })
          console.log('commentId: ', commentId)
        }
        this.cancelAnswer()
      } catch (e) {
        this.$toast.show('Oops! Something went wrong. Try again.')
      }
    },

    editComment({ commentId }) {
      const comment = this.currentComments.find(
        (comment) => comment.id === commentId
      )
      this.editAnswerData = comment
      this.answer = comment.body
      this.isAnswerFormShown = true
      this.focusAnswerTextarea()
    },

    cancelAnswer() {
      this.answer = ''
      this.isAnswerFormShown = false
      this.editAnswerData = null
    },

    handleAddAnswerClick() {
      this.checkIfAuth()
      this.isAnswerFormShown = true
      this.focusAnswerTextarea()
    },

    focusAnswerTextarea() {
      this.$nextTick(() => this.$refs.answerTextarea.focus())
    },

    ...mapActions({
      createComment: 'articles/createComment',
      updateComment: 'articles/updateComment',
      watchPostComments: 'articles/watchPostComments',
      watchPostMeta: 'articles/watchPostMeta',
      unsubscribeAllListeners: 'articles/unsubscribeAllListeners'
    })
  }
}
</script>

<style lang="sass" scoped>
.question
  display: grid
  grid-gap: $unit
  height: min-content

  &__view-header
    padding: 0 $unit*2

  &__post
    background: $white

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

  &__list
    display: grid
    grid-gap: $unit

    &-item
      background: $white

  &__add-answer
    padding: $unit*2 $unit*2
    background: $white

    &-header
      display: flex
      align-items: center

    &-button
      padding: $unit $unit*2
      background: $blue
      border-radius: $unit*2
      margin-left: auto
      color: $white

    &-form
      margin-top: $unit*2
</style>
