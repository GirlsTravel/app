<template lang="pug">
div(class='verify')
  header(class='verify__header')
    h2(class='verify__title') Confirm your email

  //- BaseButton(
  //-   text='Continue with Google'
  //- )
  //-
  //- p Or, use your email

  form(
    @submit.prevent='signUp'
    class='verify__form'
  )
    BaseInput(
      v-model='email'
      label='Email'
      placeholder='Email address'
      class='verify__form-input'
    )
    BaseButton(
      text='Confirm Email'
      class='verify__form-submit'
    )

  footer(class='verify__footer')
    p By using Girls Travel you agree to its Terms of Service and Privacy Policy.
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {},
  props: {},
  data() {
    return {
      username: '',
      email: ''
    }
  },
  computed: {},
  created() {
    // this.$store.dispatch('auth/confirmSignIn')
    this.handleInitVerification()
  },
  methods: {
    async handleInitVerification() {
      const { user } = await this.confirmSignIn()
      if (user) {
        this.$router.push({
          name: 'index'
        })
      }
    },
    ...mapActions({
      confirmSignIn: 'auth/confirmSignIn'
    })
  }
}
</script>

<style lang="sass" scoped>
.verify
  display: grid
  grid-gap: $unit*4
  grid-auto-rows: min-content
  padding: $unit*4 $unit*2
  background: $white

  &__header

  &__title
    font-size: $fs1
    font-weight: $fw-bold

  &__form
    display: grid
    grid-gap: $unit*2

    &-submit
      justify-self: start

  &__footer

    & > p
      font-size: 12px
      color: $dark
</style>
