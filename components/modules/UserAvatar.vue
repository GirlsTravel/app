<template lang="pug">
div(class='user-avatar')
  UserProfilePhoto(
    :photoURL='photoURL'
    class='user-avatar__image'
  )
  div(class='user-avatar__info')
    div(class='') {{ author }}
    p(class='') {{ createdAtFromNow }}
</template>

<script>
import UserProfilePhoto from '~/components/elements/UserProfilePhoto.vue'

export default {
  components: {
    UserProfilePhoto
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
    createdAtFromNow() {
      if (!this.createdAt) return ''
      const date = new Date(this.createdAt.seconds * 1000)
      return this.$moment(date).fromNow()
    }
  }
}
</script>

<style lang="sass" scoped>
.user-avatar
  display: flex
  align-items: center
  // width: $unit*20

  &__image
    background: $pri-cl
    border-radius: 50%
    width: $unit*5
    height: $unit*5
    overflow: hidden
    background-position: center
    background-size: contain

  &__info
    display: flex
    flex-direction: column
    margin-left: $unit

    & a
      font-weight: $fw-bold
      // color: $blue

    & p
      color: $grey
      // font-size: 12px

    & p, & a
      // max-width: $unit*15
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden
</style>
