<template lang="pug">
form(
  @submit.stop.prevent='subscribeToNewsletter'
  class='feedback'
)
  h3(class='feedback__title') Join Our Newsletter 🎉
  p Get the latest travel tips to experience more on your next adventure!
  BaseInput(
    v-model.trim='email'
    placeholder='Enter your email...'
    class='feedback__input'
  )
  BaseButton(
    text='Subscribe'
    class='feedback__submit'
  )
</template>

<script>
import { functions } from '~/plugins/firebase'

export default {
  components: {},
  props: {},
  data() {
    return {
      email: ''
    }
  },
  computed: {},
  methods: {
    async subscribeToNewsletter() {
      try {
        this.$toast.show('One moment, talking to our secure server now.')
        const createFeedback = functions.httpsCallable(
          'https-subscribeNewsletter'
        )
        await createFeedback({ email: this.email })
        this.email = ''
        this.$toast.show('Yay! You have successfully been subscribed.')
      } catch (e) {
        console.error(e)
        this.$toast.show('Oops, an error occurred. Try again.')
      }
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
