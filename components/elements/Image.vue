<template lang="pug">
div(
  :style='aspectRatioStyle'
  class='image-container'
)
  img(
    v-if='!isBackgroundImage'
    v-lazy='src'
    :alt='alt'
    class='image-container__image'
  )
  div(
    v-else
    v-lazy:background-image='src'
    class='image-container__background-image'
  )
</template>

<script>
export default {
  components: {},
  props: {
    alt: {
      type: String,
      default: ''
    },
    aspectRatio: {
      type: Number,
      default: 1
    },
    isBackgroundImage: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      aspectRatioStyle: {
        paddingTop: `calc(${this.aspectRatio} * 100%)`
      }
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.image-container
  position: relative
  z-index: 1
  width: 100%
  height: 0
  background: #fafafa

  &__image,
  &__background-image
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    transition: opacity 150ms ease-in

    &:not([lazy=loaded])
      opacity: 0

  &__image
    object-fit: cover

  &__background-image
    background-position: center
    background-repeat: no-repeat
    background-size: cover
</style>
