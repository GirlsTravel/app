<template lang="pug">
div(class='new-question')
  ViewHeader(
    title='New Article'
    primaryActionLabel='Update'
    secondaryActionLabel='Cancel'
    @primaryActionClick='handleSubmit'
    @secondaryActionClick='$router.push({ name: "articles-id-handle", params: { id, handle } })'
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
      :photoURL='photoURL'
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
  async asyncData({ store, params }) {
    const { id, handle } = params
    console.log('handle: ', handle)
    const article = await store.dispatch('articles/fetchPost', { id })
    return { id, handle, article }
  },
  beforeMount() {
    if (!this.article) return
    const { title, body, heroImageURL } = this.article
    this.title = title
    this.body = body
    this.photoURL = heroImageURL
  },
  methods: {
    async handleSubmit() {
      try {
        this.$toast.show('One moment, submitting your question.')
        const { handle } = await this.updateArticle({
          id: this.id,
          title: this.title,
          body: this.body,
          heroImageURL: this.photoURL
        })
        this.handle = handle
        await this.deleteArticle({ id: this.id })
        this.navigateToArticle()
      } catch (e) {
        console.log('e: ', e)
        this.$toast.show('Oops! Something went wrong. Try again.')
      }
    },

    setImageFinderResult(result) {
      console.log('result: ', result)
      this.imageFinderResult = result
      this.photoURL = result.image
    },

    navigateToArticle() {
      this.$router.replace({
        name: 'articles-id-handle',
        params: {
          id: this.id,
          handle: this.handle
        }
      })
      console.log('lol')
    },

    ...mapMutations({
      openDrawer: 'app/OPEN_DRAWER',
      deleteArticle: 'articles/DELETE_POST'
    }),

    ...mapActions({
      updateArticle: 'articles/updatePost'
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
