import * as PostCommentsCreate from './postComments/create'
import * as PostCommentsDelete from './postComments/delete'
import * as PostCommentRepliesCreate from './postCommentReplies/create'
import * as PostCommentRepliesDelete from './postCommentReplies/delete'
import * as PostMetaCreate from './postMeta/create'
import * as PostMetaDelete from './postMeta/delete'
import * as UsersUpdate from './users/update'

export const postCommentsCreate = PostCommentsCreate.listener
export const postCommentsDelete = PostCommentsDelete.listener
export const postCommentRepliesCreate = PostCommentRepliesCreate.listener
export const postCommentRepliesDelete = PostCommentRepliesDelete.listener
export const postMetaCreate = PostMetaCreate.listener
export const postMetaDelete = PostMetaDelete.listener
export const usersUpdate = UsersUpdate.listener

// export articleComment
export { listener as articleCommentCreate } from './articleComment/create'
export { listener as articleCommentDelete } from './articleComment/delete'

// export articleComment
export { listener as articleCommentReplyCreate } from './articleCommentReply/create'
export { listener as articleCommentReplyDelete } from './articleCommentReply/delete'

// export articleLike
export { listener as articleLikeCreate } from './articleLike/create'
export { listener as articleLikeDelete } from './articleLike/delete'
