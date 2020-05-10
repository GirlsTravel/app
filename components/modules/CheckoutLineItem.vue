<template lang="pug">
div(class='line-item')
  ProgressBar(
    :isLoading='isUpdateInProgress'
    class='line-item__progress-bar'
  )
  img(
    v-lazy='imageSrc'
    :alt='imageAltText'
    class='line-item__image'
  )
  p(class='line-item__product-title') {{ productTitle }}
  p(class='line-item__variant-title') {{ variantTitle }}
  QuantityStepper(
    :quantity='pendingQuantity'
    :disableButtons='isUpdateInProgress'
    @increaseQuantity='pendingQuantity++'
    @decreaseQuantity='pendingQuantity--'
    class='line-item__quantity'
  )
  p(class='line-item__price') {{ price }}
</template>

<script>
import ProgressBar from '~/components/elements/ProgressBar.vue'
import QuantityStepper from '~/components/elements/QuantityStepper.vue'

export default {
  components: {
    ProgressBar,
    QuantityStepper
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    imageSrc: {
      type: String,
      default: ''
    },
    imageAltText: {
      type: String,
      default: ''
    },
    productTitle: {
      type: String,
      default: ''
    },
    variantTitle: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    quantity: {
      type: Number,
      default: 1
    },
    isUpdateInProgress: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pendingQuantity: 1
    }
  },
  computed: {},
  watch: {
    quantity(quantity) {
      this.pendingQuantity = quantity
    },

    pendingQuantity(pendingQuantity) {
      if (pendingQuantity === this.quantity) return
      this.$emit('update:lineItem', {
        id: this.id,
        quantity: pendingQuantity
      })
    }
  },
  created() {
    this.pendingQuantity = this.quantity
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.line-item
  display: grid
  grid-template-rows: repeat(2, auto) 1fr
  grid-template-columns: min-content 1fr auto
  grid-gap: $unit/2 $unit*2
  position: relative

  &__progress-bar
    position: absolute
    border-radius: initial

  &__image
    grid-row: 1 / -1
    grid-column: 1 / 2
    width: $unit*20
    height: $unit*20
    object-fit: cover
    object-position: center

  &__product-title
    grid-row: 1 / 2
    grid-column: 2 / 3

  &__variant-title
    grid-row: 2 / 3
    grid-column: 2 / 3
    color: $grey

  &__price
    justify-self: end
    font-weight: $fw-bold

  &__quantity
    grid-row: 3 / 4
    grid-column: 2 / 3
    align-self: end
    margin-top: $unit
</style>
