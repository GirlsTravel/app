import { formatCurrency } from '~/utilities/format-currency'

export default {
  product(state, getters, rootState) {
    const { handle } = rootState.route.params
    const { products } = state
    const product = Object.values(products).find(
      (product) => product.handle === handle
    )
    return {
      ...product,
      options: product.options.map((option) => ({
        name: option.name,
        values: option.values.map((value) => value.value)
      })),
      variants: product.variants.map((variant) => ({
        selectedOptions: variant.selectedOptions.map((selectedOption) => ({
          name: selectedOption.name,
          value: selectedOption.value
        }))
      }))
    }
  },

  products(state, getters, rootState) {
    const { products } = state
    return Object.values(products).map((product) => ({
      handle: product.handle,
      imageSrc: product.images[0].src,
      imageAltText: product.images[0].altText || '',
      price: formatCurrency({
        amount: product.variants[0].priceV2.amount,
        currencyCode: product.variants[0].priceV2.currencyCode
      }),
      title: product.title
    }))
  }
}
