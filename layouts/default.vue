<template lang="pug">
div(class='vue-app')
  NavigationBar
  nuxt
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

<style lang="sass">
.vue-app
</style>
