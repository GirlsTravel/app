<template lang="pug">
label(class='base-label')
  span(
    v-if='label'
    class='base-label__text'
  ) {{ label }}
  textarea(
    v-bind='$attrs'
    v-on='listeners'
    class='base-input'
  )
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.base-label
  display: grid
  grid-gap: $unit/2 0

.base-input
  min-height: $unit*20
  // height: 100%
  padding: $unit*2
  border: 1px solid #fafafa
  border-radius: $unit/2
  background: #fafafa
  resize: vertical

  &:focus,
  &:hover
    background: transparent
    border-color: $grey

  &:focus
    border-color: $blue
</style>
