<template lang="pug">
header(class='product-header')
  h1(class='product-header__title') {{ title }}
  p(class='product-header__price') {{ price }}
  p(
    v-show='compareAtPrice'
    class='product-header__compare-at-price'
  ) {{ compareAtPrice }}
</template>

<script>
export default {
  components: {},
  props: {
    compareAtPrice: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    price: {
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
.product-header
  display: grid
  grid-template-columns: min-content auto
  grid-gap: $unit/2 $unit*2

  &__title
    grid-column: 1 / -1

  &__price
    font-size: $fs1

  &__compare-at-price
    align-self: center
    text-decoration: line-through
    color: $grey
</style>
