<template lang="pug">
div(class='dropdown')
  button(class='dropdown__button')
    slot(name='button')
  div(class='dropdown__content')
    slot(name='content')
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.dropdown
  position: relative
  display: inline-block

  &__button
    display: flex
    margin-left: auto

  &__content
    display: none
    position: absolute
    z-index: 10
    right: 0
    min-width: 160px
    background: $grey
    box-shadow: 0px $unit*2 $unit*2 rgba(34, 34, 34, 0.1)

  &:hover
    min-width: 160px

    .dropdown__content
      display: flex
      flex-direction: column
</style>
