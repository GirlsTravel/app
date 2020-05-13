<template lang="pug">
div(
  ref='carousel'
  class='carousel'
)
  button(
    @click='onNavigation(-1)'
    class='carousel__button'
  )
    span(class='carousel__button-icon material-icons') chevron_left

  slot

  button(
    @click='onNavigation(1)'
    class='carousel__button'
  )
    span(class='carousel__button-icon material-icons') chevron_right
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    /**
     * Scroll the slider on prev/next navigation.
     * @param {number} delta Dictates directional change.
     */
    onNavigation(delta) {
      const carousel = this.$refs.carousel
      const slideWidth = carousel.children[1].offsetWidth
      carousel.scrollTo({
        left: carousel.scrollLeft + slideWidth * delta,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.carousel
  display: grid
  grid-auto-flow: column
  grid-gap: $unit*2
  overflow-x: auto
  scroll-snap-type: x mandatory
  scroll-padding: 0 $unit*7
  /** Hide scrollbar for IE and Edge */
  -ms-overflow-style: none

  /** Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar
    display: none

  &__button
    @extend %flex--row-center
    display: none
    +mq-m
      display: flex
      position: sticky
      top: 0
      left: 0
      padding: 0 $unit
      background: transparent
      background: rgba(255, 255, 255, 0.75)
      color: $grey

    &:last-of-type
      left: initial
      right: 0

    &:hover
      color: $blue

    &-icon
      @extend %flex--row-center
      color: inherit
</style>
