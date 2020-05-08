<template lang="pug">
div(class='product')
  ProductBuyBox(
    :options='product.options'
    :variants='product.variants'
  )
</template>

<script>
import { mapGetters } from 'vuex'
import ProductBuyBox from '~/components/compositions/ProductBuyBox.vue'

export default {
  layout: 'custom',
  components: {
    ProductBuyBox
  },
  async fetch({ store, params }) {
    const { handle } = params
    await store.dispatch('shop/fetchProduct', handle)
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      product: 'shop/product'
    })
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.product
</style>
