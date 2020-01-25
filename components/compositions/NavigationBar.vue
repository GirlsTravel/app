<template lang="pug">
div(class='navigation-bar')
  Hamburger
  nuxt-link(
    to='/'
  )
    span Share
    span Overflow
  SearchForm
  nuxt-link(
    v-if='!isAuthUser'
    :to='{ name: "auth-signup" }'
  )
    BaseButton(
      text='Join'
    )
  //- UserAvatar(
  //-   :author='currentUser.username'
  //-   :photoURL='currentUser.photoURL'
  //- )
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '~/components/elements/Hamburger.vue'
import SearchForm from '~/components/modules/SearchForm.vue'
import UserAvatar from '~/components/elements/UserAvatar.vue'

export default {
  components: {
    Hamburger,
    SearchForm,
    UserAvatar
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
  grid-template-columns: auto auto 1fr auto
  grid-auto-flow: column
  align-items: center
  grid-gap: $unit*2
  // box-shadow: 0px $unit/2 $unit rgba(34, 34, 34, 0.1)

  & a span:last-child
    font-weight: $fw-bold
</style>
