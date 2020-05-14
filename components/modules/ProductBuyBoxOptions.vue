<template lang="pug">
div(class='buy-box-options')
  section(
    v-for='(option, index) in options'
    :key='option + index'
    class='buy-box-options__section'
  )
    header(class='buy-box-options__header')
      h3(class='buy-box-options__title') {{ option.name }}:&nbsp;
      p(
        v-text='selectedOptionValue({ name: option.name })'
        class='buy-box-options__selection'
      )
    ul(
      v-if='option.values.length > 1'
      class='buy-box-options__list'
    )
      li(
        v-for='(value, index) in option.values'
        :key='value + index'
        class='buy-box-options__item'
      )
        button(
          @click='$emit("optionSelection", { name: option.name, value })'
          :class='{ active: selectedOptionValue({ name: option.name }) === value }'
          type='button'
          class='buy-box-options__option'
        ) {{ value }}
</template>

<script>
export default {
  components: {},
  props: {
    options: {
      type: Array,
      required: true
    },
    selectedOptions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    selectedOptionValue({ name }) {
      const selectedOption = this.selectedOptions.find(
        (selectedOption) => selectedOption.name === name
      )
      return selectedOption ? selectedOption.value : ''
    }
  }
}
</script>

<style lang="sass" scoped>
.buy-box-options
  display: grid
  grid-gap: $unit*2

  &__section
    display: grid
    grid-gap: $unit

  &__header
    display: flex

  &__title
    font-weight: $fw-bold

  &__list
    display: grid
    grid-gap: $unit
    grid-template-columns: repeat(auto-fill, minmax(80px, auto))

  &__option
    width: 100%
    min-height: $unit*7
    padding: $unit
    border: 2px solid $pri-cl

    &:hover,
    &.active
      border-color: $blue

    &.active
      color: $blue
</style>
