<template lang="pug">
div(class='quantity-stepper')
  button(
    type='button'
    class='quantity-stepper__button'
    :disabled='disableButtons || quantity <= min'
    @click='$emit("decreaseQuantity")'
  ) -
  input(
    v-model='quantity'
    type='number'
    min='0'
    readonly
    class='quantity-stepper__input'
  )
  button(
    type='button'
    class='quantity-stepper__button'
    :disabled='disableButtons || quantity >= max'
    @click='$emit("increaseQuantity")'
  ) +
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 9999
    },
    disableButtons: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
.quantity-stepper
  width: min-content
  grid-row: 5 / 6
  grid-column: 1 / 4
  display: grid
  grid-auto-flow: column
  +mq-xs
    grid-row: 4 / 5
    grid-column: 2 / 4
    align-self: end

  &__button,
  &__input
    display: flex
    justify-content: center
    align-items: center
    width: $unit*5
    height: $unit*5
    text-align: center

  &__button
    border-radius: 50%
    border: 2px solid $pri-cl
    user-select: none

    &:hover:not(:disabled)
      border-color: $blue
      color: $blue

    &:disabled
      color: $grey
</style>
