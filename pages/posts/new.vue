<template lang="pug">
div(class='')
  BaseInput(
    v-model='title'
    label='Title'
  )
  BaseTextarea(
    v-model='body'
    label='Message'
  )
  BaseButton()
  RichTextEditor
</template>

<script>
import RichTextEditor from '~/components/modules/RichTextEditor.vue'

export default {
  components: {
    RichTextEditor
  },
  props: {},
  data() {
    return {
      title: '',
      body: ''
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.test
  background: white
</style>
