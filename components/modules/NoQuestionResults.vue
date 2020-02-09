<template lang="pug">
div(class='no-results')
  IllustrationNotFound(class='no-results__illustration')
  h1(class='no-results__title') No more questions
  p(class='no-results__body')
    | Can't find what you're looking for?&nbsp;
    nuxt-link(
      :to='{ name: "posts-new" }'
      class='no-results__body-link'
    ) Ask a question
</template>

<script>
import IllustrationNotFound from '~/assets/svg/not-found.svg'

export default {
  components: {
    IllustrationNotFound
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
