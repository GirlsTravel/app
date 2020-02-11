<template lang="pug">
form(
  @submit.stop.prevent='submitFeedback'
  class='feedback'
)
  h3(class='feedback__title') Share Your Feedback
  p Do you have a suggestion or found a bug? Let us know.
  div(
    class='feedback__choices'
  )
    div(v-for='(item, index) in feedbackChoices')
      input(
        v-model='activeChoice'
        :value='"choice" + index'
        type='radio'
        :id='"feedback-choice-" + index'
        class='feedback__input'
      )
      label(
        :for='"feedback-choice-" + index'
        class='feedback__label'
      )
        BaseDynamicIcon(
          :icon='item.icon'
          :class='{ active: activeChoice === "choice" + index }'
          class='feedback__svg'
        )
  BaseTextarea(
    v-if='activeChoice'
    placeholder='Describe your experience here...'
    class='feedback__textarea'
  )
  //- BaseInput(
  //-   v-if='activeChoice'
  //-   label='Email'
  //-   placeholder='Enter your email...'
  //-   class='feedback__input'
  //- )
  BaseButton(
    v-if='activeChoice'
    text='Send Feedback'
    class='feedback__submit'
  )
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      feedbackChoices: [
        {
          icon: 'sad-face'
        },
        {
          icon: 'neutral-face'
        },
        {
          icon: 'smile-face'
        }
      ],
      activeChoice: ''
    }
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

  &__input
    display: none

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
