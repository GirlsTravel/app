<template lang="pug">
header(class='view-header')
  button(
    @click='$emit("secondaryActionClick")'
    class='view-header__action view-header__action--secondary'
  ) {{ secondaryActionLabel }}
  h1(class='view-header__title') {{ title }}
  button(
    @click='$emit("primaryActionClick")'
    class='view-header__action view-header__action--primary'
  ) {{ primaryActionLabel }}
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      required: true
    },
    primaryActionLabel: {
      type: String,
      required: true
    },
    secondaryActionLabel: {
      type: String,
      required: true
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
.view-header
  position: sticky
  top: $navigation-bar
  display: grid
  grid-template-columns: $unit*9 1fr $unit*9
  justify-items: center
  align-items: center
  height: $unit*7
  background: $white
  background: rgba(255, 255, 255, 0.97)

  &__title
    font-weight: $fw-bold

  &__action
    padding: $unit
    border-radius: $unit/2

    &--primary
      background: $pri-cl
      color: $blue
      justify-self: end

    &--secondary
      justify-self: start
</style>
