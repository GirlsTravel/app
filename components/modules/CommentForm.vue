<template lang="pug">
form(
  @submit.stop.prevent=''
  class='comment-form'
)
  BaseTextarea(
    v-model='message'
    :placeholder='textareaPlaceholder'
    ref='answerTextarea'
    class='comment-form__textarea'
  )
  BaseButton(
    @click='$emit("primaryButtonClick")'
    :text='primaryButtonLabel'
    class='comment-form__button comment-form__button--primary'
  )
  BaseButton(
    v-if='secondaryButtonLabel'
    @click='$emit("secondaryButtonClick")'
    :text='secondaryButtonLabel'
    class='comment-form__button comment-form__button--secondary'
  )
</template>

<script>
export default {
  components: {},
  props: {
    primaryButtonLabel: {
      type: String
    },
    secondaryButtonLabel: {
      type: String
    },
    textareaPlaceholder: {
      type: String,
      default: 'Write here...'
    }
  },
  data() {
    return {
      message: ''
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.comment-form
  display: grid
  grid-template-columns: auto 1fr
  grid-gap: $unit*2
  justify-items: start

  &__textarea
    grid-column: 1 / -1
    width: 100%

  &__button

    &--secondary
      background: $pri-cl
      color: $dark
</style>
