<template lang="pug">
div(class='')
  header(class='login__header')
    h2(class='login__title') Join the trip

  BaseButton(
    text='Continue with Google'
  )

  p Or, use your email

  form(
    @submit.prevent='signUp'
    class='login__form'
  )
    BaseInput(
      v-model='email'
      label='Email'
      placeholder='Email address'
    )
    BaseButton(
      text='Send secure link'
    )

  footer(class='login__footer')
    p By using Share Overflow you agree to its Terms of Service and Privacy Policy.
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
.test
  background: white
</style>
