import Vue from 'vue'

export default {
  SET_PRODUCTS(state, { product }) {
    Vue.set(state.products, product.id, product)
  }
}
