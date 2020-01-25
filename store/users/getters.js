import { isEmpty } from 'lodash'

export default {
  currentUser(state, getters, rootState) {
    const { users } = state
    const { authUser } = rootState.auth

    if (!isEmpty(users) && !isEmpty(authUser)) {
      return users[authUser.uid]
    } else {
      return { photoURL: '' }
    }
  }
}
