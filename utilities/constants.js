/**
 * The Shopify shop domain
 */
export const shopDomain = 'girls-travel.myshopify.com'

/**
 * The Shopify Storefront API token
 * @see https://shopify.dev/docs/storefront-api/getting-started
 * Old key: '27da3b9b6bbb013efbcb8734b9fb127e'
 */
export const storefrontAccessToken = '64f6efd326ef5369775d0f398153eab9'

/**
 * The Shopify Storefront API version
 * @see https://shopify.dev/concepts/about-apis/versioning
 */
export const storefrontApiVerision = '2020-07'

/**
 * The default client's locale (e.g. 'en', 'es', etc)
 */
export const defaultLocale = 'en'

/**
 * Order fulfillment status UI friendly equivalent values
 * @see https://shopify.dev/docs/storefront-api/reference/object/order/orderfulfillmentstatus
 */
export const orderFulfillmentStatusMap = {
  FULFILLED: 'Fulfilled',
  IN_PROGRESS: 'In progress',
  OPEN: 'Open',
  PARTIALLY_FULFILLED: 'Partially fulfilled',
  PENDING_FULFILLMENT: 'Pending fulfillment',
  RESTOCKED: 'Restocked',
  UNFULFILLED: 'Unfulfilled'
}

/**
 * Order financial status UI friendly equivalent values
 * @see https://shopify.dev/docs/storefront-api/reference/object/order/orderfinancialstatus
 */
export const orderFinancialStatusMap = {
  AUTHORIZED: 'Authorized',
  PAID: 'Paid',
  PARTIALLY_PAID: 'Partially paid',
  PARTIALLY_REFUNDED: 'Partially refunded',
  PENDING: 'Pending',
  REFUNDED: 'Refunded',
  VOIDED: 'Voided'
}

/**
 * Order cancel reason UI friendly equivalent values
 * @see https://shopify.dev/docs/storefront-api/reference/object/order/ordercancelreason
 */
export const orderCancelReason = {
  CUSTOMER: 'The customer wanted to cancel the order',
  DECLINED: 'Payment was declined',
  FRAUD: 'The order was fraudulent',
  INVENTORY: 'There was insufficient inventory',
  OTHER: 'The order was canceled for an unlisted reason'
}

/**
 * A mapping for product tags.
 */
export const productTags = {
  isOnSale: 'sale'
}
