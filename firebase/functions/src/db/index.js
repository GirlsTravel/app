import * as PostCommentsCreate from './postComments/create'
import * as PostCommentsDelete from './postComments/delete'
import * as PostCommentRepliesCreate from './postCommentReplies/create'
import * as PostCommentRepliesDelete from './postCommentReplies/delete'
import * as PostMetaCreate from './postMeta/create'
import * as PostMetaDelete from './postMeta/delete'

export const postCommentsCreate = PostCommentsCreate.listener
export const postCommentsDelete = PostCommentsDelete.listener
export const postCommentRepliesCreate = PostCommentRepliesCreate.listener
export const postCommentRepliesDelete = PostCommentRepliesDelete.listener
export const postMetaCreate = PostMetaCreate.listener
export const postMetaDelete = PostMetaDelete.listener
