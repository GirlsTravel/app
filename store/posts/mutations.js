export default {
  ADD_POST(state, { post }) {
    state.posts[post.id] = post
  },

  ADD_COMMENT(state, { comment }) {
    state.comments[comment.id] = comment
  }
}
