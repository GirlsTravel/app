<template lang="pug">
form(
  @submit.stop.prevent='handleSearch'
  class='search-form'
)
  IconSearch(class='search-form__icon')
  input(
    v-model.trim='search'
    :placeholder='placeholder'
    ref='search'
    class='search-form__input'
  )
  a(
    v-show='search.length'
    @click='clearSearch'
    class='search-form__clear'
  )
    IconCancel(class='search-form__icon')
</template>

<script>
import IconSearch from '~/assets/svg/icon-search.svg'
import IconCancel from '~/assets/svg/icon-cancel.svg'

export default {
  components: {
    IconSearch,
    IconCancel
  },
  props: {
    placeholder: {
      type: String,
      default: 'Search'
    }
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {},
  watch: {},
  methods: {
    clearSearch() {
      this.search = ''
    },

    handleSearch() {
      this.$emit('handleSearch', this.search)
    },

    blur() {
      if (!this.search) return
      this.$refs.search.blur()
      this.clearSearch()
    }
  }
}
</script>

<style lang="sass" scoped>
.search-form
  display: grid
  grid-template-rows: $unit*5
  grid-template-columns: 1fr $unit*3
  grid-gap: 0 $unit
  align-items: center
  background: rgba(232, 234, 237, 1)
  border-radius: $unit*3
  overflow: hidden
  +mq-xs
    grid-template-columns: 1fr $unit*4

  &__icon
    width: $unit*3
    height: $unit*3
    grid-row: 1 / 2
    grid-column: 1 / 2
    margin-left: $unit*2
    pointer-events: none

  &__clear
    grid-row: 1 / 2
    grid-column: 2 / 3

    & .search-form__icon
      width: 12px
      height: 12px
      padding: 2px
      margin: 0
      border-radius: 50%
      background: $dark
      fill: rgba(239, 239, 239, 1)

  &__input
    width: 100%
    grid-row: 1 / 2
    grid-column: 1 / 2
    padding-left: $unit*6
    background: transparent
</style>
