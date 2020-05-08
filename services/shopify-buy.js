import ShopifyBuy from 'shopify-buy'

/**
 * Initializing a client to return content in the store's primary language
 * @see https://github.com/Shopify/js-buy-sdk#readme
 */
export const shopifyClient = ShopifyBuy.buildClient({
  domain: 'feed-me-sugar.myshopify.com',
  storefrontAccessToken: '27da3b9b6bbb013efbcb8734b9fb127e'
})
