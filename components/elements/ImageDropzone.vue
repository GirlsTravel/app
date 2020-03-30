<template lang="pug">
div(class='image-dropzone')
  label(class='image-dropzone__label') Cover Image
  button(
    @click='$emit("primaryActionClick")'
    v-lazy:background-image='photoURL'
    class='image-dropzone__button'
  )
    IconImage(
      v-show='!photoURL'
      class='image-dropzone__svg'
    )
    span(
      v-show='!photoURL'
    ) Choose from our library
</template>

<script>
import IconImage from '~/assets/svg/image.svg'

export default {
  components: {
    IconImage
  },
  props: {
    photoURL: {
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
.image-dropzone
  display: grid
  grid-gap: $unit/2 0

  &__label

  &__button
    @extend %flex--column-center
    width: 100%
    height: $unit*20
    padding: $unit*2
    border: 1px solid #fafafa
    border-radius: $unit/2
    background-color: #fafafa
    background-position: center
    background-size: cover
    background-repeat: no-repeat

    &:focus,
    &:hover
      background-color: transparent
      border-color: $grey

    &:focus
      border-color: $blue

  &__svg
    width: $unit*3
    margin-bottom: $unit
    fill: $grey

  &__text
    color: $grey
</style>
