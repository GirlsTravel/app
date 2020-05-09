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
  },

  async checkoutInit({ commit, dispatch }) {
    try {
      const checkoutId = localStorage.getItem('checkoutId')
      const checkout = checkoutId
        ? await dispatch('checkoutFetch', { checkoutId })
        : await dispatch('checkoutCreate')

      commit('SET_CHECKOUT', { checkout })
      localStorage.setItem('checkoutId', checkout.id)
    } catch (e) {
      console.error(e)
    }
  },

  async checkoutCreate() {
    try {
      const checkout = await shopifyClient.checkout.create()
      // console.log('createCheckout: ', checkout)
      return checkout
    } catch (e) {
      console.error(e)
    }
  },

  async checkoutFetch(_, { checkoutId }) {
    try {
      const checkout = await shopifyClient.checkout.fetch(checkoutId)
      // console.log('fetchCheckout: ', checkout)
      return checkout
    } catch (e) {
      console.error(e)
    }
  },

  async checkoutAddLineItems({ state, commit }, lineItems) {
    try {
      const checkoutId = state.checkout.id
      console.log('checkoutId: ', checkoutId)
      console.log('lineItems: ', lineItems)
      const checkout = await shopifyClient.checkout.addLineItems(
        checkoutId,
        lineItems
      )
      commit('SET_CHECKOUT', { checkout })
      return checkout
    } catch (e) {
      console.error(e)
      throw e
    }
  },

  async checkoutRemoveLineItems({ state, commit }, lineItems) {
    try {
      const checkoutId = state.checkout.id
      const checkout = await shopifyClient.checkout.removeLineItems(
        checkoutId,
        lineItems
      )
      // console.log('removeLineItems: ', checkout)
      commit('SET_CHECKOUT', { checkout })
    } catch (e) {
      console.error(e)
    }
  },

  async checkoutUpdateLineItems({ state, commit }, lineItems) {
    try {
      console.log('called it')
      const checkoutId = state.checkout.id
      const checkout = await shopifyClient.checkout.updateLineItems(
        checkoutId,
        lineItems
      )
      // console.log('updateLineItems: ', checkout)
      commit('SET_CHECKOUT', { checkout })
    } catch (e) {
      console.error(e)
    }
  },

  async checkoutAddDiscount({ state, commit }, discountCode) {
    try {
      const checkoutId = state.checkout.id
      const checkout = await shopifyClient.checkout.addDiscount(
        checkoutId,
        discountCode
      )
      commit('SET_CHECKOUT', { checkout })
    } catch (e) {
      console.error(e)
      throw e
    }
  }
}
