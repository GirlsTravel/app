<template lang="pug">
form(
  @submit.prevent='$emit("addToCart", quantity)'
  class=''
)
  ProductBuyBoxOptions(
    :options='options'
    :selectedOptions='selectedOptions'
    @optionSelection='onOptionSelection'
  )
  QuantityStepper(
    :quantity='quantity'
    :min='1'
    @increaseQuantity='quantity++'
    @decreaseQuantity='quantity--'
  )
  Button(
    type='submit'
    text='Add to Cart'
  )
</template>

<script>
import Button from '~/components/elements/Button.vue'
import ProductBuyBoxOptions from '~/components/modules/ProductBuyBoxOptions.vue'
import QuantityStepper from '~/components/elements/QuantityStepper.vue'

export default {
  components: {
    Button,
    ProductBuyBoxOptions,
    QuantityStepper
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    variants: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedOptions: [],
      quantity: 1
    }
  },
  computed: {},
  created() {
    const variant = this.variants[0]
    this.updateSelectedOptions(variant)
  },
  methods: {
    /**
     * Handle new option selection. Set selectedOptions and emit matching variant.
     * @param {Object} selectedOptions A variant's options.
     * @param {string} selectedOptions.name The option name (e.g. 'Color', 'Size', etc).
     * @param {value} selectedOptions.value The option value (e.g. 'Blue', 'XS', etc).
     */
    onOptionSelection({ name, value }) {
      /** The requested option combination */
      const pendingSelectedOptions = this.selectedOptions.map(
        (selectedOption) =>
          selectedOption.name === name ? { name, value } : selectedOption
      )
      /** The variant with the matching pending option combination  */
      const variant = this.variants.find((variant) =>
        variant.selectedOptions.every(
          (selectedOption, i) =>
            selectedOption.name === pendingSelectedOptions[i].name &&
            selectedOption.value === pendingSelectedOptions[i].value
        )
      )
      this.updateSelectedOptions(variant)
    },

    /**
     * Set selected options and emit variant.
     * @param {object} variant A product variant.
     */
    updateSelectedOptions(variant) {
      if (variant) {
        this.selectedOptions = variant.selectedOptions
        this.$emit('variantSelection', variant)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.test
  background: white
</style>
