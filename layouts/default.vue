<template lang="pug">
div(class='vue-app')
  NavigationBar(class='vue-app__navigation-bar')
  NavigationMenu(class='vue-app__navigation-menu')
  AuthUserSidebar(class='vue-app__auth-user-sidebar')
  nuxt(class='vue-app__view')
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

<style lang="sass">
.vue-app
  display: grid
  grid-template-rows: repeat(2, auto)
  grid-template-columns: repeat(2, auto)
  grid-gap: 0 $unit/2
  background: $pri-cl

  &__navigation-bar
    grid-row: 1 / 2
    grid-column: 1 / -1
    background: $white

  &__navigation-menu
    position: fixed
    background: $white

  &__auth-user-sidebar
    grid-row: 2 / 3
    grid-column: 1 / 2
    align-self: start
    background: $white

  &__view
    grid-row: 2 / 3
    grid-column: 2 / 3
    background: $white
</style>
