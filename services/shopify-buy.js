import ShopifyBuy from 'shopify-buy'
import { shopDomain, storefrontAccessToken } from '~/utilities/constants'

/**
 * Initializing a client to return content in the store's primary language
 * @see https://github.com/Shopify/js-buy-sdk#readme
 */
export const shopifyClient = ShopifyBuy.buildClient({
  domain: shopDomain,
  storefrontAccessToken
})
