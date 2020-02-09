<template lang="pug">
div(class='vue-app')
  NavigationBar(class='vue-app__navigation-bar')
  NavigationMenu(class='vue-app__navigation-menu')
  header(class='vue-app__hero')
    figure
    span Experience More
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
  grid-template-columns: 1fr 2fr
  grid-gap: 0 $unit
  background: $pri-cl
  +mq-l
    grid-template-columns: 1fr minmax(auto, 960px) 1fr

  &__navigation-bar
    grid-row: 1 / 2
    grid-column: 1 / -1
    background: $white

  &__navigation-menu
    position: fixed
    background: $white

  &__hero
    grid-row: 2 / 3
    grid-column: 1 / -1
    display: grid
    grid-template-rows: 1fr
    grid-template-columns: 1fr
    justify-items: center
    align-items: center
    padding: $unit*3 $unit*2
    background: $white
    margin-bottom: $unit
    display: none

    & figure
      grid-row: 1 / 2
      grid-column: 1 / 2
      width: 100%
      height: 560px
      background-image: url('https://images.unsplash.com/photo-1484446991649-77f7fbd73f1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')
      background-position: bottom
      background-repeat: no-repeat
      background-size: cover
      // border-radius: $unit*2

    & span
      grid-row: 1 / 2
      grid-column: 1 / 2
      font-weight: $fw-bold
      font-size: $fs3
      color: $white

  &__auth-user-sidebar
    display: none
    +mq-s
      display: grid
      grid-row: 2 / 3
      grid-column: 1 / 2
      align-self: start
      background: $white

  &__view
    // background: $white
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
