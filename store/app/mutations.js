export default {
  OPEN_DRAWER(state, id) {
    state.drawer = id
  },

  CLOSE_DRAWER(state) {
    state.drawer = ''
  }
}
