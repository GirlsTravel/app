<template lang="pug">
div(class='page-content')
  div(
    v-lazy:background-image='heroImageURL'
    class='page-content__hero-image'
  )
  h1(class='page-content__title') {{ title }}
  RichText(
    :html='bodyHtml'
    class='page-content__body'
  )
</template>

<script>
import RichText from '~/components/elements/RichText.vue'

export default {
  components: {
    RichText
  },
  props: {
    title: {
      type: String,
      required: true
    },
    bodyHtml: {
      type: String,
      required: true
    },
    heroImageURL: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.page-content
  display: grid
  grid-gap: $unit*4 0
  grid-template-columns: minmax($unit*2, 1fr) minmax(auto, 1080px) minmax($unit*2, 1fr)
  padding-bottom: $unit*10
  background: $white

  &__hero-image
    grid-column: 1 / -1
    height: 400px
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    background-color: $pri-cl

  &__title
    grid-column: 2 / 3
    font-size: $fs2
    font-weight: $fw-bold
    text-align: center

  &__body
    grid-column: 2 / 3
</style>
