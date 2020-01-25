import Vue from 'vue'

export default {
  ADD_USER(state, { user }) {
    console.log('user: ', user)
    Vue.set(state.users, user.uid, user)
  }
}
