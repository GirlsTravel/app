<template lang="pug">
div(class='post')
  UserAvatar(
    :author='author'
    class='post__author'
  )
  p(class='post__body') {{ body }}

  //- PostMetrics(
  //-   class='post__metrics'
  //- )
  p(class='m') Like Reply
  a Show replies
  BaseInput
</template>

<script>
import UserAvatar from '~/components/elements/UserAvatar.vue'
import PostMetrics from '~/components/elements/PostMetrics.vue'

export default {
  components: {
    UserAvatar,
    PostMetrics
  },
  props: {
    body: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
<style lang="sass" scoped>
.post
  display: grid
  grid-gap: $unit*2
  // background: $pri-cl
  // border-top: 4px solid $pri-cl
  border-bottom: 4px solid $pri-cl
  // margin: $unit*2
  padding: $unit*2

  &__author

  &__body

  &__metrics
    justify-self: start

  & .m
    color: $dark

  & a
    // text-align: center
    // margin: 0 auto 0 0
    // border-radius: 8px
    // background: $pri-cl
    // padding: 8px 16px
</style>
