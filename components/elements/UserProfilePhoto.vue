<template lang="pug">
div(
  v-lazy:background-image='photoURL'
  class='user-profile-photo'
)
  IconUserProfile(
    v-if='photoURL'
    class='user-profile-photo--placeholder'
  )
</template>

<script>
import IconUserProfile from '~/assets/svg/user-profile.svg'

export default {
  components: {
    IconUserProfile
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
.user-profile-photo
  position: relative
  height: inherit
  overflow: hidden
  border-radius: 50%
  background-position: center
  background-size: contain
  background: $pri-cl

  &--placeholder
    position: absolute
    left: 50%
    bottom: 0
    height: 80%
    transform: translateX(-50%)
    fill: $grey

  &[lazy='loaded'] .user-profile-photo--placeholder
    display: none
</style>
