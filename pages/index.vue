<template lang="pug">
div(class='index')
  ContentTile(
    :headline='tiles.hero.headline'
    :text='tiles.hero.text'
    :backgroundImageURL='tiles.hero.backgroundImageURL'
    :primaryLinkLabel='tiles.hero.primaryLinkLabel'
    :secondaryLinkLabel='tiles.hero.secondaryLinkLabel'
    :primaryLink='tiles.hero.primaryLink'
    class='index__hero'
  )
  //- div(class='index__hero')
  //-   h1 Experience more on your next adventure
  //-   p We're here to help. Connect with a female community of world travels. Explore together. Never be alone again.
  //-   form
  //-     BaseInput
  //-     BaseButton
  nuxt-link(
    :to='{ name: "articles" }'
    class='index__articles'
  )
  nuxt-link(
    :to='{ name: "questions" }'
    class='index__questions'
  )
  ContentTile(
    :headline='tiles.social.headline'
    :text='tiles.social.text'
    :backgroundImageURL='tiles.social.backgroundImageURL'
    :primaryLinkLabel='tiles.social.primaryLinkLabel'
    :secondaryLinkLabel='tiles.social.secondaryLinkLabel'
    :primaryLink='tiles.social.primaryLink'
    class='index__social'
  )
  ContentTile(
    :headline='tiles.contentCreator.headline'
    :text='tiles.contentCreator.text'
    :backgroundImageURL='tiles.contentCreator.backgroundImageURL'
    :primaryLinkLabel='tiles.contentCreator.primaryLinkLabel'
    :secondaryLinkLabel='tiles.contentCreator.secondaryLinkLabel'
    :primaryLink='tiles.contentCreator.primaryLink'
    class='index__content-creator'
  )
  ContentTile(
    :headline='tiles.feature.headline'
    :text='tiles.feature.text'
    :backgroundImageURL='tiles.feature.backgroundImageURL'
    :primaryLinkLabel='tiles.feature.primaryLinkLabel'
    :secondaryLinkLabel='tiles.feature.secondaryLinkLabel'
    :primaryLink='tiles.feature.primaryLink'
    class='index__feature'
  )
  ContentTile(
    :headline='tiles.about.headline'
    :text='tiles.about.text'
    :backgroundImageURL='tiles.about.backgroundImageURL'
    :primaryLinkLabel='tiles.about.primaryLinkLabel'
    :secondaryLinkLabel='tiles.about.secondaryLinkLabel'
    :primaryLink='tiles.about.primaryLink'
    class='index__about'
  )
</template>

<script>
import ContentTile from '~/components/modules/ContentTile.vue'

export default {
  layout: 'custom',
  components: {
    ContentTile
  },
  data() {
    return {}
  },
  computed: {
    tiles() {
      return {
        hero: {
          headline: 'Experience more on your next adventure',
          text: `
            We're here to help. Connect with a female community of world travels. Explore together. Never be alone again.
          `,
          backgroundImageURL: `https://images.unsplash.com/photo-1446160657592-4782fb76fb99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80`,
          primaryLinkLabel: 'Get Started',
          secondaryLinkLabel: 'Learn more',
          primaryLink: { name: 'articles' }
        },

        feature: {
          headline: 'Featured Profile',
          text: `
            We're here to help. Connect with a female community of world travels. Explore together. Never be alone again.
          `,
          backgroundImageURL: `https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
          primaryLinkLabel: 'Visit profile',
          primaryLink: { name: 'articles' }
        },

        contentCreator: {
          headline: 'Write Here',
          text: `
            We're here to help. Connect with a female community of world travels. Explore together. Never be alone again.
          `,
          backgroundImageURL: `https://images.unsplash.com/photo-1504542227056-9178533a9175?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80`,
          primaryLinkLabel: 'Get started',
          secondaryLinkLabel: 'Learn more',
          primaryLink: { name: 'articles' }
        },

        social: {
          headline: 'Ask Away',
          text: `
            We're here to help. Connect with a female community of world travels. Explore together. Never be alone again.
          `,
          backgroundImageURL: `https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
          primaryLinkLabel: 'Ask question',
          secondaryLinkLabel: 'See all questions',
          primaryLink: { name: 'articles' }
        },

        about: {
          headline: 'Our Mission',
          text: `
            We're here to help. Connect with a female community of world travels. Explore together. Never be alone again.
          `,
          backgroundImageURL: `https://images.unsplash.com/photo-1527058054345-f870ffe763eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80`,
          primaryLinkLabel: 'Learn more',
          primaryLink: { name: 'articles' }
        }
      }
    }
  },
  methods: {}
}
</script>

<style lang="sass" scoped>
.index
  display: grid
  grid-gap: $unit
  grid-auto-rows: 496px
  grid-template-columns: 1fr
  +mq-s
    grid-auto-rows: initial
    grid-template-rows: repeat(3, 592px) repeat(2, 496px)
    grid-template-columns: 1fr 1fr
  +mq-m
    grid-template-rows: repeat(3, 680px) repeat(2, 592px)

  &__hero,
  &__articles,
  &__questions
    grid-column: 1 / -1

  &__articles,
  &__questions
    background-color: $pri-cl
</style>
