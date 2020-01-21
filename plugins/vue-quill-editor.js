import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor/dist/ssr'

Vue.use(VueQuillEditor, {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block']
    ]
  }
})
