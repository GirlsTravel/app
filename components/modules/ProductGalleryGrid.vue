<template lang="pug">
section(class='gallery')
  button(
    v-for='(image, index) in images'
    :key='image + index'
  )
    ImageElement(
      :src='image.src'
      :isBackgroundImage='true'
    )
</template>

<script>
import ImageElement from '~/components/elements/Image.vue'

export default {
  components: {
    ImageElement
  },
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
  grid-auto-rows: min-content
  grid-template-columns: repeat(2, 1fr)
  grid-gap: $unit
  +mq-m
    grid-gap: $unit*2
</style>
