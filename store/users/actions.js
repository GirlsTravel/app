import { auth, functions, firestore } from '~/services/firebase'

// stores a reference to firestore listeners
const allListeners = []

export default {
  unsubscribeAllListeners() {
    allListeners.forEach((listener) => listener())
    allListeners.length = 0
  },

  fetchSelf({ commit }) {
    const { uid } = auth().currentUser
    const docRef = firestore.collection('users').doc(uid)
    docRef.onSnapshot((docSnapshot) => {
      commit('ADD_USER', { user: docSnapshot.data() })
    })
  },

  async fetchUser({ commit }, { username }) {
    const querySnapshot = await firestore
      .collection('users')
      .where('username', '==', username)
      .get()

    let user = null
    querySnapshot.forEach((doc) => {
      user = doc.data()
      commit('ADD_USER', { user })
    })
    return user
  },

  watchFollow({ state, commit }, { uid, uidFollow }) {
    const docRef = firestore
      .collection('follow')
      .where('uid', '==', uid)
      .where('uidFollow', '==', uidFollow)
    const listener = docRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((docSnapshot) => {
        commit('ADD_FOLLOW', { follow: docSnapshot.data() })
      })
    })
    allListeners.push(listener)
  },

  async createFollow(_, { user }) {
    try {
      const createFollow = functions.httpsCallable('https-createFollow')
      const { data } = await createFollow({ user })
      return data
    } catch (e) {
      console.error(e)
    }
  },

  async deleteFollow({ commit }, { id }) {
    try {
      const deleteFollow = functions.httpsCallable('https-deleteFollow')
      const { data } = await deleteFollow({ id })
      commit('DELETE_FOLLOW', { id: data.id })
      return { id }
    } catch (e) {
      console.log('error: ', e)
    }
  }
}
