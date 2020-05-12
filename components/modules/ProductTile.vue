<template lang="pug">
nuxt-link(
  :to='{ name: "shop-products-handle", params: { handle }}'
  class='product-tile'
)
  img(
    v-lazy='imageSrc'
    :alt='imageAltText'
    class='product-tile__image'
  )
  h1(class='product-tile__title') {{ title }}
  p(class='product-tile__price') {{ price }}
</template>

<script>
export default {
  components: {},
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
  background: white

  &__image
    width: 100%
    background: $pri-cl
</style>
