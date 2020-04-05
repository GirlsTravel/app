<template lang="pug">
div(class='vue-app')
  NavigationBar(class='vue-app__navigation-bar')
  nuxt(class='vue-app__view')
</template>

<script>
import NavigationBar from '~/components/compositions/NavigationBar.vue'

export default {
  components: {
    NavigationBar
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
  grid-gap: 0 $unit
  background: $pri-cl

  &__navigation-bar
    background: $white

  &__view
    background: $white
</style>
