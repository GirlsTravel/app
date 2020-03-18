<template lang="pug">
div(
  v-lazy:background-image='photoURL'
  class='user-profile-photo'
)
</template>

<script>
export default {
  components: {},
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
  background: $pri-cl
  border-radius: 50%
  overflow: hidden
  background-position: center
  background-size: contain
  height: inherit
</style>
