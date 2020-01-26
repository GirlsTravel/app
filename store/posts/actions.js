import { firestore, functions } from '~/plugins/firebase'

// stores a reference to firestore listeners
const allListeners = []

export default {
  unsubscribeAllListeners() {
    allListeners.forEach((listener) => listener())
    allListeners.length = 0
  },

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

  async fetchPostComments({ commit }, { questionId }) {
    const querySnapshot = await firestore
      .collection('postComments')
      .where('questionId', '==', questionId)
      .get()

    querySnapshot.forEach((doc) => {
      commit('ADD_COMMENT', { comment: doc.data() })
    })
  },

  async fetchPostCommentReplies({ commit }, { questionId, commentId }) {
    const querySnapshot = await firestore
      .collection('postCommentReplies')
      .where('questionId', '==', questionId)
      .where('commentId', '==', commentId)
      .get()

    querySnapshot.forEach((doc) => {
      commit('ADD_REPLY', { reply: doc.data() })
    })
  },

  watchPostComments({ commit }, { questionId }) {
    const docRef = firestore
      .collection('postComments')
      .where('questionId', '==', questionId)

    const listener = docRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((docSnapshot) => {
        commit('ADD_COMMENT', { comment: docSnapshot.data() })
      })
    })

    allListeners.push(listener)
  },

  async createQuestion(_, { title, body }) {
    try {
      const createQuestion = functions.httpsCallable('https-createQuestion')
      const { data } = await createQuestion({ title, body })
      return { questionId: data.questionId }
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  },

  async createComment(_, { questionId, body }) {
    try {
      const createComment = functions.httpsCallable(
        'https-createQuestionComment'
      )
      console.log('q: ', questionId)
      const { data } = await createComment({ questionId, body })
      return { commentId: data.commentId }
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  },

  async createReply(_, { questionId, commentId, body }) {
    try {
      const createReply = functions.httpsCallable('https-createQuestionReply')
      console.log('questionId: ', questionId)
      console.log('commentId: ', commentId)
      const { data } = await createReply({ questionId, commentId, body })
      return { replyId: data.replyId }
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  }
}
