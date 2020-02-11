<template lang="pug">
div(class='navigation-bar')
  Hamburger(class='navigation-bar__hamburger')
  nuxt-link(
    to='/'
    class='navigation-bar__logo'
  )
    LogoWithText(class='navigation-bar__logo-svg')
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
import LogoWithText from '~/assets/svg/logo-with-text.svg'

export default {
  components: {
    Hamburger,
    SearchForm,
    UserProfilePhoto,
    LogoWithText
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
  grid-template-columns: auto auto 1fr
  grid-auto-flow: column
  align-items: center
  grid-gap: $unit*2
  box-shadow: 0px $unit/2 $unit rgba(34, 34, 34, 0.1)
  padding: 0 $unit
  justify-items: end

  &__hamburger

  &__logo
    justify-self: center
    display: flex
    align-items: center
    height: 100%
    padding: $unit $unit*2
    background: $blue

    &-svg
      height: $unit*3
      fill: $white

  &__search-form
    display: none

  &__sign-up

  &__avatar
    width: $unit*5
    height: $unit*5
</style>
