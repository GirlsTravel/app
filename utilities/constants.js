/**
 * The Shopify Storefront API token
 * @see https://shopify.dev/docs/storefront-api/getting-started
 */
export const storefrontAccessToken = '27da3b9b6bbb013efbcb8734b9fb127e'

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
 * @see https://shopify.dev/docs/storefront-api/reference/object/order/orderfulfillmentstatus?api[version]=2020-07
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
 * @see https://shopify.dev/docs/storefront-api/reference/object/order/orderfinancialstatus?api[version]=2020-07
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
 * @see https://shopify.dev/docs/storefront-api/reference/object/order/ordercancelreason?api[version]=2020-07
 */
export const orderCancelReason = {
  CUSTOMER: 'The customer wanted to cancel the order',
  DECLINED: 'Payment was declined',
  FRAUD: 'The order was fraudulent',
  INVENTORY: 'There was insufficient inventory',
  OTHER: 'The order was canceled for an unlisted reason'
}
