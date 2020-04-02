<template lang="pug">
div(class='user-profile')
  header(class='user-profile__header')
    UserProfilePhoto(
      photoURL='https://res.cloudinary.com/raina-images/image/upload/w_160,h_160,c_fill,g_face,r_max/v1585420542/user_profile_photo/D72JDbbOeETCOt34j9zRTaeERn02.jpg'
      class='user-profile__avatar'
    )
    h2(
      class='user-profile__username'
    ) crazyBridges91
    div(
      class='user-profile__social'
    )
      IconInstagram(class='user-profile__social-svg')
      IconTwitter(class='user-profile__social-svg')
      IconFacebook(class='user-profile__social-svg')
    div(class='user-profile__bio')
      h1(class='user-profile__bio-name') Pheobi Bridges
      p(class='user-profile__bio-description') A resume profile is typically several sentences or a short paragraph that summarizes an applicant's goals and ambitions for his or her next job. It also highlights the candidate's most relevant qualifications and skills for the job.

  div(class='user-profile__sections')
    a() Articles
    a Questions

  div()
    nuxt-child
</template>

<script>
import UserProfilePhoto from '~/components/elements/UserProfilePhoto.vue'
import IconTwitter from '~/assets/svg/twitter.svg'
import IconInstagram from '~/assets/svg/instagram.svg'
import IconFacebook from '~/assets/svg/facebook.svg'

export default {
  components: {
    UserProfilePhoto,
    IconTwitter,
    IconInstagram,
    IconFacebook
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.user-profile
  display: grid
  grid-gap: $unit
  grid-auto-rows: min-content

  &__header
    display: grid
    grid-template-rows: repeat(4, auto)
    grid-template-columns: auto 1fr
    grid-gap: $unit*2 $unit*5
    height: min-content
    padding: $unit*5 $unit*2
    background: $white
    +mq-m
      grid-template-rows: repeat(3, auto)

  &__avatar
    grid-row: 1 / 4
    grid-column: 1 / 2
    width: $unit*12
    height: $unit*12
    +mq-m
      grid-row: 1 / -1

  &__username
    grid-row: 1 / 2
    grid-column: 2 / 3
    font-size: $fs1

  &__social
    grid-row: 2 / 3
    grid-column: 2 / 3
    display: grid
    grid-auto-flow: column
    grid-auto-columns: min-content
    grid-gap: $unit

    &-svg
      width: $unit*2
      fill: $grey

  &__bio
    grid-row: 4 / 5
    grid-column: 1 / -1
    +mq-m
      grid-row: 3 / 4
      grid-column: 2 / -1

    &-name
      font-weight: $fw-bold

    &-description
      color: $dark

  &__sections
    display: grid
    grid-auto-flow: column
    grid-gap: $unit
    grid-auto-columns: min-content
    justify-content: center
    padding: $unit*2
    background: $white
</style>
