<template lang="pug">
div(class='')
  ImageUploader
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
import ImageUploader from '~/components/modules/ImageUploader.vue'

export default {
  name: 'AuthSettings',
  components: {
    ImageUploader
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
  computed: {},
  methods: {
    onSubmit() {
      console.log('submitted')
    }
  }
}
</script>

<style lang="sass" scoped>
.test
  background: white
</style>
