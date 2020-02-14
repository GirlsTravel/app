<template lang="pug">
div(class='sign-up')
  aside
    p
      | Join the Girls Travel community to continue.&nbsp;

  header(class='sign-up__header')
    h2(class='sign-up__title') Sign up or login with just your email

  //- BaseButton(
  //-   text='Continue with Google'
  //- )
  //-
  //- p Or, use your email

  form(
    @submit.prevent='signUp'
    class='sign-up__form'
  )
    BaseInput(
      v-model='email'
      label='Email'
      placeholder='Email address'
      class='sign-up__form-input'
    )
    BaseButton(
      text='Send Secure Link'
      class='sign-up__form-submit'
    )

  footer(class='sign-up__footer')
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
  methods: {
    async signUp() {
      try {
        await this.sendSignInLinkToEmail({
          email: this.email
        })
      } catch (e) {
        // console.error(e)
        // const errorMessage = 'Sign up failed'
        // this.handleError({ errorMessage })
      }
    },

    ...mapActions({
      sendSignInLinkToEmail: 'auth/sendSignInLinkToEmail'
    })
  }
}
</script>

<style lang="sass" scoped>
.sign-up
  display: grid
  grid-gap: $unit*4
  grid-auto-rows: min-content
  padding: $unit*4 $unit*2
  background: $white

  & aside
    background: lightyellow
    padding: $unit*2
    border-radius: $unit/2

    & a
      color: $blue
      text-decoration: underline
      white-space: nowrap

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
