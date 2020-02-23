import { auth, firestore, functions } from '~/plugins/firebase'

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
    console.log('fetchPost')
    const { posts } = state
    if (posts[id]) return posts[id]

    const res = await firestore
      .collection('posts')
      .doc(id)
      .get()

    const data = res.data()
    if (data) commit('ADD_POST', { post: data })
    return data
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

  watchPost({ state, commit }, { id }) {
    console.log('watchPost')
    const docRef = firestore.collection('posts').doc(id)
    const listener = docRef.onSnapshot((docSnapshot) => {
      commit('ADD_POST', { post: docSnapshot.data() })
    })
    allListeners.push(listener)
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

  watchPostCommentReplies({ commit }, { questionId, commentId }) {
    const docRef = firestore
      .collection('postCommentReplies')
      .where('questionId', '==', questionId)
      .where('commentId', '==', commentId)

    const listener = docRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((docSnapshot) => {
        commit('ADD_REPLY', { reply: docSnapshot.data() })
      })
    })

    allListeners.push(listener)
  },

  watchPostMeta({ commit, rootState }) {
    const uid = auth().currentUser?.uid
    const isQuestionRoute = rootState.route.name === 'posts-id'
    if (!uid || !isQuestionRoute) return
    const questionId = rootState.route.params.id
    console.log('rootState.route: ', rootState.route)
    const docRef = firestore
      .collection('postMeta')
      .where('questionId', '==', questionId)
      .where('uid', '==', uid)

    const listener = docRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((docSnapshot) => {
        commit('ADD_LIKE', { like: docSnapshot.data() })
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
  },

  async createLike(_, { questionId, commentId }) {
    try {
      const createLike = functions.httpsCallable('https-createQuestionLike')
      console.log('questionId: ', questionId)
      console.log('commentId: ', commentId)
      const { data } = await createLike({ questionId, commentId })
      return { likeId: data.likeId }
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  },

  async deleteQuestion({ commit }, { id }) {
    try {
      console.log('deleteQuestion: ', id)
      const deleteQuestion = functions.httpsCallable('https-deleteQuestion')
      const { data } = await deleteQuestion({ id })
      commit('DELETE_QUESTION', { id: data.id })
      return { id }
    } catch (e) {
      console.log('error: ', e)
    }
  },

  async deleteComment({ commit }, { id }) {
    try {
      console.log('deleteComment: ', id)
      const deleteComment = functions.httpsCallable(
        'https-deleteQuestionComment'
      )
      const { data } = await deleteComment({ id })
      commit('DELETE_COMMENT', { id: data.id })
      return { id }
    } catch (e) {
      console.log('error: ', e)
    }
  },

  async deleteReply({ commit }, { id }) {
    try {
      console.log('deleteReply: ', id)
      const deleteReply = functions.httpsCallable('https-deleteQuestionReply')
      const { data } = await deleteReply({ id })
      commit('DELETE_REPLY', { id: data.id })
      return { id }
    } catch (e) {
      console.log('error: ', e)
    }
  },

  async deleteLike({ commit }, { id }) {
    try {
      const deleteLike = functions.httpsCallable('https-deleteQuestionLike')
      console.log('like id: ', id)
      const { data } = await deleteLike({ id })
      commit('DELETE_LIKE', { id: data.id })
      return { likeId: data.id }
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  },

  async updateQuestion(_, { id, title, body }) {
    try {
      const updateQuestion = functions.httpsCallable('https-updateQuestion')
      console.log('updateQuestion id: ', id)
      const { data } = await updateQuestion({ id, title, body })
      return { questionId: data.questionId }
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  },

  async updateComment(_, { id, body }) {
    try {
      const updateComment = functions.httpsCallable(
        'https-updateQuestionComment'
      )
      console.log('commentId: ', id)
      const { data } = await updateComment({ id, body })
      return { commentId: data.commentId }
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  },

  async updateReply(_, { id, body }) {
    try {
      const updateReply = functions.httpsCallable('https-updateQuestionReply')
      console.log('replyId: ', id)
      const { data } = await updateReply({ id, body })
      return { replyId: data.replyId }
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  }
}
