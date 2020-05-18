<template lang="pug">
div(class='index')
  //- Hero
  ContentTile(
    :headline='tiles.hero.headline'
    :text='tiles.hero.text'
    :backgroundImageURL='tiles.hero.backgroundImageURL'
    :primaryLinkLabel='tiles.hero.primaryLinkLabel'
    :primaryLink='tiles.hero.primaryLink'
    class='index__hero'
  )

  //- Articles
  aside(class='index__collection')
    ContentHeader(
      title='Trending Articles'
      text='Learn from your peers. Explore activity recommendations, travel tips and tricks.'
      :linkTo='{ name: "articles" }'
      linkText='See more'
      class='index__collection-header'
    )
    ul(class='index__list')
      li(
        v-for='(post, index) in Object.values(sortedArticles).filter((p, i) => i < 4)'
        :key='post + index'
        class='index__list-item'
      )
        ArticleSummary(
          :id='post.id'
          :title='post.title'
          :handle='post.handle'
          :body='post.body'
          :heroImageURL='post.heroImageURL'
          :author='post.username'
          :photoURL='post.photoURL'
          :likes='post.likes'
          :comments='post.comments'
          :createdAt='post.createdAt'
          class='index__list-card'
        )
    nuxt-link(
      :to='{ name: "articles" }'
      class='index__collection-main-link'
    ) Browse Articles

  //- Forum
  aside(class='index__collection')
    ContentHeader(
      title='Popular Questions'
      text='Have a question? Ask a community of female travelers who\'ve been there.'
      :linkTo='{ name: "questions" }'
      linkText='See more'
      class='index__collection-header'
    )
    ul(class='index__list')
      li(
        v-for='(post, index) in Object.values(sortedQuestions).filter((p, i) => i < 4)'
        :key='post + index'
        class='index__list-item'
      )
        QuestionSummary(
          :id='post.id'
          :title='post.title'
          :titleSlug='post.titleSlug'
          :body='post.body'
          :author='post.username'
          :photoURL='post.photoURL'
          :likes='post.likes'
          :comments='post.comments'
          :createdAt='post.createdAt'
          class='index__list-card'
        )
    nuxt-link(
      :to='{ name: "questions" }'
      class='index__collection-main-link'
    ) Browse Questions

  //- Questions
  ContentTile(
    :headline='tiles.social.headline'
    :text='tiles.social.text'
    :backgroundImageURL='tiles.social.backgroundImageURL'
    :primaryLinkLabel='tiles.social.primaryLinkLabel'
    :secondaryLinkLabel='tiles.social.secondaryLinkLabel'
    :primaryLink='tiles.social.primaryLink'
    :secondaryLink='tiles.social.secondaryLink'
    class='index__social'
  )

  //- Articles
  ContentTile(
    :headline='tiles.contentCreator.headline'
    :text='tiles.contentCreator.text'
    :backgroundImageURL='tiles.contentCreator.backgroundImageURL'
    :primaryLinkLabel='tiles.contentCreator.primaryLinkLabel'
    :secondaryLinkLabel='tiles.contentCreator.secondaryLinkLabel'
    :primaryLink='tiles.contentCreator.primaryLink'
    :secondaryLink='tiles.contentCreator.secondaryLink'
    class='index__content-creator'
  )

  //- Presets
  ContentTile(
    :headline='tiles.feature.headline'
    :text='tiles.feature.text'
    :backgroundImageURL='tiles.feature.backgroundImageURL'
    :primaryLinkLabel='tiles.feature.primaryLinkLabel'
    :secondaryLinkLabel='tiles.feature.secondaryLinkLabel'
    :primaryLink='tiles.feature.primaryLink'
    :secondaryLink='tiles.feature.secondaryLink'
    class='index__feature'
  )

  //- About us
  ContentTile(
    :headline='tiles.about.headline'
    :text='tiles.about.text'
    :backgroundImageURL='tiles.about.backgroundImageURL'
    :primaryLinkLabel='tiles.about.primaryLinkLabel'
    :secondaryLinkLabel='tiles.about.secondaryLinkLabel'
    :primaryLink='tiles.about.primaryLink'
    :secondaryLink='tiles.about.secondaryLink'
    class='index__about'
  )
</template>

<script>
import { mapState } from 'vuex'
import contentData from '~/data/index/index.json'
import ArticleSummary from '~/components/modules/ArticleSummary.vue'
import ContentHeader from '~/components/modules/ContentHeader.vue'
import ContentTile from '~/components/modules/ContentTile.vue'
import QuestionSummary from '~/components/modules/PostSummary.vue'

export default {
  layout: 'custom',
  components: {
    ArticleSummary,
    ContentHeader,
    ContentTile,
    QuestionSummary
  },
  async fetch({ store }) {
    await Promise.all([
      store.dispatch('articles/init'),
      store.dispatch('posts/init')
    ])
  },
  data() {
    return {
      tiles: contentData
    }
  },
  computed: {
    sortedArticles() {
      return Object.values(this.articles).sort(
        (a, b) => b.createdAt.seconds - a.createdAt.seconds
      )
    },

    sortedQuestions() {
      return Object.values(this.questions).sort(
        (a, b) => b.createdAt.seconds - a.createdAt.seconds
      )
    },

    ...mapState({
      articles: (state) => state.articles.posts,
      questions: (state) => state.posts.posts
    })
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.index
  display: grid
  grid-gap: $unit
  grid-auto-rows: minmax(496px, auto)
  grid-template-columns: 1fr
  background: $white
  +mq-s
    grid-auto-rows: initial
    grid-template-rows: repeat(3, minmax(592px, auto)) repeat(2, 496px)
    grid-template-columns: 1fr 1fr
  +mq-m
    grid-template-rows: repeat(3, minmax(680px, auto)) repeat(2, 592px)

  &__hero,
  &__collection,
  &__questions
    grid-column: 1 / -1

  &__collection
    justify-self: center
    display: grid
    grid-gap: $unit*4
    padding: $unit*10 $unit*2
    max-width: 1400px
    +mq-s
      // width: 90%
      width: 75%
    +mq-m
      width: 80%

    &-main-link
      justify-self: center
      padding: $unit*2 $unit*4
      border-radius: $unit/2
      text-align: center
      background: $blue
      color: $white
      max-width: $unit*50
      width: 100%

  &__list
    display: grid
    grid-gap: $unit*4
    grid-template-columns: 1fr
    height: min-content
    +mq-m
      grid-template-columns: 1fr 1fr

    &-item
      box-shadow: 0 $unit $unit*2 rgba(34, 34, 34, 0.05)
      border-radius: $unit
      // background-color: $pri-cl

    &-card
      height: 100%
</style>
