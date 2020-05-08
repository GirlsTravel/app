import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend
  // setInteractionMode
} from 'vee-validate'
import { email, required } from 'vee-validate/dist/rules'

/**
 * Strategy regarding when to validate
 * @see https://logaretm.github.io/vee-validate/guide/interaction-and-ux.html#interaction-modes
 */
// setInteractionMode('eager')

/**
 * Check if the string is an email
 */
extend('isEmail', email)

/**
 * Check if the string is present
 */
extend('required', required)

/**
 * Registers component globally
 */
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
