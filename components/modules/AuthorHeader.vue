<template lang="pug">
div(class='author-header')
  //- nuxt-link(
  //-   :to='{ name: "users-id", params: { id: author } }'
  //- )
  div
    UserAvatar(
      :author='author'
      :photoURL='photoURL'
      :createdAt='createdAt'
    )

  DropdownSlot(
    v-if='isAuth'
    class='author-header__dropdown'
  )
    template(v-slot:button)
      IconMoreVertical(class='author-header__dropdown-button')
    template(v-slot:content)
      button(
        @click='$emit("editClicked")'
        class='author-header__dropdown-option'
      )
        IconEdit(class='author-header__dropdown-option-icon')
        span(class='author-header__dropdown-option-text') Edit
      button(
        @click='$emit("deleteClicked")'
        class='author-header__dropdown-option'
      )
        IconDelete(class='author-header__dropdown-option-icon')
        span(class='author-header__dropdown-option-text') Delete
</template>

<script>
import { mapGetters } from 'vuex'
import UserAvatar from '~/components/modules/UserAvatar.vue'
import DropdownSlot from '~/components/slots/Dropdown.vue'
import IconSlot from '~/components/slots/Icon.vue'
import IconMoreVertical from '~/assets/svg/more-vertical.svg'
import IconDelete from '~/assets/svg/trash.svg'
import IconEdit from '~/assets/svg/edit.svg'

export default {
  components: {
    UserAvatar,
    DropdownSlot,
    IconSlot,
    IconMoreVertical,
    IconDelete,
    IconEdit
  },
  props: {
    author: {
      type: String,
      required: true
    },
    photoURL: {
      type: String,
      required: true
    },
    createdAt: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      isAuth: 'auth/isAuthUser'
    })
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.author-header
  display: flex
  align-items: center

  &__image

  &__dropdown
    margin-left: auto

    &-button
      width: $unit*3
      fill: $grey

    &-option
      display: flex
      align-items: center
      padding: $unit $unit*2

      &:hover
        background: $pri-cl

      &-icon
        width: $unit*2
        fill: $dark

      &-text
        margin-left: $unit
        color: $dark
</style>
