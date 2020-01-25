<template lang="pug">
nuxt-link(
  :to='to'
  class=''
) {{ text }}
</template>

<script>
export default {
  components: {},
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: Object,
      required: true
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
