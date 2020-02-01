<template lang="pug">
div(class='vue-app')
  NavigationBar(class='vue-app__navigation-bar')
  NavigationMenu(class='vue-app__navigation-menu')
  AuthUserSidebar(class='vue-app__auth-user-sidebar')
  nuxt(class='vue-app__view')
  div(class='vue-app__ad-space')
    div(class='vue-app__ad')
</template>

<script>
import NavigationBar from '~/components/compositions/NavigationBar.vue'
import NavigationMenu from '~/components/compositions/NavigationMenu.vue'
import AuthUserSidebar from '~/components/compositions/AuthUserSidebar.vue'

export default {
  components: {
    NavigationBar,
    NavigationMenu,
    AuthUserSidebar
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
  grid-template-columns: 1fr minmax(auto, 1080px) 1fr
  grid-gap: 0 $unit
  background: $pri-cl

  &__navigation-bar
    grid-row: 1 / 2
    grid-column: 1 / -1
    background: $white

  &__navigation-menu
    position: fixed
    background: $white

  &__auth-user-sidebar
    display: none
    +mq-s
      display: grid
      grid-row: 2 / 3
      grid-column: 1 / 2
      align-self: start
      background: $white

  &__view
    background: $white
    grid-row: 2 / 3
    grid-column: 1 / -1
    +mq-s
      grid-column: 2 / -1
    +mq-l
      grid-column: 2 / 3

  &__ad-space
    display: none
    +mq-l
      display: grid
      grid-row: 2 / 3
      grid-column: 3 / 4
      background: $white
      position: sticky
      top: $navigation-bar
      right: 0
      height: calc(100vh - #{$navigation-bar})
      padding: $unit*4 $unit*2

  &__ad
    background: #5be6e1
    width: 100%
    height: 420px
</style>
