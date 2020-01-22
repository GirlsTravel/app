<template lang="pug">
div(class='')

</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {
    this.$store.dispatch('auth/confirmSignIn')
  },
  methods: {
    ...mapActions({
      confirmSignIn: 'auth/confirmSignIn'
    })
  }
}
</script>

<style lang="sass" scoped>
.test
  background: white
</style>
