<template lang="pug">
a(
  :style='{ backgroundImage: `url(${photoURL})` }'
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
  width: $unit*4
  height: $unit*4
  overflow: hidden
  background-position: center
  background-size: contain
</style>
