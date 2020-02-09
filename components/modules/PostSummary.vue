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
  //- button(
  //-   @click='$emit("commentClicked")'
  //-   class='metrics__button'
  //- )
  //-   IconComment(class='metrics__icon')
  //-   span(class='metrics__text') {{ comments }}
  PostMetrics(
    :likes='likes'
    :dislikes='dislikes'
    :comments='comments'
    class='post__metrics'
  )
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
  grid-gap: $unit
  padding: $unit*2

  &__title
    font-weight: $fw-bold
    font-size: 18px
    margin-bottom: $unit

  &__body

  &__metrics
    justify-self: start
</style>
