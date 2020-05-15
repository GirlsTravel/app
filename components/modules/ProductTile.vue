<template lang="pug">
nuxt-link(
  :to='{ name: "shop-products-handle", params: { handle }}'
  class='product-tile'
)
  ImageElement(
    :src='imageSrc'
    :alt='imageAltText'
    class='product-tile__image'
  )
  h1(class='product-tile__title') {{ title }}
  p(class='product-tile__price') {{ price }}
  p(
    v-if='flagText'
    class='product-tile__flag'
  ) {{ flagText }}
</template>

<script>
import ImageElement from '~/components/elements/Image.vue'

export default {
  components: {
    ImageElement
  },
  props: {
    handle: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAltText: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    flagText: {
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
.product-tile
  position: relative
  display: grid
  grid-gap: $unit
  background: white

  &__image

  &__price
    font-weight: $fw-bold

  &__flag
    position: absolute
    top: $unit*2
    right: 0
    padding: $unit/2 $unit
    background: $error
    border-top-left-radius: $border-radius
    border-bottom-left-radius: $border-radius
    color: $white
</style>
