<template lang="pug">
div(class='post')
  nuxt-link(
    :to='{ name: "posts-id", params: { id } }'
    class='post__title'
  ) {{ title }}
  //- div(class='post__meta')
  UserProfilePhoto(
    :author='author'
    :photoURL='photoURL'
    :createdAt='createdAt'
    class='post__profile-image'
  )
    //- //- p {{ author }}
    //- span &nbsp;{{ createdAtFromNow }} •&nbsp;
    //- span {{ comments }} answers
  button(
    @click='$emit("commentClicked")'
    class='metrics__button'
  )
    IconComment(class='metrics__icon')
    span(class='metrics__text') {{ comments }}
  //- PostMetrics(
  //-   :likes='likes'
  //-   :dislikes='dislikes'
  //-   :comments='comments'
  //-   class='post__metrics'
  //- )
</template>

<script>
import UserProfilePhoto from '~/components/modules/UserAvatar.vue'
import PostMetrics from '~/components/elements/PostMetrics.vue'
import IconComment from '~/assets/svg/comment.svg'

export default {
  components: {
    UserProfilePhoto,
    PostMetrics,
    IconComment
  },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    photoURL: {
      type: String,
      required: true
    },
    likes: {
      type: Number,
      required: true
    },
    dislikes: {
      type: Number,
      required: true
    },
    comments: {
      type: Number,
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
  },
  methods: {}
}
</script>
<style lang="sass" scoped>
.post
  display: grid
  grid-template-columns: auto 1fr
  grid-gap: $unit/2
  // background: $pri-cl
  border-top: 2px solid $pri-cl
  border-bottom: 2px solid $pri-cl
  // margin: $unit*2
  padding: $unit*2

  &__title
    font-weight: $fw-bold
    font-size: 18px
    grid-row: 1 / 2
    grid-column: 1 / -1
    // color: $blue

  &__body
    grid-row: 2 / 3
    grid-column: 1 / -1

  &__meta
    grid-row: 3 / 4
    grid-column: 1 / 2
    // display: flex
    // align-items: center
    //
    // & span
    //   color: $grey
    //
    // & p:first
    //   color: $black

  // &__profile-image
  //   width: $unit*5
  //   height: $unit*5

  &__metrics
    grid-row: 4 / 5
    grid-column: 1 / -1
    justify-self: start
    +mq-xs
      grid-row: 3 / 4
      grid-column: 2 / 3
      align-self: end
      justify-self: end

.metrics

  &__button
    @extend %flex--row-center
    background: $pri-cl
    padding: $unit/2 $unit*1.5
    border-radius: $unit*2
    height: min-content
    align-self: end
    justify-self: start
    margin-left: $unit*2

    // border: 2px solid $pri-cl

    &.active
      background: $blue

  &__icon
    width: $unit*2
    fill: $dark

  &__text
    margin-left: $unit
    color: $dark
</style>
