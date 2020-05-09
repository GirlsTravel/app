<template lang="pug">
header
  h1 {{ title }}
  p
    span(
    ) {{ price }}
    span(
      v-if='compareAtPrice'
    ) {{ compareAtPrice }}
</template>

<script>
export default {
  components: {},
  props: {
    compareAtPrice: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.test
  background: white
</style>
