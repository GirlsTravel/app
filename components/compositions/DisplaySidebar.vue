<template lang="pug">
div(class='display-sidebar')
  FeedbackForm(class='display-sidebar__feedback-form')
</template>

<script>
import FeedbackForm from '~/components/modules/FeedbackForm.vue'

export default {
  components: {
    FeedbackForm
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.display-sidebar
  padding: $unit*2 $unit*2
  margin-top: $unit
  +mq-l
    position: sticky
    top: $navigation-bar
    right: 0
    height: calc(100vh - #{$navigation-bar})
    padding: $unit*5 $unit*2
    margin: 0

  &__feedback-form
    background: $white
    +mq-l
      background: $pri-cl
</style>
