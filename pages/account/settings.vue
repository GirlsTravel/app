<template lang="pug">
div(class='')
  //- ImageUploader
  UserAvatar(
    author='Juma Stevens'
    :photoURL='currentUser.photoURL'
  )
  client-only
    image-uploader(
      @input='onSubmit'
    )
  form(
    @submit.stop.prevent='blur'
  )
    BaseInput(
      label='Username'
      v-model='username'
    )
    BaseInput(
      label='Email'
      v-model='email'
    )
    BaseInput(
      label='First Name'
      v-model='firstName'
    )
    BaseInput(
      label='Last Name'
      v-model='lastName'
    )
    BaseButton(
      text='Save'
    )
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
      lastName: ''
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'users/currentUser'
    })
  },
  methods: {
    async onSubmit(image) {
      console.log('submitted')
      console.log(image)
      await this.uploadProfileImage({ image })
    },

    ...mapActions({
      uploadProfileImage: 'account/uploadProfileImage'
    })
  }
}
</script>

<style lang="sass" scoped>
.test
  background: white
</style>
