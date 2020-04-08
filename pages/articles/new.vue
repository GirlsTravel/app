<template lang="pug">
div(class='new-question')
  ViewHeader(
    title='New Article'
    primaryActionLabel='Create'
    secondaryActionLabel='Cancel'
    @primaryActionClick='handleSubmit'
    @secondaryActionClick='$router.push({ name: "articles" })'
  )

  aside
    p
      | Please follow the Community Guidelines.&nbsp;
      //- a Learn more

  form(
    @submit.stop.prevent=''
    class='new-question__form'
  )
    ImageDropzone(
      :photoURL='imageFinderResult ? imageFinderResult.image : ""'
      @primaryActionClick='openDrawer("imageFinder")'
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
  //- RichTextEditor
  ImageFinder(
    @resultSelected='setImageFinderResult'
  )
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import ViewHeader from '~/components/modules/ViewHeader.vue'
import RichTextEditor from '~/components/modules/RichTextEditor.vue'
import ImageFinder from '~/components/modules/ImageFinder.vue'
import ImageDropzone from '~/components/elements/ImageDropzone.vue'

export default {
  components: {
    ViewHeader,
    RichTextEditor,
    ImageFinder,
    ImageDropzone
  },
  props: {},
  data() {
    return {
      title: '',
      body: '',
      photoURL: '',
      imageFinderResult: null
    }
  },
  computed: {},
  methods: {
    async handleSubmit() {
      try {
        this.$toast.show('One moment, submitting your question.')
        const { articleId, handle } = await this.createBlogPost({
          title: this.title,
          body: this.body,
          heroImageURL: this.imageFinderResult.image
        })
        this.$router.push({
          name: 'articles-id-handle',
          params: {
            id: articleId,
            handle
          }
        })
      } catch (e) {
        this.$toast.show('Oops! Something went wrong. Try again.')
      }
    },

    setImageFinderResult(result) {
      this.imageFinderResult = result
    },

    ...mapMutations({
      openDrawer: 'app/OPEN_DRAWER'
    }),

    ...mapActions({
      createBlogPost: 'articles/createPost'
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

  &__image-result
    width: 100%
    height: $unit*20
    background-position: center
    background-size: cover
    background-repeat: no-repeat
    background-color: $pri-cl
</style>
