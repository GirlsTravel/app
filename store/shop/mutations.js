import Vue from 'vue'

export default {
  SET_CHECKOUT(state, { checkout }) {
    Vue.set(state, 'checkout', checkout)
  },

  SET_PRODUCT(state, { product }) {
    Vue.set(state, 'product', product)
  },

  SET_PRODUCTS(state, { product }) {
    Vue.set(state.products, product.id, product)
  },

  SET_PRODUCT_RECOMMENDATIONS(state, { productId, productRecommendations }) {
    Vue.set(state.productRecommendations, productId, productRecommendations)
  }
}
