<template lang="pug">
header(class='view-header')
  button(
    v-if='secondaryActionLabel'
    @click='$emit("secondaryActionClick")'
    class='view-header__action view-header__action--secondary'
  ) {{ secondaryActionLabel }}
  h1(
    v-if='title'
    class='view-header__title'
  ) {{ title }}
  button(
    v-if='primaryActionLabel'
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
      default: ''
    },
    primaryActionLabel: {
      type: String,
      default: ''
    },
    secondaryActionLabel: {
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
.view-header
  position: sticky
  z-index: 5
  top: $navigation-bar
  display: grid
  grid-template-columns: $unit*9 1fr $unit*9
  justify-items: center
  align-items: center
  height: $unit*7
  background: $white
  background: rgba(255, 255, 255, 0.97)

  &__title
    grid-column: 2 / 3
    font-weight: $fw-bold

  &__action
    padding: $unit
    border-radius: $unit/2

    &--primary
      grid-column: 3 / 4
      justify-self: end
      background: $pri-cl
      color: $blue

    &--secondary
      grid-column: 1 / 2
      justify-self: start
</style>
