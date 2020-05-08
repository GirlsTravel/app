<template lang="pug">
div(class='shop')
  SubscribeHero(
    title='Save 15% 🎉'
    text='Subscribe to our travel packed newsletter and automaticly recieve a 15% discount on your first order.'
  )
  section(class='shop__products')
    ContentHeader(
      title='Handpicked Travel Essentials'
      text='Our top rated, must haves for any travel adventure.'
    )
    ul(class='shop__products-list')
      li(
        v-for='(product, index) in products.filter((p, i) => i < 21)'
        :key='product + index'
      )
        ProductTile(
          :handle='product.handle'
          :imageSrc='product.imageSrc'
          :imageAltText='product.imageAltText'
          :price='product.price'
          :title='product.title'
        )
</template>

<script>
import { mapGetters } from 'vuex'
import SubscribeHero from '~/components/compositions/SubscribeHero.vue'
import ContentHeader from '~/components/modules/ContentHeader.vue'
import ProductTile from '~/components/modules/ProductTile.vue'

export default {
  layout: 'custom',
  components: {
    SubscribeHero,
    ContentHeader,
    ProductTile
  },
  async fetch({ store }) {
    await store.dispatch('shop/fetchProducts')
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      products: 'shop/products'
    })
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.shop
  display: grid
  grid-gap: $unit*4

  &__hero

  &__products
    width: 90%
    margin: 0 auto
    padding: $unit*5 0
    display: grid
    grid-gap: $unit*4

    &-list
      display: grid
      grid-gap: $unit*4
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))
</style>
