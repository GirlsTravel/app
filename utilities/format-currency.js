import { defaultLocale } from '~/utilities/constants'

/**
 * Formats currency into a specific locale currency
 * @param {string} amount Decimal money amount
 * @param {string} currencyCode Currency of the money
 * @param {string} locale Client's locale
 * @return {string} Formatted currency value (e.g. '$10.15')
 */
export const formatCurrency = ({
  amount,
  currencyCode,
  locale = defaultLocale
}) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode
  }).format(amount)
