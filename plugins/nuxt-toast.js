/**
 * Nuxt Toast plugin configuration
 * @see https://github.com/nuxt-community/modules/tree/master/packages/toast for Nuxt Toast documentation
 */

/**
 * Default Toast options
 * @see https://github.com/shakee93/vue-toasted for Toast documentation
 */
const defaultOptions = {
  action: {
    text: '',
    icon: 'close',
    class: 'toasted__close',
    onClick: (e, toastObject) => toastObject.goAway(0)
  },
  duration: 5000,
  keepOnHover: true,
  singleton: true,
  theme: '',
  /** @see https://material.io/resources/icons/ for icon options */
  iconPack: 'material'
}

/**
 * Generic message handler
 * @param {Object} payload Toast message content
 * @param {string} payload.title Toast title content
 * @param {string} payload.message Toast body content
 */
const handleMessage = ({ title, message }) => `
  <div class='toasted__content'>
    <h4 class='toasted__title'>${title}</h4>
    <p class='toasted__message'>${message}</p>
  </div>
`

/**
 * Register custom toasts
 */
const register = [
  /** Success state */
  {
    name: 'success',
    message: handleMessage,
    options: {
      type: 'success',
      icon: 'check_circle_outline'
    }
  },
  /** Error state */
  {
    name: 'error',
    message: handleMessage,
    options: {
      type: 'error',
      icon: 'error_outline'
    }
  }
]

export default {
  defaultOptions,
  register
}
