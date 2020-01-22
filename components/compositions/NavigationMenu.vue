<template lang="pug">
div(class='')
  a(
    @click='signOut'
  ) Sign Out
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
  methods: {
    ...mapActions({
      signOut: 'auth/signOut'
    })
  }
}
</script>

<style lang="sass" scoped>
.test
  background: white
</style>
