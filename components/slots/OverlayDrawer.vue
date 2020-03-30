<template lang="pug">
div(
  :class='{ "is-open": isOpen }'
  class='container-overlay-drawer'
)
  slot(name='header')
  div(
    v-scroll-lock='isOpen'
    class='overlay__content'
  )
    slot
</template>

<script>
import { mapState } from 'vuex'

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
  methods: {}
}
</script>

<style lang="sass" scoped>
.container-overlay-drawer
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

.overlay

  &__content
    overflow-y: auto
    width: 100%
    flex: 1 1 auto
</style>
