// Import questions
import * as CreateQuestion from './questions/createQuestion'
import * as CreateQuestionComment from './questions/createComment'
import * as CreateQuestionReply from './questions/createReply'
import * as CreateQuestionLike from './questions/createLike'
import * as DeleteQuestionLike from './questions/deleteLike'

// Import users
import * as UploadUserProfileImage from './users/uploadProfileImage'
import * as UpdateUserInformation from './users/updateInformation'

// Export questions
export const createQuestion = CreateQuestion.listener
export const createQuestionComment = CreateQuestionComment.listener
export const createQuestionReply = CreateQuestionReply.listener
export const createQuestionLike = CreateQuestionLike.listener
export const deleteQuestionLike = DeleteQuestionLike.listener

// Export users
export const uploadUserProfileImage = UploadUserProfileImage.listener
export const updateUserInformation = UpdateUserInformation.listener
