<template lang="pug">
div(class='about-us')
  PageContent(
    :title='page.fields.title'
    :bodyHtml='html'
    :heroImageURL='page.fields.heroImage.fields.file.url'
    class='about-us__page-content'
  )
</template>

<script>
import PageContent from '~/components/modules/PageContent.vue'
import { contentful, documentToHtmlString } from '~/services/contentful'

export default {
  layout: 'custom',
  components: {
    PageContent
  },
  async asyncData({ params }) {
    try {
      const data = await contentful.getEntries({
        content_type: 'page',
        'fields.handle': params.handle
      })
      const html = documentToHtmlString(data.items[0].fields.bodyHtml)
      console.log('data: ', data)
      return {
        page: data.items[0],
        html
      }
    } catch (e) {
      console.error('contentful error: ', e)
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.about-us

.rich-text__bold
  font-weight: $fw-bold
</style>
