<template lang="pug">
div(class='icon')
  slot
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.icon
  width: $unit*2
  height: $unit*2
  fill: $dark
</style>
