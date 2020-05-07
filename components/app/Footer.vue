<template lang="pug">
footer(class='footer')
  p(class='footer__copyright') ©{{ new Date().getFullYear() }} {{ generalData.companyName }}, LLC
</template>

<script>
import generalData from '~/data/general.json'

export default {
  components: {},
  props: {},
  data() {
    return {
      generalData
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.footer
  margin-top: $unit
  padding: $unit*5
  text-align: center

  &__copyright,
  &__attribution
    font-size: 12px
    color: $white
</style>
