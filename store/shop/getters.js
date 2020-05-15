import { isEmpty } from 'lodash'
import { formatCurrency } from '~/utilities/format-currency'
import { productTags } from '~/utilities/constants'

const defaultProductData = {
  id: '',
  price: '',
  selectedOptions: [],
  options: [],
  variants: []
}

/**
 * Format product data for product tile context
 */
const formatProductTileData = (product) => ({
  handle: product.handle,
  imageSrc: product.images.edges[0].node.originalSrc || '',
  imageAltText: product.images.edges[0].node.altText || '',
  isOnSale: product.tags.includes(productTags.isOnSale),
  price:
    product.priceRange.minVariantPrice.amount ===
    product.priceRange.maxVariantPrice.amount
      ? formatCurrency({
          amount: product.priceRange.minVariantPrice.amount,
          currencyCode: product.priceRange.minVariantPrice.currencyCode
        })
      : `${formatCurrency({
          amount: product.priceRange.minVariantPrice.amount,
          currencyCode: product.priceRange.minVariantPrice.currencyCode
        })}+`,
  title: product.title
})

export default {
  checkout(state) {
    const { checkout } = state
    const defaultCheckout = {
      id: '',
      lineItems: [],
      subtotalPrice: '',
      totalPrice: '',
      totalTax: '',
      webUrl: ''
    }
    if (isEmpty(checkout)) return defaultCheckout
    const subtotalPrice = formatCurrency({
      amount: checkout.subtotalPriceV2.amount,
      currencyCode: checkout.subtotalPriceV2.currencyCode
    })
    const totalPrice = formatCurrency({
      amount: checkout.totalPriceV2.amount,
      currencyCode: checkout.totalPriceV2.currencyCode
    })
    const totalTax = formatCurrency({
      amount: checkout.totalTaxV2.amount,
      currencyCode: checkout.totalTaxV2.currencyCode
    })
    const lineItems = checkout.lineItems.map((lineItem) => ({
      id: lineItem.id,
      quantity: lineItem.quantity,
      productTitle: lineItem.title,
      variantTitle: lineItem.variant.title,
      price: formatCurrency({
        amount: lineItem.variant.priceV2.amount,
        currencyCode: lineItem.variant.priceV2.currencyCode
      }),
      imageSrc: lineItem.variant.image.src,
      imageAltText: lineItem.variant.image.altText
    }))
    return {
      lineItems: lineItems || [],
      subtotalPrice: subtotalPrice || '',
      totalPrice: totalPrice || '',
      totalTax: totalTax || '',
      webUrl: checkout.webUrl || ''
    }
  },

  product(state, getters, rootState) {
    const { handle } = rootState.route.params
    const { product } = state
    if (product?.handle !== handle) return defaultProductData
    return {
      ...product,
      options: product.options.map((option) => ({
        name: option.name,
        values: option.values.map((value) => value.value)
      })),
      variants: product.variants.map((variant) => ({
        available: variant.available,
        compareAtPrice:
          variant.compareAtPriceV2 &&
          formatCurrency({
            amount: variant.compareAtPriceV2.amount,
            currencyCode: variant.compareAtPriceV2.currencyCode
          }),
        id: variant.id,
        price: formatCurrency({
          amount: variant.priceV2.amount,
          currencyCode: variant.priceV2.currencyCode
        }),
        selectedOptions: variant.selectedOptions.map((selectedOption) => ({
          name: selectedOption.name,
          value: selectedOption.value
        }))
      }))
    }
  },

  products(state, getters, rootState) {
    const { products } = state
    if (isEmpty(products)) return []
    return Object.values(products).map((product) =>
      formatProductTileData(product)
    )
  },

  productRecommendations(state, getters, rootState) {
    const { productRecommendations, product } = state
    if (isEmpty(productRecommendations[product.id])) return []
    return productRecommendations[product.id].map((product) =>
      formatProductTileData(product)
    )
  }
}
