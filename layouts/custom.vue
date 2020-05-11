<template lang="pug">
div(class='vue-app')
  AppNavigationBarTop(class='vue-app__navigation-bar-top')
  nuxt(class='vue-app__view')
  AppFooter(class='vue-app__footer')
  AppNavigationBarBottom(class='vue-app__navigation-bar-bottom')
</template>

<script>
import AppNavigationBarBottom from '~/components/app/NavigationBarBottom.vue'
import AppNavigationBarTop from '~/components/app/NavigationBarTop.vue'
import AppFooter from '~/components/app/Footer.vue'

export default {
  components: {
    AppNavigationBarBottom,
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

  &__navigation-bar-top
    background: $white

  &__view
    background: $white

  &__footer
    background: $black

  &__navigation-bar-bottom
    background: $white
    +mq-m
      display: none
</style>
