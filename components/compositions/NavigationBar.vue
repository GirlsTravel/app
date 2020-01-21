<template lang="pug">
div(class='navigation-bar')
  Hamburger
  nuxt-link(
    to='/'
  )
    span Share
    span Overflow
  SearchForm
  BaseButton(
    text='Join or Login'
  )
</template>

<script>
import Hamburger from '~/components/elements/Hamburger.vue'
import SearchForm from '~/components/modules/SearchForm.vue'

export default {
  components: {
    Hamburger,
    SearchForm
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.navigation-bar
  position: sticky
  top: 0
  left: 0
  z-index: 99
  width: 100%
  background: rgba(255, 255, 255, 0.98)
  display: grid
  grid-template-columns: auto auto 1fr auto
  grid-auto-flow: column
  align-items: center
  grid-gap: $unit*2

  & a span:last-child
    font-weight: $fw-bold
</style>
