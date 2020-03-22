<template lang="pug">
div(class='new-question')
  ViewHeader(
    title='New Question'
    primaryActionLabel='Create'
    secondaryActionLabel='Cancel'
    @primaryActionClick='handleSubmit'
    @secondaryActionClick='$router.push({ name: "index" })'
  )

  aside
    p
      | Please follow the Community Guidelines.&nbsp;
      a Learn more

  form(
    @submit.stop.prevent=''
    class='new-question__form'
  )
    BaseInput(
      v-model='title'
      label='Title'
      placeholder='When is the best time of the year to visit northern Italy?'
      class='new-question__form-title'
    )
    BaseTextarea(
      v-model='body'
      label='Message'
      placeholder='Provide more detail here...'
      class='new-question__form-body'
    )
  //- label Message
  //- div(
  //-   v-model='body'
  //-   contenteditable='true'
  //-   class='new-question__form-body'
  //- )
  //- BaseButton(
  //-   @click='handleSubmit'
  //-   class='new-question__form-submit'
  //- )
  //- RichTextEditor
</template>

<script>
import { mapActions } from 'vuex'
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
  methods: {
    async handleSubmit() {
      const { questionId, titleSlug } = await this.createQuestion({
        title: this.title,
        body: this.body
      })
      this.$router.push({
        name: 'posts-id',
        params: {
          id: questionId,
          title: titleSlug
        }
      })
    },
    ...mapActions({
      createQuestion: 'posts/createQuestion'
    })
  },
  middleware: 'isAuth'
}
</script>

<style lang="sass" scoped>
.new-question
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
