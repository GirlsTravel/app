import { auth, firestore } from '~/plugins/firebase'

export default {
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
  }
}
