<template lang="pug">
div(class='quantity-stepper')
  button(
    type='button'
    class='quantity-stepper__button'
    :disabled='disableButtons || quantity <= min'
    @click='$emit("decreaseQuantity")'
  )
    span(class='material-icons') remove
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
  )
    span(class='material-icons') add
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
  display: grid
  grid-auto-flow: column

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
