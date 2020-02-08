<template lang="pug">
div(class='no-results')
  IllustrationRespond(class='no-results__illustration')
  h1(class='no-results__title') No more answers
  p(class='no-results__body')
    | Have an opinion to share?&nbsp;
    button(
      @click='$emit("addAnswer")'
      class='no-results__body-link'
    ) Add your answer
</template>

<script>
import IllustrationRespond from '~/assets/svg/respond.svg'

export default {
  components: {
    IllustrationRespond
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
.no-results
  display: grid
  grid-gap: $unit*2
  justify-items: center
  padding: $unit*10 $unit*2
  border-top: 2px solid $pri-cl

  &__illustration
    width: 100%
    max-height: $unit*40

  &__title
    font-size: $fs1
    font-weight: $fw-bold

  &__body
    text-align: center

    &-link
      color: $blue
      text-decoration: underline
      white-space: nowrap
</style>
