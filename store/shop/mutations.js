import Vue from 'vue'

export default {
  SET_PRODUCTS(state, { product }) {
    Vue.set(state.products, product.id, product)
  },

  SET_CHECKOUT(state, { checkout }) {
    Vue.set(state, 'checkout', checkout)
  }
}
