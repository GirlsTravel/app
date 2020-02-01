// Import questions
import * as CreateQuestion from './questions/createQuestion'
import * as CreateQuestionComment from './questions/createComment'
import * as CreateQuestionReply from './questions/createReply'
import * as CreateQuestionLike from './questions/createLike'
import * as DeleteQuestion from './questions/deleteQuestion'
import * as DeleteQuestionComment from './questions/deleteComment'
import * as DeleteQuestionReply from './questions/deleteReply'
import * as DeleteQuestionLike from './questions/deleteLike'
import * as UpdateQuestion from './questions/updateQuestion'
import * as UpdateQuestionComment from './questions/updateComment'
import * as UpdateQuestionReply from './questions/updateReply'


// Import users
import * as UploadUserProfileImage from './users/uploadProfileImage'
import * as UpdateUserInformation from './users/updateInformation'

// Export questions
export const createQuestion = CreateQuestion.listener
export const createQuestionComment = CreateQuestionComment.listener
export const createQuestionReply = CreateQuestionReply.listener
export const createQuestionLike = CreateQuestionLike.listener
export const deleteQuestion = DeleteQuestion.listener
export const deleteQuestionComment = DeleteQuestionComment.listener
export const deleteQuestionReply = DeleteQuestionReply.listener
export const deleteQuestionLike = DeleteQuestionLike.listener
export const updateQuestion = UpdateQuestion.listener
export const updateQuestionComment = UpdateQuestionComment.listener
export const updateQuestionReply = UpdateQuestionReply.listener

// Export users
export const uploadUserProfileImage = UploadUserProfileImage.listener
export const updateUserInformation = UpdateUserInformation.listener
