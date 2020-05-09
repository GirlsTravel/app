<template lang="pug">
div(class='navigation-bar')
  //- Hamburger(class='navigation-bar__hamburger')
  nuxt-link(
    to='/'
    class='navigation-bar__logo'
  )
    Logo(
      :class='{ active: componentMounted }'
      class='navigation-bar__logo-svg'
    )
    LogoWithText(
      :class='{ hide: componentMounted }'
      class='navigation-bar__logo-svg navigation-bar__logo-svg--with-text'
    )
  //- SearchForm(
  //-   class='navigation-bar__search-form'
  //- )
  div(class='navigation-bar__links')
    nuxt-link(
      v-for='(link, index) in links'
      :key='link + index'
      :to='link.to'
      class='navigation-bar__link'
    ) {{ link.text }}
  nuxt-link(
    v-if='!isAuthUser'
    :to='{ name: "auth-signup" }'
    class='navigation-bar__sign-up'
  ) Get Started
    //- BaseButton(
    //-   text='Join'
    //-   class='navigation-bar__sign-up-button'
    //- )
  nuxt-link(
    :to='{ name: "shop-cart" }'
  )
    span(class='material-icons-outlined') shopping_basket
  nuxt-link(
    v-if='isAuthUser'
    :to='{ name: "account-settings" }'
    class='navigation-bar__avatar'
  )
    span(
      class='navigation-bar__avatar-name'
    ) {{ currentUser.username }}
    UserProfilePhoto(
      :photoURL='currentUser.photoURL'
      class='navigation-bar__avatar-photo'
    )
</template>

<script>
import { mapGetters } from 'vuex'
// import Hamburger from '~/components/elements/Hamburger.vue'
import SearchForm from '~/components/modules/SearchForm.vue'
import UserProfilePhoto from '~/components/elements/UserProfilePhoto.vue'
import LogoWithText from '~/assets/svg/logo-with-text.svg'
import Logo from '~/assets/svg/logo.svg'

export default {
  components: {
    // Hamburger,
    SearchForm,
    UserProfilePhoto,
    LogoWithText,
    Logo
  },
  props: {},
  data() {
    return {
      links: [
        { to: { name: 'shop' }, text: 'Shop' },
        { to: { name: 'articles' }, text: 'Articles' },
        { to: { name: 'questions' }, text: 'Questions' }
      ],
      componentMounted: false
    }
  },
  computed: {
    ...mapGetters({
      isAuthUser: 'auth/isAuthUser',
      currentUser: 'users/currentUser'
    })
  },
  mounted() {
    this.componentMounted = true
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
  // padding: 0 $unit

  &__hamburger

  &__logo
    justify-self: center
    display: flex
    align-items: center
    height: 100%
    padding: $unit $unit*2
    background: $blue

    &-svg
      height: $unit*4
      fill: $white
      +mq-xs
        display: none

      &--with-text
        height: $unit*3
        display: none
        +mq-xs
          display: flex

  &__search-form
    display: none

  &__links
    width: min-content
    display: grid
    grid-auto-flow: column
    grid-gap: $unit*2

  &__link

    &.nuxt-link-active,
    &:hover
      color: $blue

  &__sign-up
    padding: $unit $unit*2
    background: $pri-cl
    border-radius: $unit*2
    color: $blue
    margin-right: $unit*2

    &-button
      background: $pri-cl

  &__avatar
    @extend %flex--row-center
    margin-right: $unit*2
    height: inherit

    &-photo
      width: $unit*5
      height: $unit*5

    &-name
      display: none
      +mq-s
        display: block
        margin-right: $unit
</style>
