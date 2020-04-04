import { auth, firestore, functions } from '~/plugins/firebase'

// stores a reference to firestore listeners
const allListeners = []

export default {
  unsubscribeAllListeners() {
    allListeners.forEach((listener) => listener())
    allListeners.length = 0
  },

  async init({ commit }) {
    const querySnapshot = await firestore.collection('article').get()
    querySnapshot.forEach((doc) => {
      commit('ADD_POST', { post: doc.data() })
    })
  },

  async fetchPost({ state, commit }, { id }) {
    console.log('fetchArticlePost')
    const { posts } = state
    if (posts[id]) return posts[id]

    const res = await firestore
      .collection('article')
      .doc(id)
      .get()

    const data = res.data()
    if (data) commit('ADD_POST', { post: data })
    return data
  },

  async fetchPostComments({ commit }, { articleId }) {
    const querySnapshot = await firestore
      .collection('articleComment')
      .where('articleId', '==', articleId)
      .get()

    querySnapshot.forEach((doc) => {
      commit('ADD_COMMENT', { comment: doc.data() })
    })
  },

  async fetchPostCommentReplies({ commit }, { articleId, commentId }) {
    const querySnapshot = await firestore
      .collection('articleCommentReply')
      .where('articleId', '==', articleId)
      .where('commentId', '==', commentId)
      .get()

    querySnapshot.forEach((doc) => {
      commit('ADD_REPLY', { reply: doc.data() })
    })
  },

  watchPost({ state, commit }, { id }) {
    console.log('watchPost')
    const docRef = firestore.collection('article').doc(id)
    const listener = docRef.onSnapshot((docSnapshot) => {
      commit('ADD_POST', { post: docSnapshot.data() })
    })
    allListeners.push(listener)
  },

  watchPostComments({ commit }, { articleId }) {
    const docRef = firestore
      .collection('articleComment')
      .where('articleId', '==', articleId)
    console.log('watchPostComments: ', articleId)

    const listener = docRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((docSnapshot) => {
        commit('ADD_COMMENT', { comment: docSnapshot.data() })
      })
    })

    allListeners.push(listener)
  },

  watchPostCommentReplies({ commit }, { articleId, commentId }) {
    const docRef = firestore
      .collection('articleCommentReply')
      .where('articleId', '==', articleId)
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
    const isArticlesRoute = rootState.route.name === 'articles-id-handle'
    if (!uid || !isArticlesRoute) return
    const articleId = rootState.route.params.id
    console.log('rootState.route: ', rootState.route)
    const docRef = firestore
      .collection('articleMeta')
      .where('articleId', '==', articleId)
      .where('uid', '==', uid)

    const listener = docRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((docSnapshot) => {
        commit('ADD_LIKE', { like: docSnapshot.data() })
      })
    })

    allListeners.push(listener)
  },

  async createPost(_, { title, body, heroImageURL }) {
    try {
      const createArticle = functions.httpsCallable('https-createArticle')
      const { data } = await createArticle({ title, body, heroImageURL })
      console.log('data: ', data)
      return { articleId: data.articleId, handle: data.handle }
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  },

  async createComment(_, { articleId, body }) {
    try {
      const createComment = functions.httpsCallable(
        'https-createArticleComment'
      )
      console.log('q: ', articleId)
      const { data } = await createComment({ articleId, body })
      return { commentId: data.commentId }
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  },

  async createReply(_, { articleId, commentId, body }) {
    try {
      const createReply = functions.httpsCallable('https-createArticleReply')
      console.log('articleId: ', articleId)
      console.log('commentId: ', commentId)
      const { data } = await createReply({ articleId, commentId, body })
      return { replyId: data.replyId }
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  },

  async createLike(_, { articleId, commentId }) {
    try {
      const createLike = functions.httpsCallable('https-createArticleLike')
      console.log('articleId: ', articleId)
      console.log('commentId: ', commentId)
      const { data } = await createLike({ articleId, commentId })
      return { likeId: data.likeId }
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  },

  async deletePost({ commit }, { id }) {
    try {
      console.log('deleteArticle: ', id)
      const deleteArticle = functions.httpsCallable('https-deleteArticle')
      const { data } = await deleteArticle({ id })
      commit('DELETE_POST', { id: data.id })
      return { id }
    } catch (e) {
      console.log('error: ', e)
    }
  },

  async deleteComment({ commit }, { id }) {
    try {
      console.log('deleteComment: ', id)
      const deleteComment = functions.httpsCallable(
        'https-deleteArticleComment'
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
      const deleteReply = functions.httpsCallable('https-deleteArticleReply')
      const { data } = await deleteReply({ id })
      commit('DELETE_REPLY', { id: data.id })
      return { id }
    } catch (e) {
      console.log('error: ', e)
    }
  },

  async deleteLike({ commit }, { id }) {
    try {
      const deleteLike = functions.httpsCallable('https-deleteArticleLike')
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

  async updatePost(_, { id, title, body }) {
    try {
      const updateArticle = functions.httpsCallable('https-updateArticle')
      console.log('updateArticle id: ', id)
      const { data } = await updateArticle({ id, title, body })
      return { articleId: data.articleId }
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  },

  async updateComment(_, { id, body }) {
    try {
      const updateComment = functions.httpsCallable(
        'https-updateArticleComment'
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
      const updateReply = functions.httpsCallable('https-updateArticleReply')
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
