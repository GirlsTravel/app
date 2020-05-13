<template lang="pug">
client-only
  InfiniteLoader(
    @infinite='onInfinite'
    class='infinite-loader'
  )
    div(slot='spinner')
      Loader(class='infinite-loader__loader')
    div(slot='no-more')
    div(slot='no-results')
</template>

<script>
import InfiniteLoader from 'vue-infinite-loading'
import Loader from '~/components/elements/Loader.vue'

export default {
  components: {
    InfiniteLoader,
    Loader
  },
  methods: {
    onInfinite(infiniteLoader) {
      this.$emit('infinite', infiniteLoader)
    }
  }
}
</script>

<style lang="sass" scoped>
.infinite-loader
  @extend %flex--column-center
  height: $unit*5
  border-radius: $border-radius
  background: $pri-cl

  &__loader
    color: $blue
</style>
