<template lang="pug">
ValidationProvider(
  :rules='rules'
  v-slot='{ failed, required }'
)
  label(class='label')
    span(
      v-if='label'
      class='label__text'
    ) {{ label }}
    input(
      v-bind='$attrs'
      v-on='listeners'
      :class='{ failed }'
      class='label__input'
    )
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    rules: {
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
.label
  display: grid
  grid-gap: $unit/2 0

  &__input
    height: $unit*6
    padding: $unit*2
    border: 1px solid #fafafa
    border-radius: $unit/2
    background: #fafafa

    &:focus,
    &:hover
      background: transparent
      border-color: $grey

    &:focus
      border-color: $blue

    &.failed
      border-color: $error
</style>
