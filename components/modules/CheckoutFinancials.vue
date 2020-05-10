<template lang="pug">
div(class='checkout-financials')
  p(
    v-for='(fin, index) in financials'
    :key='fin + index'
    v-show='fin.value'
    class='checkout-financials__item'
  )
    span(class='checkout-financials__text') {{ fin.label }}
    span(class='checkout-financials__text') {{ fin.value }}
</template>

<script>
export default {
  components: {},
  props: {
    subtotalPrice: {
      type: String,
      default: ''
    },
    totalPrice: {
      type: String,
      default: ''
    },
    totalShippingPrice: {
      type: String,
      default: ''
    },
    totalTax: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    financials() {
      return [
        { label: 'Subtotal', value: this.subtotalPrice },
        { label: 'Shipping', value: this.totalShippingPrice },
        { label: 'Tax', value: this.totalTax },
        { label: 'Total', value: this.totalPrice }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.checkout-financials

  &__item
    display: grid
    grid-auto-flow: column
    grid-auto-columns: 1fr auto
    grid-gap: $unit*2
    padding: $unit*2
    border-radius: $border-radius

    &:last-child
      // padding: $unit*2 $unit
      // margin: 0 $unit
      font-weight: $fw-bold
      background: $pri-cl

  &__text
    font-weight: inherit
</style>
