<template lang="pug">
OverlayDrawer(
  drawerId='imageFinder'
)
  template(v-slot:header)
    div(class='imageFinder__header')
      SearchForm(
        @handleSearch='handleSearch'
        placeholder='Search image library'
        class='imageFinder__search-form'
      )
      button(
        @click='closeDrawer'
        class='imageFinder__close'
      ) Close
  template(v-slot:default)
    ul(class='imageFinder__list')
      li(
        v-for='(result, index) in results'
        :key='result + index'
        class='imageFinder__list-item'
      )
        button(
          v-lazy:background-image='result.image'
          @click='handleImageSelection(result)'
          class='imageFinder__list-button'
        )
</template>

<script>
import { mapMutations } from 'vuex'
import { functions } from '~/plugins/firebase'
import OverlayDrawer from '~/components/slots/OverlayDrawer.vue'
import SearchForm from '~/components/modules/SearchForm.vue'

export default {
  components: {
    SearchForm,
    OverlayDrawer
  },
  props: {},
  data() {
    return {
      results: []
    }
  },
  computed: {},
  created() {
    this.handleSearch('nature')
  },
  methods: {
    async handleSearch(search) {
      try {
        console.log('search: ', search)
        const searchImage = functions.httpsCallable('https-imageFinder')
        const { data } = await searchImage({ query: search })
        if (!data || !data.results) return

        this.results = data.results.map((result) => ({
          color: result.color,
          alt: result.alt_description,
          image: result.urls.small
        }))
      } catch (e) {
        console.error('error: ', e)
      }
    },

    handleImageSelection(result) {
      this.$emit('resultSelected', result)
      this.closeDrawer()
    },

    ...mapMutations({
      closeDrawer: 'app/CLOSE_DRAWER'
    })
  }
}
</script>

<style lang="sass" scoped>
.imageFinder
  background: white

  &__header
    display: grid
    grid-template-columns: 1fr auto
    grid-auto-flow: column
    width: 100%
    padding: $unit 0

  &__search-form
    margin-left: $unit*2

  &__close
    padding: 0 $unit*2

  &__list
    display: grid
    grid-template-columns: repeat(1, 1fr)
    grid-gap: $unit*2
    +mq-s
      grid-template-columns: repeat(2, 1fr)
    +mq-m
      grid-template-columns: repeat(3, 1fr)


    &-item

    &-button
      width: 100%
      height: $unit*20
      min-height: $unit*20
      height: 25vw
      background-position: center
      background-size: cover
      background-repeat: no-repeat
      background-color: $pri-cl
</style>
