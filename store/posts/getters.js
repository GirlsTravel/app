import { isEmpty } from 'lodash'

export default {
  currentQuestion(state, getters, rootState) {
    const { id } = rootState.route.params
    const { posts } = state
    return posts[id]
  },

  currentComments(state, getters, rootState) {
    const { id } = rootState.route.params
    const { comments } = state
    if (isEmpty(comments)) return []
    return Object.values(comments).filter(
      (comment) => comment.questionId === id
    )
  },

  currentReplies(state, getters, rootState) {
    const { id } = rootState.route.params
    const { replies } = state
    if (isEmpty(replies)) return []
    return Object.values(replies).filter((reply) => reply.questionId === id)
  }
}
