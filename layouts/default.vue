<template lang="pug">
div(class='vue-app')
  AppNavigationBarTop(class='vue-app__navigation-bar-top')
  //- NavigationMenu(class='vue-app__navigation-menu')
  AuthUserSidebar(class='vue-app__auth-user-sidebar')
  nuxt(class='vue-app__view')
  DisplaySidebar(class='vue-app__display-sidebar')
  AppNavigationBarBottom(class='vue-app__navigation-bar-bottom')
</template>

<script>
import AppNavigationBarBottom from '~/components/app/NavigationBarBottom.vue'
import AppNavigationBarTop from '~/components/app/NavigationBarTop.vue'
// import NavigationMenu from '~/components/compositions/NavigationMenu.vue'
import AuthUserSidebar from '~/components/compositions/AuthUserSidebar.vue'
import DisplaySidebar from '~/components/compositions/DisplaySidebar.vue'

export default {
  components: {
    AppNavigationBarBottom,
    AppNavigationBarTop,
    // NavigationMenu,
    AuthUserSidebar,
    DisplaySidebar
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
  grid-template-rows: repeat(2, auto)
  grid-template-columns: 2fr 1fr
  grid-gap: 0 $unit
  background: $pri-cl
  +mq-l
    grid-template-columns: minmax(auto, 960px) 1fr

  &__navigation-bar-top
    grid-row: 1 / 2
    grid-column: 1 / -1
    background: $white

  &__navigation-menu
    position: fixed
    background: $white

  &__auth-user-sidebar
    display: none
    +mq-s
      // display: grid
      grid-row: 2 / 3
      grid-column: 1 / 2
      align-self: start
      background: $white

  &__view
    // background: $white
    grid-row: 2 / 3
    grid-column: 1 / -1
    +mq-s
      grid-column: 1 / 2
    // +mq-l
    //   grid-column: 2 / 3

  &__display-sidebar
    // display: none
    grid-row: 3 / 4
    grid-column: 1 / -1
    background: $white
    +mq-s
      grid-row: 2 / 3
      grid-column: 2 / -1
    +mq-l
      grid-row: 2 / 3
      // grid-column: 3 / 4

  &__navigation-bar-bottom
    grid-column: 1 / -1
    background: $white
    +mq-m
      display: none
</style>
