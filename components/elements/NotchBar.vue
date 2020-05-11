<template lang="pug">
button(
  @click='toggle'
  ref='notchBar'
  class='notch-bar'
)
  span(class='notch-bar__indicator')
</template>

<script>
export default {
  components: {},
  props: {
    expandSelector: {
      type: String,
      required: true
    },
    contractSelector: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      duration: 500,
      offset: 56,
      notchBarHeight: 24
    }
  },
  computed: {},
  methods: {
    toggle() {
      const { top } = this.$refs.notchBar.getBoundingClientRect()
      top > this.offset ? this.expand() : this.contract()
    },

    expand() {
      this.$scrollTo(this.expandSelector, this.duration, {
        offset: -this.offset - this.notchBarHeight
      })
    },

    contract() {
      this.$scrollTo(this.contractSelector, this.duration, {
        offset: -this.offset - this.notchBarHeight
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.notch-bar
  @extend %flex--row-center
  position: sticky
  top: $navigation-bar
  min-height: $notch-bar
  padding: $unit
  background: transparent

  &__indicator
    width: $unit*5
    height: $unit/2
    border-radius: $border-radius
    background: $grey
</style>
