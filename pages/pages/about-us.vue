<template lang="pug">
div(class='about-us')
  PageContent(
    :title='aboutUsData.title'
    :bodyHtml='aboutUsData.bodyHtml'
    :heroImageURL='aboutUsData.heroImageURL'
    class='about-us__page-content'
  )
</template>

<script>
import aboutUsData from '~/data/pages/about-us.json'
import PageContent from '~/components/modules/PageContent.vue'

export default {
  layout: 'custom',
  components: {
    PageContent
  },
  async fetch({ store }) {},
  data() {
    return {
      aboutUsData
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.about-us
</style>
