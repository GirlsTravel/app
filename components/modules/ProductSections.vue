<template lang="pug">
div(class='product-sections')
  div(class='product-sections__description')
    h3 Description
    div(
      v-html='descriptionHtml'
    )
    button(
      @click='openDrawer("description")'
      class='product-sections__button product-sections__button--readMore'
    )
      span(class='product-sections__button-label') Read more
  div
    button(
      v-for='(section) in sections'
      @click='openDrawer(section.id)'
      class='product-sections__button'
    )
      span(class='product-sections__button-label') {{ section.label }}
      span(class='product-sections__button-icon') +

  OverlayDrawer(
    drawerId='description'
  )
    template(v-slot:header)
      div description
    template(v-slot:default)
      div(
        v-html='descriptionHtml'
      )

  OverlayDrawer(
    drawerId='shippingReturns'
  )
    template(v-slot:header)
      div shippingReturns
    template(v-slot:default)
      div hello world

  OverlayDrawer(
    drawerId='reviews'
  )
    template(v-slot:header)
      div reviews
    template(v-slot:default)
      div hello world
</template>

<script>
import { mapMutations } from 'vuex'
import OverlayDrawer from '~/components/slots/OverlayDrawer.vue'

export default {
  components: {
    OverlayDrawer
  },
  props: {
    descriptionHtml: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sections: [
        {
          id: 'shippingReturns',
          label: 'Free Shipping & Returns'
        },
        {
          id: 'reviews',
          label: 'Reviews'
        }
      ]
    }
  },
  computed: {},
  methods: {
    ...mapMutations({
      openDrawer: 'app/OPEN_DRAWER'
    })
  }
}
</script>

<style lang="sass" scoped>
.product-sections
  background: white

  &__description

  &__button
    display: flex
    width: 100%
    padding: $unit*3 $unit
    box-shadow: inset 0 1px 0 0 #E5E5E5
    background: transparent
    justify-content: space-between
    align-items: center

    &--readMore
      padding-left: initial
      box-shadow: initial

    &-label
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis

    &-icon
      margin-left: $unit
</style>
