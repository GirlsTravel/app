<template lang="pug">
div(class='container-hamburger')
  a(
    @click='handleClick'
    :class='{ active: isActive, hide: !isShow }'
    class='hamburger'
  )
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    isActive() {
      const { name } = this.$route
      return name === 'menu'
    },
    isShow() {
      return true
    }
  },
  methods: {
    handleClick() {
      const { name } = this.$route
      name === 'menu'
        ? this.$router.push({ name: 'index' })
        : this.$router.push({ name: 'menu' })
    }
  }
}
</script>

<style lang="sass" scoped>
.container-hamburger
  position: relative

.hamburger
  position: relative
  width: $unit*5
  height: $unit*5
  display: block
  border-radius: 50%
  background: transparent

  &.hide
    visibility: hidden

  &::after,
  &::before
    content: ''
    position: absolute
    top: 50%
    left: 50%
    width: $unit*3
    height: 2px
    background: $black
    transition: transform 500ms

  &::after
    transform: translate(-50%, -#{$unit/2})

  &::before
    transform: translate(-50%, #{$unit/2})

  &.active
    &::after,
    &::before
      transform: translate(-50%, 0)
      visibility: visible
</style>
