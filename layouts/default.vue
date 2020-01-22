<template lang="pug">
div(class='vue-app')
  NavigationBar
  NavigationMenu
  nuxt
</template>

<script>
import NavigationBar from '~/components/compositions/NavigationBar.vue'
import NavigationMenu from '~/components/compositions/NavigationMenu.vue'

export default {
  components: {
    NavigationBar,
    NavigationMenu
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
</style>
