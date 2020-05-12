import axios from 'axios'
import { print } from 'graphql'
import {
  storefrontAccessToken,
  storefrontApiVerision
} from '~/utilities/constants'
import { productRecommendations } from '~/graphql/query/product'

/**
 * Find recommended products related to a given product.
 * @param {string} query The request data query, either a Graphql query or mutation.
 * @param {object} variables Dynamic data values.
 * @see https://shopify.dev/concepts/graphql
 */
const handleRequest = async ({ query, variables = {} }) => {
  const config = {
    url: `https://feed-me-sugar.myshopify.com/api/${storefrontApiVerision}/graphql`,
    method: 'post',
    headers: {
      Accept: 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken
    },
    data: {
      query: print(query),
      variables
    }
  }
  const { data } = await axios(config)
  if (data.data) return data.data
  else throw data.errors
}

/**
 * Constructs a function to make requests.
 * @param {string} query The request data query, either a Graphql query or mutation.
 */
const buildRequest = (query) => (variables) =>
  handleRequest({ query, variables })

/**
 * Shopify Storefront GraphQL object with methods.
 */
export const storefront = {
  query: {
    productRecommendations: buildRequest(productRecommendations)
  }
}
