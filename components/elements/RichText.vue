<template lang="pug">
VRuntimeTemplate(:template='template')
</template>

<script>
import VRuntimeTemplate from 'v-runtime-template'
import ImageElement from '~/components/elements/Image.vue'

export default {
  components: {
    VRuntimeTemplate,
    ImageElement
  },
  props: {
    html: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      template: `<div class='rich-text'>${this.html}</div>`
    }
  }
}
</script>
