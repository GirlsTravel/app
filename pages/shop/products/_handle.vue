<template lang="pug">
div(class='product')
  ProductDetails(
    :compareAtPrice='variant ? variant.compareAtPrice : ""'
    :price='variant ? variant.price : ""'
    :title='product.title'
    class='product__details'
  )
  ProductBuyBox(
    :options='product.options'
    :variants='product.variants'
    @addToCart='onAddToCart'
    @variantSelection='onVariantSelection'
    class='product__buy-box'
  )
  ProductGalleryGrid(
    :images='product.images'
    class='product__gallery'
  )
  ProductSections(
    :descriptionHtml='product.descriptionHtml'
    class='product__sections'
  )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductBuyBox from '~/components/compositions/ProductBuyBox.vue'
import ProductDetails from '~/components/modules/ProductDetails.vue'
import ProductGalleryGrid from '~/components/modules/ProductGalleryGrid.vue'
import ProductSections from '~/components/modules/ProductSections.vue'

export default {
  layout: 'custom',
  components: {
    ProductBuyBox,
    ProductDetails,
    ProductGalleryGrid,
    ProductSections
  },
  async fetch({ store, params }) {
    const { handle } = params
    await store.dispatch('shop/fetchProduct', handle)
  },
  data() {
    return {
      variant: {}
    }
  },
  computed: {
    ...mapGetters({
      product: 'shop/product'
    })
  },
  methods: {
    async onAddToCart(quantity) {
      await this.checkoutAddLineItems([
        {
          variantId: this.variant.id,
          quantity
        }
      ])
    },

    onVariantSelection(variant) {
      this.variant = variant
    },

    ...mapActions({
      checkoutAddLineItems: 'shop/checkoutAddLineItems'
    })
  }
}
</script>

<style lang="sass" scoped>
.product
  display: grid
  grid-gap: $unit*4
  +mq-m
    grid-template-columns: 2fr 1fr

  &__details
    +mq-m
      grid-row: 1 / 2
      grid-column: 2 / 3

  &__buy-box
    +mq-m
      grid-row: 2 / 3
      grid-column: 2 / 3

  &__gallery
    grid-row: 1 / 2
    height: 75vh
    overflow-y: auto
    +mq-m
      grid-row: 1 / 5
      grid-column: 1 / 2
      height: auto
      overflow: initial
</style>
