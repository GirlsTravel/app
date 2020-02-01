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
  nuxt-link(
    :to='{ name: "posts-id", params: { id } }'
  ) Cancel
  //- RichTextEditor
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
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
  async asyncData({ store, params }) {
    const { id } = params
    const question = await store.dispatch('posts/fetchPost', { id })
    return { id, question }
  },
  beforeMount() {
    if (!this.question) return
    const { title, body } = this.question
    this.title = title
    this.body = body
  },
  methods: {
    async handleSubmit() {
      const { questionId } = await this.updateQuestion({
        id: this.id,
        title: this.title,
        body: this.body
      })
      await this.DELETE_QUESTION({ id: this.id })
      this.$router.push({ name: 'posts-id', params: { id: questionId } })
    },

    ...mapMutations({
      DELETE_QUESTION: 'posts/DELETE_QUESTION'
    }),

    ...mapActions({
      updateQuestion: 'posts/updateQuestion'
    })
  }
}
</script>

<style lang="sass" scoped>
.test
  background: white
</style>
