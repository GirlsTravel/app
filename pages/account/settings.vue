<template lang="pug">
div(class='settings')
  header(class='settings__header')
    span Cancel
    span Settings
    a(@click='submitUserForm') Save

  UserAvatar(
    :author='currentUser.username'
    :photoURL='currentUser.photoURL'
  )
  client-only
    image-uploader(
      @input='changeProfilePhoto'
    )

  form(
    @submit.stop.prevent=''
  )
    h3 Edit Profile
    BaseInput(
      label='First Name'
      v-model='firstName'
    )
    BaseInput(
      label='Last Name'
      v-model='lastName'
    )
    BaseInput(
      label='Username'
      v-model='username'
    )
    BaseTextarea(
      label='Bio'
      v-model='bio'
    )

    h3 Private Information
    BaseInput(
      label='Gender'
      v-model='gender'
    )
    BaseInput(
      label='Date of Birth'
      v-model='dateOfBirth'
    )
    
    h3 Security
    BaseInput(
      label='Email'
      v-model='email'
    )
  h3 Logins
  a(
    @click='signOut'
  ) Log Out {{ `${currentUser.firstName} ${currentUser.lastName}` }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import UserAvatar from '~/components/elements/UserAvatar.vue'

export default {
  name: 'AuthSettings',
  components: {
    UserAvatar
  },
  props: {},
  data() {
    return {
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      bio: '',
      gender: '',
      dateOfBirth: ''
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'users/currentUser'
    })
  },
  watch: {
    currentUser() {
      this.initUserData()
    }
  },
  methods: {
    initUserData() {
      if (this.currentUser) {
        this.username = this.currentUser.username
        this.email = this.currentUser.email
        this.firstName = this.currentUser.firstName
        this.lastName = this.currentUser.lastName
        this.bio = this.currentUser.bio
      }
    },

    async changeProfilePhoto(image) {
      console.log('changeProfilePhoto')
      console.log(image)
      await this.uploadProfileImage({ image })
    },

    async submitUserForm() {
      console.log('submitUserForm')
      await this.updateUserInformation({
        username: this.username,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        bio: this.bio
      })
    },

    ...mapActions({
      uploadProfileImage: 'account/uploadProfileImage',
      updateUserInformation: 'account/updateUserInformation',
      signOut: 'auth/signOut'
    })
  },
  beforeMount() {
    this.initUserData()
  }
}
</script>

<style lang="sass" scoped>
.settings
  padding: 0 $unit*2

  &__header
    position: sticky
    top: $navigation-bar
    background: $white

  & h3
    font-weight: $fw-bold
    margin: $unit*2 0
</style>
