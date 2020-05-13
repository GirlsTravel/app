import { shopifyClient } from '~/services/shopify-buy'
import { storefront } from '~/services/shopify-storefront'

export default {
  async fetchProduct({ commit }, handle) {
    try {
      const product = await shopifyClient.product.fetchByHandle(handle)
      commit('SET_PRODUCT', { product })
      return product
    } catch (e) {
      console.error(e)
    }
  },

  async fetchProducts({ commit }, { after = null, first = 5 }) {
    try {
      const { products } = await storefront.query.products({ after, first })
      products.edges.forEach((product) =>
        commit('SET_PRODUCTS', { product: product.node })
      )
      /** The cursor of the last product */
      const cursor = products.edges[products.edges.length - 1].cursor
      console.log('hasNextPage: ', products.pageInfo.hasNextPage)
      return products.pageInfo.hasNextPage ? cursor : ''
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

  async productRecommendationsFetch({ commit }, productId) {
    try {
      const {
        productRecommendations
      } = await storefront.query.productRecommendations({ productId })
      commit('SET_PRODUCT_RECOMMENDATIONS', {
        productId,
        productRecommendations
      })
    } catch (e) {
      console.error('productRecommendationsFetch error: ', e)
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
