<template lang="pug">
div(class='auth-user-sidebar')
  //- UserAvatar(
  //-   :author='currentUser.username'
  //-   :photoURL='currentUser.photoURL'
  //-   :createdAt='{ seconds: 0 }'
  //- )
  ul(class='auth-user-sidebar__menu-list')
    li(
      v-for='(item, index) in menuList'
      class='auth-user-sidebar__menu-item'
    )
      MenuTile(
        :text='item.text'
        :to='item.to'
        class='auth-user-sidebar__menu-link'
      )
</template>

<script>
import { mapGetters } from 'vuex'
import UserAvatar from '~/components/modules/UserAvatar.vue'
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
          text: 'My Questions',
          to: { name: 'account-settings' }
        },
        {
          text: 'My Participation',
          to: { name: 'account-settings' }
        },
        {
          text: 'Saved',
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
  justify-items: end
  align-items: start
  padding: $unit*5 $unit*2

  &__menu-list
    display: grid
    grid-gap: $unit 0
    // justify-items: end

  &__menu-item
    display: flex

  &__menu-link
    padding: $unit $unit*3
    background: $pri-cl
    border-radius: $unit*2
    width: 100%
</style>
