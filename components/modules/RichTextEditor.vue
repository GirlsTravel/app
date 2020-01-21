<template lang="pug">
section(class="container")
  div(
    class='quill-editor'
    v-model='content'
    v-quill
  )
</template>

<script>
export default {
  data() {
    return { content: '<p>Write your question here...</p>' }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.container


.quill-editor
  min-height: 200px
  max-height: 400px
  overflow-y: auto
</style>
