import { firestore, functions } from '~/plugins/firebase'

export default {
  async init({ commit }) {
    const querySnapshot = await firestore.collection('posts').get()
    querySnapshot.forEach((doc) => {
      commit('ADD_POST', { post: doc.data() })
    })
  },

  async fetchPost({ state, commit }, { id }) {
    const { posts } = state
    if (posts[id]) return

    const res = await firestore
      .collection('posts')
      .doc(id)
      .get()

    const data = res.data()
    if (data) commit('ADD_POST', { post: data })
  },

  async fetchPostComments({ commit }, { postId }) {
    const querySnapshot = await firestore
      .collection('postComments')
      .where('postId', '==', postId)
      .get()

    querySnapshot.forEach((doc) => {
      commit('ADD_COMMENT', { comment: doc.data() })
    })
  },

  async createQuestion({ state }, { title, body }) {
    try {
      const createQuestion = functions.httpsCallable('https-createQuestion')
      const { data } = await createQuestion({ title, body })
      console.log('state: ', state)
      return { questionId: data.questionId }
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  }
}
