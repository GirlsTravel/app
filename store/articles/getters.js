import { isEmpty } from 'lodash'

export default {
  currentPost(state, getters, rootState) {
    const { id } = rootState.route.params
    const { posts } = state
    return posts[id]
  },

  currentComments(state, getters, rootState) {
    const { id } = rootState.route.params
    const { comments } = state
    if (isEmpty(comments)) return []
    return Object.values(comments).filter((comment) => comment.articleId === id)
  },

  currentReplies(state, getters, rootState) {
    const { id } = rootState.route.params
    const { replies } = state
    if (isEmpty(replies)) return []
    return Object.values(replies).filter((reply) => reply.articleId === id)
  },

  currentLikes(state, getters, rootState) {
    const { id } = rootState.route.params
    const { likes } = state
    if (isEmpty(likes)) return []
    return Object.values(likes).filter((like) => like.articleId === id)
  }
}
