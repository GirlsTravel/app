<template lang="pug">
div(class='cart')
  h1 Shop Cart
  CheckoutFinancials(
    :subtotalPrice='checkoutFinancials.subtotalPrice'
    :totalPrice='checkoutFinancials.totalPrice'
    :totalShippingPrice='checkoutFinancials.totalShippingPrice'
    :totalTax='checkoutFinancials.totalTax'
  )
</template>

<script>
import { mapGetters } from 'vuex'
import CheckoutFinancials from '~/components/modules/CheckoutFinancials.vue'

export default {
  layout: 'custom',
  components: {
    CheckoutFinancials
  },
  // async fetch({ store }) {
  //   await store.dispatch('shop/fetchProducts')
  // },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      checkoutFinancials: 'shop/checkoutFinancials'
    })
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.cart
</style>
