<template lang="pug">
section(class='gallery')
  button(
    v-for='(image, index) in images'
    :key='image + index'
    v-lazy:background-image='image.src'
    class='gallery__button'
  )
</template>

<script>
export default {
  components: {},
  props: {
    images: {
      type: Array,
      default: () => []
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
.gallery
  display: grid
  grid-template-columns: repeat(2, 1fr)
  grid-gap: $unit*2

  &__button
    width: 100%
    height: 420px
    background: $pri-cl
    background-position: center
    background-repeat: no-repeat
    background-size: cover
</style>
