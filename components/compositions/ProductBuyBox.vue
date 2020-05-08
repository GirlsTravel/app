<template lang="pug">
form(
  @submit.prevent='onAddToCart'
  class=''
)
  h1 Buy Box
  ProductBuyBoxOptions(
    :options='options'
    :selectedOptions='selectedOptions'
    @optionSelection='onOptionSelection'
  )
  Button(
    text='Add to Cart'
  )
</template>

<script>
import ProductBuyBoxOptions from '~/components/modules/ProductBuyBoxOptions.vue'
import Button from '~/components/elements/Button.vue'

export default {
  components: {
    ProductBuyBoxOptions,
    Button
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
      selectedOptions: []
    }
  },
  computed: {},
  created() {
    this.selectedOptions = this.variants[0].selectedOptions
  },
  methods: {
    onAddToCart() {
      console.log('add to cart')
    },

    onOptionSelection({ name, value }) {
      console.log('name: ', name)
      console.log('value: ', value)
      const newSelectedOptions = this.selectedOptions.map((selectedOption) =>
        selectedOption.name === name ? { name, value } : selectedOption
      )
      console.log('newSelectedOptions: ', newSelectedOptions)
      this.selectedOptions = this.variants.find((variant) =>
        variant.selectedOptions.every(
          (selectedOption, i) =>
            selectedOption.name === newSelectedOptions[i].name &&
            selectedOption.value === newSelectedOptions[i].value
        )
      ).selectedOptions
    }
  }
}
</script>

<style lang="sass" scoped>
.test
  background: white
</style>
