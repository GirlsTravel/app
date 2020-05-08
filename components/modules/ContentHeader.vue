<template lang="pug">
header(class='content-header')
  h2(class='content-header__title') {{ title }}
  p(class='content-header__text') {{ text }}
  nuxt-link(
    v-if='linkTo && linkText'
    :to='linkTo'
    class='content-header__link'
  ) {{ linkText }}
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    linkTo: {
      type: Object,
      default: () => {}
    },
    linkText: {
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
.content-header
  display: grid
  grid-template-columns: 1fr auto
  grid-gap: $unit/2

  &__title
    grid-row: 1 / 2
    grid-column: 1 / 2
    font-size: $fs2
    font-weight: $fw-bold

  &__text
    grid-row: 2 / 3
    grid-column: 1 / 2

  &__link
    height: min-content
    grid-row: 1 / 2
    grid-column: 2 / 3
    // background: $pri-cl
    // padding: $unit $unit*2
    // border-radius: $unit/2
    color: $blue

    &:hover
      text-decoration: underline
</style>
