<template lang="pug">
div(class='product-sections')
  div(
    v-if='descriptionHtml'
    class='product-sections__description'
  )
    h3(class='product-sections__description-title') Description
    div(
      v-html='descriptionHtml'
      class='product-sections__description-html'
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
    v-for='(section, index) in sections'
    :key='section + index'
    :drawerId='section.id'
  )
    template(v-slot:header)
      div(class='product-sections__drawer-header') {{ section.label }}
    template(v-slot:default)
      div(
        v-html='section.html'
        class='product-sections__drawer-content'
      )
</template>

<script>
import { mapMutations } from 'vuex'
import OverlayDrawer from '~/components/slots/OverlayDrawer.vue'
import presetsFaqData from '~/data/pages/presets-faq.json'
import digitalGoodsPolicyData from '~/data/pages/digital-goods-policy.json'

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
          id: presetsFaqData.title,
          label: presetsFaqData.title,
          html: presetsFaqData.bodyHtml
        },
        {
          id: digitalGoodsPolicyData.title,
          label: digitalGoodsPolicyData.title,
          html: digitalGoodsPolicyData.bodyHtml
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

  &__description
    padding: 0 $unit

    &-title
      display: none
      font-weight: $fw-bold
      margin-bottom: $unit

  &__button
    display: flex
    width: 100%
    padding: $unit*3 $unit
    box-shadow: inset 0 1px 0 0 #E5E5E5
    background: transparent
    justify-content: space-between
    align-items: center

    &--readMore
      padding: initial
      margin-top: $unit*3
      box-shadow: initial
      color: $blue
      display: none
      &:hover
        text-decoration: underline

    &-label
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis

    &-icon
      margin-left: $unit

  &__description
    margin-bottom: $unit*3

  &__drawer-header
    @extend %flex--row-center
    font-weight: $fw-bold

  &__drawer-content
    margin: $unit*2
    max-width: 480px
</style>
