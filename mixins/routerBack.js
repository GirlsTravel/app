export default {
  computed: {
    /**
     * Determines if the step backwards in history will remain within the app or exit.
     */
    doesRouteBackExist() {
      return !!this.$store?.state?.route?.from?.name
    }
  },
  methods: {
    /**
     * Goes back one step backwards in the history, but instead of leaving app when `route.from`
     * is exhausted it will default to the `baseRoute`.
     * @param {object} baseRoute The default route
     */
    routerGoBack(baseRoute = { name: 'index' }) {
      this.doesRouteBackExist
        ? this.$router.go(-1)
        : this.$router.push(baseRoute)
    }
  }
}
