<template lang="pug">
form(
  @submit.stop.prevent='submitFeedback'
  class='feedback'
)
  h3(class='feedback__title') Join Our Newsletter 🎉
  p Get the latest travel tips to experience more on your next adventure!
  BaseInput(
    placeholder='Enter your email...'
    class='feedback__input'
  )
  BaseButton(
    text='Subscribe'
    class='feedback__submit'
  )
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    submitFeedback() {
      this.activeChoice = ''
    }
  }
}
</script>

<style lang="sass" scoped>
.feedback
  display: grid
  grid-gap: $unit*2 0
  height: min-content
  padding: $unit*2
  border-radius: $unit/2

  &__title
    font-size: 18px
    font-weight: $fw-bold

  &__choices
    justify-self: start
    display: grid
    grid-auto-flow: column
    grid-gap: $unit*2
    justify-items: start

  &__label
    display: flex
    font-size: $fs2
    cursor: pointer

  &__submit
    justify-self: start

  &__svg
    width: $unit*5
    fill: $dark

    &:hover,
    &.active
      fill: $blue
</style>
