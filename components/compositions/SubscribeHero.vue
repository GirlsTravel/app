<template lang="pug">
section(class='newsletter-hero' id='newsletter-hero')
  div(class='newsletter-hero__content')
    header(class='newsletter-hero__header')
      h1(class='newsletter-hero__title') {{ title }}
      p(class='newsletter-hero__text') {{ text }}
      ValidationObserver(v-slot='{ dirty, invalid, handleSubmit }')
        form(
          @submit.prevent='handleSubmit(onSubmit)'
          class='newsletter-hero__form'
        )
          Input(
            v-model='email'
            rules='required|isEmail'
            placeholder='example@gmail.com'
          )
          Button(
            text='Join'
            :disabled='invalid && dirty'
          )
  video(
    autoplay
    muted
    loop
    class='video'
  )
    source(
      src='~/assets/camping-video.mp4'
      type='video/mp4'
    )
    //- IllustrationNewsletter(class='newsletter-hero__illustration')
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import Input from '~/components/elements/Input.vue'
import Button from '~/components/elements/Button.vue'
// import IllustrationNewsletter from '~/assets/svg/illustration-newsletter.svg'

export default {
  components: {
    Button,
    // IllustrationNewsletter,
    Input,
    ValidationObserver
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      header: {
        title: 'This week in the stock market',
        text: `Never miss out again. Get the most important financial events sent straight to your inbox.`
      },
      email: ''
    }
  },
  computed: {},
  methods: {
    onSubmit() {
      try {
        console.log('onSubmit')
        // const res = await this.$axios({
        //   baseURL:
        //     'https://us-central1-investful-microservices.cloudfunctions.net/',
        //   url: 'https-mailchimpSubscribe/',
        //   method: 'post',
        //   data: {
        //     email: this.email
        //   }
        // })
        this.$toast.show('Thank you for subscribing! 🎉')
      } catch (e) {
        console.error(e)
        this.$toast.show('Oops, an error occurred. Try again.')
      } finally {
        this.$ga.event('Newsletter', 'submit', 'Hero context')
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.newsletter-hero
  position: relative
  min-height: 400px
  padding: $unit*5 $unit*2
  background: #fbeeca

  &::before
    content: ''
    position: absolute
    z-index: 2
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #fbeeca
    display: none

  &__content
    position: relative
    z-index: 3
    display: grid
    justify-items: center
    align-items: center
    grid-gap: $unit*10
    max-width: 1480px
    margin: 0 auto
    +mq-m
      grid-template-columns: repeat(2, 1fr)
      padding: $unit*10

  &__header
    display: grid
    grid-gap: $unit*2
    text-align: center
    +mq-m
      text-align: initial

  &__title
    font-size: $fs2
    font-weight: $fw-bold

  &__form
    display: grid
    grid-auto-columns: 1fr minmax(160px, auto)
    grid-gap: $unit
    max-width: 500px
    width: 100%
    margin: 0 auto
    +mq-m
      grid-auto-flow: column
      margin: 0

  &__illustration
    max-width: 500px

.video
  position: absolute
  z-index: 1
  top: 0
  left: 0
  width: 100%
  height: 100%
  object-fit: cover
  mix-blend-mode: multiply
</style>
