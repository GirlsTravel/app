<template lang="pug">
section(class='gallery')
  button(
    v-for='(image, index) in images'
    :key='image + index'
    class='gallery__button'
  )
    span(
      class='gallery__flag'
    ) {{ index % 2 === 0 ? 'Before' : 'After' }}
    ImageElement(
      :src='image.src'
      :isBackgroundImage='true'
      :aspectRatio='5 / 4'
    )
</template>

<script>
import ImageElement from '~/components/elements/Image.vue'

export default {
  components: {
    ImageElement
  },
  props: {
    images: {
      type: Array,
      default: () => []
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
.gallery
  display: grid
  grid-auto-rows: min-content
  grid-template-columns: repeat(2, 1fr)
  grid-gap: $unit

  &__button
    position: relative

  &__flag
    position: absolute
    z-index: 9
    top: $unit*2
    right: 0
    padding: $unit/2 $unit
    background: $white
    border-top-left-radius: $border-radius
    border-bottom-left-radius: $border-radius
</style>
