import Vue from 'vue'

export default {
  ADD_USER(state, { user }) {
    Vue.set(state.users, user.uid, user)
  },

  ADD_FOLLOW(state, { follow }) {
    Vue.set(state.follows, follow.id, follow)
  },

  DELETE_FOLLOW(state, { id }) {
    Vue.delete(state.follows, id)
  }
}
