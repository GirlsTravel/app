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
  BaseButton(@click='handleSubmit')
  RichTextEditor
</template>

<script>
import { mapActions } from 'vuex'
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
  methods: {
    async handleSubmit() {
      const { questionId } = await this.createQuestion({
        title: this.title,
        body: this.body
      })
      this.$router.push({ name: 'posts-id', params: { id: questionId } })
    },
    ...mapActions({
      createQuestion: 'posts/createQuestion'
    })
  }
}
</script>

<style lang="sass" scoped>
.test
  background: white
</style>
