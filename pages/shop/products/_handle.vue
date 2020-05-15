<template lang="pug">
div(class='product')
  NotchBar(
    expandSelector='#product-page-header'
    contractSelector='#product-page-gallery'
    class='product__notch-bar'
  )
  ProductHeader(
    :compareAtPrice='variant ? variant.compareAtPrice : ""'
    :price='variant ? variant.price : ""'
    :title='product.title'
    class='product__header'
    id='product-page-header'
  )
  ProductBuyBox(
    :options='product.options'
    :variants='product.variants'
    :isCheckoutUpdateInProgress='isCheckoutUpdateInProgress'
    @addToCart='onAddToCart'
    @variantSelection='onVariantSelection'
    class='product__buy-box'
  )
  ProductGalleryGrid(
    :images='product.images'
    class='product__gallery'
    id='product-page-gallery'
  )
  ProductSections(
    :descriptionHtml='product.descriptionHtml'
    class='product__sections'
  )
  section(class='product__product-recommendations')
    ContentHeader(
      title='You Might Also Like'
      class='product__product-recommendations-title'
    )
    Carousel
      ProductTile(
        v-for='(product, index) in productRecommendations'
        :key='product + index'
        :handle='product.handle'
        :imageSrc='product.imageSrc'
        :imageAltText='product.imageAltText'
        :price='product.price'
        :title='product.title'
        :flagText='product.isOnSale ? "Sale" : ""'
        class='product__product-tile'
      )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Carousel from '~/components/slots/Carousel.vue'
import ContentHeader from '~/components/modules/ContentHeader.vue'
import NotchBar from '~/components/elements/NotchBar.vue'
import ProductBuyBox from '~/components/compositions/ProductBuyBox.vue'
import ProductHeader from '~/components/modules/ProductHeader.vue'
import ProductGalleryGrid from '~/components/modules/ProductGalleryGrid.vue'
import ProductSections from '~/components/modules/ProductSections.vue'
import ProductTile from '~/components/modules/ProductTile.vue'

export default {
  layout: 'custom',
  components: {
    ContentHeader,
    Carousel,
    NotchBar,
    ProductBuyBox,
    ProductHeader,
    ProductGalleryGrid,
    ProductSections,
    ProductTile
  },
  async fetch({ store, params }) {
    const { handle } = params
    await store.dispatch('shop/fetchProduct', handle)
  },
  data() {
    return {
      variant: {},
      isCheckoutUpdateInProgress: false
    }
  },
  computed: {
    ...mapGetters({
      product: 'shop/product',
      productRecommendations: 'shop/productRecommendations'
    })
  },
  mounted() {
    this.productRecommendationsFetch(this.product.id)
  },
  methods: {
    async onAddToCart(quantity) {
      try {
        this.isCheckoutUpdateInProgress = true
        await this.checkoutAddLineItems([
          {
            variantId: this.variant.id,
            quantity
          }
        ])
        this.$toasted.global.success({
          title: `Success`,
          message: `${quantity} item${quantity > 1 ? 's' : ''} added to cart.`
        })
      } catch (e) {
        console.error(e)
        this.$toasted.global.error({
          title: `Error`,
          message: `An error occurred. Try again.`
        })
      } finally {
        this.isCheckoutUpdateInProgress = false
      }
    },

    onVariantSelection(variant) {
      this.variant = variant
    },

    ...mapActions({
      checkoutAddLineItems: 'shop/checkoutAddLineItems',
      productRecommendationsFetch: 'shop/productRecommendationsFetch'
    })
  }
}
</script>

<style lang="sass" scoped>
.product
  display: grid
  grid-auto-rows: min-content
  +mq-m
    grid-template-columns: 2fr 1fr

  &__notch-bar
    border-radius: $unit*3
    box-shadow: 0px -#{$unit} $unit rgba(34, 34, 34, 0.1)
    +mq-m
      display: none

  &__header
    padding: 0 $unit
    +mq-m
      grid-row: 1 / 2
      grid-column: 2 / 3
      padding: $unit*5 $unit*5 0 0

  &__buy-box
    padding: $unit*3 $unit
    +mq-m
      grid-row: 2 / 3
      grid-column: 2 / 3
      padding: $unit*3 $unit*5 $unit*3 0

  &__sections
    +mq-m
      padding-right: $unit*5

  &__gallery
    grid-row: 1 / 2
    height: 75vh
    overflow-y: auto
    overscroll-behavior: contain
    +mq-m
      grid-row: 1 / 5
      grid-column: 1 / 2
      height: auto
      margin: $unit*5 $unit*5 0 $unit*5
      overflow: initial

  &__product-recommendations
    display: grid
    grid-column: 1 / -1
    margin: $unit*3 0
    +mq-m
      margin: $unit*10 0

    &-title
      margin: 0 $unit $unit*2 $unit
      +mq-m
        margin: 0 $unit*5 $unit*3 $unit*5

  &__product-tile
    width: 36vw
    scroll-snap-align: start
    margin-right: $unit
    +mq-m
      margin-right: $unit*2

    &:last-of-type
      margin-right: initial
</style>
