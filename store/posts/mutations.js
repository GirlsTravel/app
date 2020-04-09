import Vue from 'vue'

export default {
  ADD_POST(state, { post }) {
    state.posts[post.id] = post
  },

  ADD_COMMENT(state, { comment }) {
    Vue.set(state.comments, comment.id, comment)
  },

  ADD_REPLY(state, { reply }) {
    Vue.set(state.replies, reply.id, reply)
  },

  ADD_LIKE(state, { like }) {
    Vue.set(state.likes, like.id, like)
  },

  DELETE_QUESTION(state, { id }) {
    Vue.delete(state.posts, id)
  },

  DELETE_COMMENT(state, { id }) {
    Vue.delete(state.comments, id)
  },

  DELETE_REPLY(state, { id }) {
    Vue.delete(state.replies, id)
  },

  DELETE_LIKE(state, { id }) {
    Vue.delete(state.likes, id)
  }
}
