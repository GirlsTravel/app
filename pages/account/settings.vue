<template lang="pug">
div(class='settings')
  ViewHeader(
    title='Settings'
    primaryActionLabel='Save'
    secondaryActionLabel='Close'
    @primaryActionClick='submitUserForm'
    @secondaryActionClick='$router.push({ name: "index" })'
  )

  section(
    class='settings__section'
  )
    UserAvatar(
      :photoURL='currentUser.photoURL'
      class='settings__profile-photo'
    )
    ImageUploader(
      @uploadImage='changeProfilePhoto'
    )

  form(
    @submit.stop.prevent=''
    class='settings__form'
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
    //- BaseTextarea(
    //-   label='Bio'
    //-   v-model='bio'
    //- )

    //- h3 Private Information
    //- BaseInput(
    //-   label='Gender'
    //-   v-model='gender'
    //- )
    //- BaseInput(
    //-   label='Date of Birth'
    //-   v-model='dateOfBirth'
    //- )
    //-
    //- h3 Security
    //- BaseInput(
    //-   label='Email'
    //-   v-model='email'
    //- )

  section(
    class='settings__section'
  )
    h3 Logins
    a(
      @click='signOut'
      class='settings__logout-link'
    ) Log Out
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ViewHeader from '~/components/modules/ViewHeader.vue'
import UserAvatar from '~/components/elements/UserProfilePhoto.vue'
import ImageUploader from '~/components/elements/ImageUploader.vue'

export default {
  name: 'AuthSettings',
  middleware: 'isAuth',
  components: {
    ViewHeader,
    UserAvatar,
    ImageUploader
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
  beforeMount() {
    this.initUserData()
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
      await this.uploadProfileImage({ image })
    },

    async submitUserForm() {
      try {
        this.$toast.show('Saving your information, please wait...')
        console.log('submitUserForm')
        await this.updateUserInformation({
          username: this.username,
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          bio: this.bio
        })
        this.$toast.show('Your information is now saved.')
      } catch (e) {
        this.$toast.show('Oops! Something went wrong. Try again.')
      }
    },

    ...mapActions({
      uploadProfileImage: 'account/uploadProfileImage',
      updateUserInformation: 'account/updateUserInformation',
      signOut: 'auth/signOut'
    })
  }
}
</script>

<style lang="sass" scoped>
.settings
  display: grid
  grid-gap: $unit*4
  grid-auto-rows: min-content
  padding: 0 $unit*2
  background: $white

  &__header
    position: sticky
    top: $navigation-bar
    display: grid
    grid-template-columns: $unit*8 1fr $unit*8
    justify-items: center
    align-items: center
    height: $unit*7
    background: $white
    background: rgba(255, 255, 255, 0.97)

    &-title
      font-weight: $fw-bold

    &-save
      padding: $unit
      background: $pri-cl
      color: $blue
      border-radius: $unit/2

  & h3
    font-weight: $fw-bold
    // margin: $unit*2 0

  &__section
    display: grid
    grid-gap: $unit*2

    &:first-of-type
      justify-items: center

  &__profile-photo
    width: $unit*12
    height: $unit*12

  &__form
    display: grid
    grid-gap: $unit*2

  &__logout-link
    color: $blue
    text-decoration: underline
</style>
