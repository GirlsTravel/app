import gql from 'graphql-tag'

/**
 * Find recommended products related to a given product.
 * @param {string} productId The id of the product.
 */
export const productRecommendations = gql`
  query($productId: ID!) {
    productRecommendations(productId: $productId) {
      handle
      images(first: 1) {
        edges {
          node {
            altText
            originalSrc
          }
        }
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      title
    }
  }
`
