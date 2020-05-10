<template lang="pug">
div(class='cart')

  aside(class='cart__banner')
    div(class='cart__banner-cell')
      h2(class='cart__banner-title') {{ promotion.title }}
      p {{ promotion.text }}
    div(class='cart__banner-cell')
      Button(
        v-if='checkout.lineItems.length'
        text='Checkout'
        :disabled='isCheckoutUpdateInProgress'
        @click.native='onCheckout'
        class='cart__checkout-button'
      )
      nuxt-link(
        v-else
        :to='{ name: "shop" }'
        class='cart__continue-shopping'
      ) Continue Shopping

  section(class='cart__section')
    h2(class='cart__title') {{ promotion.title }}
    p {{ promotion.text }}

  section(class='cart__section')
    h2(class='cart__title') Cart
    CheckoutLineItem(
      v-for='(lineItem, index) in checkout.lineItems'
      v-show='checkout.lineItems.length'
      :key='lineItem + index'
      :id='lineItem.id'
      :imageSrc='lineItem.imageSrc'
      :imageAltText='lineItem.imageAltText'
      :productTitle='lineItem.productTitle'
      :variantTitle='lineItem.variantTitle'
      :price='lineItem.price'
      :quantity='lineItem.quantity'
      :isUpdateInProgress='lineItemsUpdateInProgress[lineItem.id]'
      @update:lineItem='onUpdateLineItems'
      class='cart__line-item'
    )
    div(
      v-if='!checkout.lineItems.length'
      class='cart__empty-cart'
    )
      h3(class='cart__empty-cart-title') 🤷‍♀️
      p There are no items in your cart.

  section(class='cart__section')
    h2(class='cart__title') Summary
    CheckoutFinancials(
      :subtotalPrice='checkout.subtotalPrice'
      :totalPrice='checkout.totalPrice'
      :totalShippingPrice='checkout.totalShippingPrice'
      :totalTax='checkout.totalTax'
    )
</template>

<script>
import Vue from 'vue'
import { isEmpty, debounce } from 'lodash'
import { mapGetters, mapActions } from 'vuex'
import CheckoutFinancials from '~/components/modules/CheckoutFinancials.vue'
import CheckoutLineItem from '~/components/modules/CheckoutLineItem.vue'
import Button from '~/components/elements/Button.vue'

export default {
  layout: 'custom',
  components: {
    CheckoutFinancials,
    CheckoutLineItem,
    Button
  },
  // async fetch({ store }) {
  //   await store.dispatch('shop/fetchProducts')
  // },
  data() {
    return {
      lineItemsUpdateInProgress: {},
      promotion: {
        title: 'Free Shipping for Members.',
        text: 'Become a member for fast and free shipping.'
      }
    }
  },
  computed: {
    isCheckoutUpdateInProgress() {
      return !isEmpty(this.lineItemsUpdateInProgress)
    },

    ...mapGetters({
      checkout: 'shop/checkout'
    })
  },
  methods: {
    onUpdateLineItems: debounce(async function (lineItem) {
      try {
        Vue.set(this.lineItemsUpdateInProgress, lineItem.id, true)
        await this.checkoutUpdateLineItems(lineItem)
      } catch (e) {
        console.error(e)
      } finally {
        Vue.delete(this.lineItemsUpdateInProgress, lineItem.id)
      }
    }, 1000),

    onCheckout() {
      window.open(this.checkout.webUrl)
    },

    ...mapActions({
      checkoutUpdateLineItems: 'shop/checkoutUpdateLineItems'
    })
  }
}
</script>

<style lang="sass" scoped>
.cart
  position: relative
  display: grid
  grid-auto-rows: min-content
  grid-gap: $unit*5
  // padding: $unit*5 $unit*2
  +mq-m
    grid-template-columns: repeat(2, 1fr)

  &__section
    display: grid
    grid-auto-rows: min-content
    grid-gap: $unit*2

    &:nth-child(2)
      grid-column: 1 / -1
      justify-self: center
      padding: $unit*3 $unit*5
      border-radius: $border-radius
      background: $pri-cl
      +mq-m
        display: none

  &__title
    font-size: $fs1
    font-weight: $fw-bold

  &__line-item
    padding: $unit*2

  &__empty-cart
    @extend %flex--column-center
    padding: $unit*4
    // background: $pri-cl
    border-radius: $border-radius

    &-title
      font-size: $fs3

  &__banner
    position: sticky
    z-index: 99
    left: 0
    top: $navigation-bar
    display: grid
    grid-auto-flow: column
    grid-column: 1 / -1
    padding: $unit $unit*2
    background: $white
    box-shadow: 0px $unit/2 $unit rgba(34, 34, 34, 0.1)

    &-cell
      display: grid
      grid-auto-rows: min-content

      &:first-child
        display: none
        +mq-m
          display: grid

    &-title
      font-weight: $fw-bold

  &__continue-shopping
    @extend %flex--row-center
    min-width: $unit*15
    min-height: $unit*6
    padding: $unit $unit*2
    border-radius: $border-radius
    cursor: pointer
    color: $white
    background: $blue
</style>
