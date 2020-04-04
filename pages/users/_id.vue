<template lang="pug">
div(class='user-profile')
  header(class='user-profile__header')
    UserProfilePhoto(
      :photoURL='user.photoURL'
      class='user-profile__avatar'
    )
    h2(
      class='user-profile__username'
    ) {{ user.username }}
    BaseButton(
      text='Follow'
      class='user-profile__subscribe'
    )
    div(
      class='user-profile__social'
    )
      IconInstagram(class='user-profile__social-svg')
      IconTwitter(class='user-profile__social-svg')
      IconFacebook(class='user-profile__social-svg')
    div(class='user-profile__bio')
      h1(class='user-profile__bio-name') {{ user.firstName }} {{ user.lastName }}
      p(class='user-profile__bio-description') {{ user.bio }}

  div(class='user-profile__sections')
    nuxt-link(
      :to='{ name: "users-id", params: { id: user.username } }'
    ) Questions
    nuxt-link(
      :to='{ name: "users-id-articles", params: { id: user.username } }'
    ) Articles

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
  validate({ params }) {
    return params.id
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  async asyncData({ store, params }) {
    const { id } = params
    const user = await store.dispatch('users/fetchUser', { username: id })
    return { user }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.user-profile
  display: grid
  // grid-gap: $unit
  grid-auto-rows: min-content

  &__header
    display: grid
    grid-template-rows: repeat(4, auto)
    grid-template-columns: auto 1fr auto
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

  &__subscribe
    grid-row: 1 / 3
    grid-column: 3 / 4
    align-self: start

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
    margin-bottom: $unit
    border-top: 2px solid $pri-cl
    background: $white

    & > a
      padding: $unit
      border-radius: $unit/2
      color: $grey

      &.nuxt-link-exact-active
        color: $blue
        background: $pri-cl
</style>
