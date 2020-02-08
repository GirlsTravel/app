<template lang="pug">
div(class='navigation-bar')
  Hamburger(class='navigation-bar__hamburger')
  nuxt-link(
    to='/'
    class='navigation-bar__logo'
  )
    span Girls
    span Travel
  //- SearchForm(
  //-   class='navigation-bar__search-form'
  //- )
  nuxt-link(
    v-if='!isAuthUser'
    :to='{ name: "auth-signup" }'
    class='navigation-bar__sign-up'
  )
    BaseButton(
      text='Join'
    )
  nuxt-link(
    v-if='isAuthUser'
    :to='{ name: "account-settings" }'
    class='navigation-bar__avatar'
  )
    UserProfilePhoto(
      :photoURL='currentUser.photoURL'
    )
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '~/components/elements/Hamburger.vue'
import SearchForm from '~/components/modules/SearchForm.vue'
import UserProfilePhoto from '~/components/elements/UserProfilePhoto.vue'

export default {
  components: {
    Hamburger,
    SearchForm,
    UserProfilePhoto
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      isAuthUser: 'auth/isAuthUser',
      currentUser: 'users/currentUser'
    })
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.navigation-bar
  position: sticky
  top: 0
  left: 0
  z-index: 99
  width: 100%
  height: $navigation-bar
  background: rgba(255, 255, 255, 0.98)
  display: grid
  grid-template-columns: auto 1fr auto
  grid-auto-flow: column
  align-items: center
  grid-gap: $unit*2
  box-shadow: 0px $unit/2 $unit rgba(34, 34, 34, 0.1)
  padding: 0 $unit

  &__hamburger

  &__logo
    justify-self: center

    & > span
      font-size: 20px

    & > span:last-child
      font-weight: $fw-bold

  &__search-form
    display: none

  &__sign-up

  &__avatar
    width: $unit*5
    height: $unit*5
</style>
