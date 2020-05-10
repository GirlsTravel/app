<template lang="pug">
div(class='vue-app')
  AppNavigationBarTop(class='vue-app__navigation-bar')
  nuxt(class='vue-app__view')
  AppFooter(class='vue-app__footer')
  nav
</template>

<script>
import AppNavigationBarTop from '~/components/app/NavigationBarTop.vue'
import AppFooter from '~/components/app/Footer.vue'

export default {
  components: {
    AppNavigationBarTop,
    AppFooter
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.vue-app
  display: grid
  grid-template-rows: $navigation-bar minmax(calc(100vh - #{$navigation-bar}), auto)
  grid-gap: 0 $unit
  background: $pri-cl

  &__navigation-bar
    background: $white

  &__view
    background: $white

  &__footer
    background: $black

  & > nav
    position: sticky
    background: yellow
    height: $navigation-bar
    width: 100%
    bottom: 0
    +mq-m
      display: none
</style>
