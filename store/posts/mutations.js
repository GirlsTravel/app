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
    console.log('delete post id: ', id)
    Vue.delete(state.posts, id)
    console.log('delete post after: ', state.posts)
  },

  DELETE_COMMENT(state, { id }) {
    console.log('delete comment id: ', id)
    Vue.delete(state.comments, id)
    console.log('delete comment after: ', state.comments)
  },

  DELETE_REPLY(state, { id }) {
    console.log('delete reply id: ', id)
    Vue.delete(state.replies, id)
    console.log('delete reply after: ', state.replies)
  },

  DELETE_LIKE(state, { id }) {
    console.log('delete like id: ', id)
    Vue.delete(state.likes, id)
    console.log('delete like after: ', state.likes)
  }
}
