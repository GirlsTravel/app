import { isEmpty } from 'lodash'

export default {
  authUser(state, getters, rootState) {
    const { users } = state
    const { authUser } = rootState.auth
    const defaultUser = {
      photoURL: '',
      username: '',
      firstName: '',
      lastName: '',
      email: ''
    }

    if (!isEmpty(users) && !isEmpty(authUser)) {
      return users[authUser.uid]
    } else {
      return defaultUser
    }
  },

  currentUser(state, getters, rootState) {
    const { users } = state
    const { authUser } = rootState.auth
    const defaultUser = {
      photoURL: '',
      username: '',
      firstName: '',
      lastName: '',
      email: ''
    }

    if (!isEmpty(users) && !isEmpty(authUser)) {
      return users[authUser.uid]
    } else {
      return defaultUser
    }
  }
}
