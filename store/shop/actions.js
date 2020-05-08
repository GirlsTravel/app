import { shopifyClient } from '~/services/shopify-buy'

export default {
  async fetchProduct({ commit }, handle) {
    try {
      const product = await shopifyClient.product.fetchByHandle(handle)
      commit('SET_PRODUCTS', { product })
    } catch (e) {
      console.error(e)
    }
  },

  async fetchProducts({ commit }) {
    try {
      const products = await shopifyClient.product.fetchAll()
      products.forEach((product) => commit('SET_PRODUCTS', { product }))
    } catch (e) {
      console.error(e)
    }
  }
}
