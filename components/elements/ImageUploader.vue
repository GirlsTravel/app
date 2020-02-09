<template lang="pug">
div(class='image-uploader')
  button(
    @click='submit'
    class='image-uploader__button'
  ) Change Profile Photo

  input(
    @change='detectFiles($event.target.files)'
    ref='fileInput'
    type='file'
    accept='image/*'
    class='image-uploader__input'
  )
</template>

<script>
import { readAsDataURL } from '~/utilities/file-reader'

export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    submit() {
      const fileInput = this.$refs.fileInput
      fileInput.click()
    },

    detectFiles(fileList) {
      Array.from(Array(fileList.length).keys()).forEach((x) =>
        this.upload(fileList[x])
      )
    },

    async upload(file) {
      const data = await readAsDataURL(file)
      this.$emit('uploadImage', data)
    }
  }
}
</script>

<style lang="sass" scoped>
.image-uploader

  &__button
    color: $blue
    text-decoration: underline

  &__input
    display: none
</style>
