<template lang="pug">
div(class='display-sidebar')
  FeedbackForm(
    @isExpanded='handleIsFeedbackFormExpanded'
    class='display-sidebar__feedback-form'
  )
  EmailNewsletterForm(
    v-show='!isFeedbackFormExpanded'
    class='display-sidebar__email-newsletter-form'
  )
</template>

<script>
import FeedbackForm from '~/components/modules/FeedbackForm.vue'
import EmailNewsletterForm from '~/components/modules/EmailNewsletterForm.vue'

export default {
  components: {
    FeedbackForm,
    EmailNewsletterForm
  },
  props: {},
  data() {
    return {
      isFeedbackFormExpanded: false
    }
  },
  computed: {},
  methods: {
    handleIsFeedbackFormExpanded(value) {
      this.isFeedbackFormExpanded = value
    }
  }
}
</script>

<style lang="sass" scoped>
.display-sidebar
  display: grid
  grid-auto-rows: min-content
  grid-gap: $unit*2
  padding: $unit*2 $unit*2
  margin-top: $unit
  +mq-s
    position: sticky
    top: $navigation-bar
    right: 0
    height: calc(100vh - #{$navigation-bar})
    // padding: $unit*5 $unit*2
    margin: 0

  &__feedback-form,
  &__email-newsletter-form
    background: $white
    +mq-s
      background: $pri-cl
</style>
