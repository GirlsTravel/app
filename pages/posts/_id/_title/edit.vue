<template lang="pug">
div(class='edit-question')
  ViewHeader(
    title='Edit Question'
    primaryActionLabel='Update'
    secondaryActionLabel='Cancel'
    @primaryActionClick='handleSubmit'
    @secondaryActionClick='navigateToQuestion'
  )

  aside
    p
      | Please follow the Community Guidelines.&nbsp;
      a Learn more

  form(
    @submit.stop.prevent=''
    class='edit-question__form'
  )
    BaseInput(
      v-model='title'
      label='Title'
      placeholder='When is the best time of the year to visit northern Italy?'
      class='edit-question__form-title'
    )
    BaseTextarea(
      v-model='body'
      label='Message'
      placeholder='Provide more detail here...'
      class='edit-question__form-body'
    )

  //- BaseInput(
  //-   v-model='title'
  //-   label='Title'
  //- )
  //- BaseTextarea(
  //-   v-model='body'
  //-   label='Message'
  //- )
  //- BaseButton(@click='handleSubmit')
  //- nuxt-link(
  //-   :to='{ name: "posts-id", params: { id } }'
  //- ) Cancel
  //- RichTextEditor
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import ViewHeader from '~/components/modules/ViewHeader.vue'
import RichTextEditor from '~/components/modules/RichTextEditor.vue'

export default {
  components: {
    ViewHeader,
    RichTextEditor
  },
  props: {},
  data() {
    return {
      title: '',
      body: ''
    }
  },
  computed: {},
  async asyncData({ store, params }) {
    const { id } = params
    const question = await store.dispatch('posts/fetchPost', { id })
    return { id, question }
  },
  beforeMount() {
    if (!this.question) return
    const { title, body } = this.question
    this.title = title
    this.body = body
  },
  methods: {
    async handleSubmit() {
      await this.updateQuestion({
        id: this.id,
        title: this.title,
        body: this.body
      })
      await this.DELETE_QUESTION({ id: this.id })
      this.navigateToQuestion()
    },

    navigateToQuestion() {
      this.$router.replace({ name: 'posts-id', params: { id: this.id } })
    },

    ...mapMutations({
      DELETE_QUESTION: 'posts/DELETE_QUESTION'
    }),

    ...mapActions({
      updateQuestion: 'posts/updateQuestion'
    })
  }
}
</script>

<style lang="sass" scoped>
.edit-question
  background: white
  padding: 0 $unit*2

  &__header
    position: sticky
    top: $navigation-bar
    display: grid
    grid-template-columns: $unit*8 1fr $unit*8
    justify-items: center
    align-items: center
    height: $unit*7
    background: $white
    background: rgba(255, 255, 255, 0.97)

  & aside
    background: lightyellow
    padding: $unit*2
    border-radius: $unit/2

    & a
      color: $blue
      text-decoration: underline
      white-space: nowrap

  &__form
    padding: $unit*2 0
    display: grid
    grid-gap: $unit*2

    &-title

    &-body
      // min-height: $unit*20
      width: 100%

    &-submit
</style>
