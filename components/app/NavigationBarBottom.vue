<template lang="pug">
div(class='navigation-bar')
  nuxt-link(
    v-for='(link, index) in links'
    :key='link + index'
    :to='link.to'
    class='navigation-bar__link'
  )
    span(class='material-icons-outlined') {{ link.icon }}
    span(class='navigation-bar__text') {{ link.text }}
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      links: [
        {
          to: {
            name: 'shop-products-handle',
            params: { handle: 'bali-collection' }
          },
          icon: 'storefront',
          text: 'Shop'
        },
        {
          to: { name: 'articles' },
          icon: 'library_books',
          text: 'Articles'
        },
        {
          to: { name: 'questions' },
          icon: 'forum',
          text: 'Forum'
        }
      ]
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="sass" scoped>
.navigation-bar
  position: sticky
  bottom: 0
  left: 0
  z-index: 99
  width: 100%
  height: $navigation-bar
  background: rgba(255, 255, 255, 0.98)
  display: grid
  grid-auto-flow: column

  &__link
    @extend %flex--column-center
    height: inherit

    &.nuxt-link-active,
    &:hover
      color: $blue

  &__text
    font-size: 12px
</style>
