import { auth, firestore } from '~/plugins/firebase'

export default {
  fetchSelf({ commit }) {
    const { uid } = auth().currentUser
    const docRef = firestore.collection('users').doc(uid)
    docRef.onSnapshot((docSnapshot) => {
      commit('ADD_USER', { user: docSnapshot.data() })
    })
  }
}
