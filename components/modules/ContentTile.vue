<template lang="pug">
aside(
  class='content-tile'
  v-lazy:background-image='backgroundImageURL'
)
  div(class='content-tile__header')
    h1(class='content-tile__headline') {{ headline }}
    p(class='content-tile__text') {{ text }}
  div(class='content-tile__links')
    nuxt-link(
      :to='primaryLink'
      class='content-tile__link'
    ) {{ primaryLinkLabel }}
    nuxt-link(
      v-if='secondaryLink && secondaryLinkLabel'
      :to='secondaryLink'
      class='content-tile__link'
    ) {{ secondaryLinkLabel }}
  nuxt-link(
    :to='primaryLink'
    class='content-tile__tile-link'
  )
</template>

<script>
export default {
  components: {},
  props: {
    headline: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    primaryLink: {
      type: Object,
      required: true
    },
    primaryLinkLabel: {
      type: String,
      default: ''
    },
    secondaryLink: {
      type: Object,
      default: () => {}
    },
    secondaryLinkLabel: {
      type: String,
      default: ''
    },
    backgroundImageURL: {
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
.content-tile
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  padding: $unit*7 $unit*2
  background-position: bottom
  background-repeat: no-repeat
  background-size: cover
  background-color: $pri-cl

  &__header
    @extend %flex--column-center
    height: min-content
    text-align: center
    pointer-events: none

  &__headline
    max-width: $fs*56
    font-size: $fs2
    font-weight: $fw-bold
    +mq-s
      font-size: $fs3

  &__text
    max-width: $fs*28
    margin-top: $unit

  &__links
    position: relative
    z-index: 4
    display: grid
    grid-auto-flow: column
    grid-gap: $unit*2
    margin-top: $unit*2

  &__link
    color: $blue

    &:empty
      display: none

    &::after
      content: '›'
      padding-left: $unit/2

    &:hover
      text-decoration: underline

  &__tile-link
    position: absolute
    z-index: 3
    top: 0
    left: 0
    width: 100%
    height: 100%
</style>
