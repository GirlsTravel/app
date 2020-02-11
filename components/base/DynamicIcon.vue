<template lang="pug">
  component(
    :is='dynamicIcon'
    class='dynamic-icon'
  )
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    dynamicIcon() {
      return () =>
        import(
          /* webpackChunkName: "icons" */
          /* webpackMode: "lazy-once" */
          `../../assets/svg/${this.icon}.svg`
        )
    }
  }
}
</script>
