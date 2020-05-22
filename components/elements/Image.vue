<template lang="pug">
div(
  :style='maxHeightStyle'
  class='image-container'
)
  div(
    :style='aspectRatioStyle'
    :class='{ isLoaded }'
    class='image-container__inner-wrapper'
  )
    img(
      v-if='!isBackgroundImage'
      v-lazy='src'
      @load='onLoad'
      :alt='alt'
      class='image-container__image'
    )
    div(
      v-else
      v-lazy:background-image='src'
      @load='onLoad'
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
    maxHeight: {
      type: Number,
      default: 0
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
      },
      isLoaded: false,
      maxHeightStyle: this.maxHeight
        ? {
            maxWidth: `calc(${this.maxHeight}px / ${this.aspectRatio})`
          }
        : {}
    }
  },
  computed: {},
  methods: {
    onLoad() {
      this.isLoaded = true
    }
  }
}
</script>

<style lang="sass" scoped>
.image-container
  width: 100%

  &__inner-wrapper
    position: relative
    z-index: 1
    width: 100%
    height: 0

    &:not(.isLoaded)
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
