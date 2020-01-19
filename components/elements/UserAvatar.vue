<template lang="pug">
div(class='user-avatar')
  a(class='user-avatar__image')
  div(class='user-avatar__info')
    a(class='') {{ author }}
    p(class='') 3 days ago
</template>

<script>
export default {
  components: {},
  props: {
    author: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.user-avatar
  display: flex
  align-items: center
  width: $unit*20

  &__image
    background: lightblue
    border-radius: 50%
    width: $unit*4
    height: $unit*4

  &__info
    display: flex
    flex-direction: column
    margin-left: $unit

    & a
      font-weight: $fw-bold

    & p
      color: $dark

    & p, & a
      max-width: $unit*15
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden
      font-size: 12px
</style>
