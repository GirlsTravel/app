<template lang="pug">
div(class='auth-user-sidebar')
  UserAvatar(
    :author='currentUser.username'
    :photoURL='currentUser.photoURL'
  )
  ul
    li(
      v-for='(item, index) in menuList'
    )
      MenuTile(
        :text='item.text'
        :to='item.to'
      )
</template>

<script>
import { mapGetters } from 'vuex'
import UserAvatar from '~/components/elements/UserAvatar.vue'
import MenuTile from '~/components/elements/MenuTile.vue'

export default {
  components: {
    UserAvatar,
    MenuTile
  },
  props: {},
  data() {
    return {
      menuList: [
        {
          text: 'Home',
          to: { name: 'index' }
        },
        {
          text: 'Saved',
          to: { name: 'account-settings' }
        },
        {
          text: 'Notifications',
          to: { name: 'account-settings' }
        },
        {
          text: 'Settings',
          to: { name: 'account-settings' }
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'users/currentUser'
    })
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.auth-user-sidebar
  position: sticky
  top: $navigation-bar
  left: 0
  min-height: calc(100vh - #{$navigation-bar})
</style>
