<template lang="pug">
div(class='progress-bar')
  div(class='progress-bar__wrapper')
    div(
      class='progress-bar__child'
      v-show='isLoading'
    )
</template>

<script>
export default {
  components: {},
  props: {
    isLoading: {
      type: Boolean,
      default: false
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
.progress-bar
  width: 100%
  height: $unit/2
  overflow: hidden
  border-radius: $unit/2

  &__wrapper
    position: relative
    height: inherit

  &__child
    position: absolute
    width: 100%
    height: inherit
    background: linear-gradient(to right, rgba(0,0,0,0) 0%, #{$blue} 50%, rgba(0,0,0,0) 100%)
    animation: loading 1s linear infinite

@keyframes loading
  0%
    transform: translateX(-100%)
  100%
    transform: translateX(100%)
</style>
