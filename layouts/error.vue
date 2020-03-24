<template lang="pug">
div(class='vue-error')
  div(class='vue-error__wrapper')
    h1(class='vue-error__title') {{ statusCode }} Error
    p(class='vue-error__body')
      | {{ message }}.&nbsp;
      nuxt-link(
        :to='{ name: "index" }'
        class='vue-error__body-link'
      ) Back to homepage
    IllustrationErrorWarning(class='vue-error__illustration')
</template>

<script>
import IllustrationErrorWarning from '~/assets/svg/error-warning.svg'

export default {
  name: 'NuxtError',
  components: {
    IllustrationErrorWarning
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || ''
    }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.vue-error
  @extend %flex--row-center
  background: $white

  &__wrapper
    height: min-content
    display: grid
    grid-gap: $unit*2
    justify-items: center
    padding: $unit*10 $unit*2

  &__illustration
    width: 100%
    max-height: $unit*40

  &__title
    font-size: $fs1
    font-weight: $fw-bold

  &__body
    text-align: center

    &-link
      color: $blue
      text-decoration: underline
      white-space: nowrap
</style>
