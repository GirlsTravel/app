<template lang="pug">
div(
  :class='{ "is-open": isOpen }'
  class='overlay-drawer'
)
  header(class='overlay-drawer__header')
    button(
      @click='closeDrawer'
      class='overlay-drawer__button'
    ) Close
    slot(name='header')
  div(
    v-scroll-lock='isOpen'
    class='overlay-drawer__content'
  )
    slot
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  components: {},
  props: {
    drawerId: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    isOpen() {
      return this.drawer === this.drawerId
    },

    ...mapState({
      drawer: (state) => state.app.drawer
    })
  },
  methods: {
    ...mapMutations({
      closeDrawer: 'app/CLOSE_DRAWER'
    })
  }
}
</script>

<style lang="sass" scoped>
.overlay-drawer
  position: fixed
  z-index: 200
  top: 100%
  left: 0
  width: 100vw
  height: 100%
  display: flex
  flex-direction: column
  overflow: hidden
  background: $white
  transition: transform 150ms ease-out

  &.is-open
    transform: translateY(-100%)

  &__header
    display: grid
    grid-template-columns: 1fr auto
    grid-auto-flow: column
    width: 100%
    padding: $unit 0

  &__button
    grid-row: 1 / 2
    grid-column: 2 / 3
    padding: 0 $unit*2

  &__content
    overflow-y: auto
    width: 100%
    flex: 1 1 auto
</style>
