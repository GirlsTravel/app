<template lang="pug">
div(class='')
  h1 Error
  pre {{ error }}
</template>

<script>
export default {
  name: 'NuxtError',
  components: {},
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
      return this.error?.statusCode || 500
    },
    message() {
      return this.error.message || ''
    }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.test
  background: white
</style>
