import ShopifyBuy from 'shopify-buy'
import { storefrontAccessToken } from '~/utilities/constants'

/**
 * Initializing a client to return content in the store's primary language
 * @see https://github.com/Shopify/js-buy-sdk#readme
 */
export const shopifyClient = ShopifyBuy.buildClient({
  domain: 'feed-me-sugar.myshopify.com',
  storefrontAccessToken
})
