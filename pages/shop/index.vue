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
          :images='product.images'
          :imageSrc='product.imageSrc'
          :imageAltText='product.imageAltText'
          :price='product.price'
          :title='product.title'
          :flagText='product.isOnSale ? "Sale" : ""'
        )
    InfiniteLoader(
      v-show='productsQueryCursor'
      @infinite='loadMoreProducts'
    )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SubscribeHero from '~/components/compositions/SubscribeHero.vue'
import ContentHeader from '~/components/modules/ContentHeader.vue'
import ProductTile from '~/components/modules/ProductTile.vue'
import InfiniteLoader from '~/components/elements/InfiniteLoader.vue'

export default {
  layout: 'custom',
  components: {
    SubscribeHero,
    ContentHeader,
    ProductTile,
    InfiniteLoader
  },
  async asyncData({ store }) {
    const productsQueryCursor = await store.dispatch('shop/fetchProducts', {
      first: 4
    })
    return { productsQueryCursor }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      products: 'shop/products'
    })
  },
  methods: {
    async loadMoreProducts(infiniteLoader) {
      this.productsQueryCursor = await this.fetchProducts({
        after: this.productsQueryCursor,
        first: 4
      })
      if (!this.productsQueryCursor) infiniteLoader.complete()
      else infiniteLoader.loaded()
    },

    ...mapActions({
      fetchProducts: 'shop/fetchProducts'
    })
  }
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
      grid-gap: $unit*4 $unit*2
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))
</style>
