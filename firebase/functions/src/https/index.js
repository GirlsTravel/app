import * as CreateQuestion from './questions/createQuestion'
import * as CreateQuestionComment from './questions/createComment'
import * as CreateQuestionReply from './questions/createReply'
import * as UploadUserProfileImage from './users/uploadProfileImage'
import * as UpdateUserInformation from './users/updateInformation'

export const createQuestion = CreateQuestion.listener
export const createQuestionComment = CreateQuestionComment.listener
export const createQuestionReply = CreateQuestionReply.listener
export const uploadUserProfileImage = UploadUserProfileImage.listener
export const updateUserInformation = UpdateUserInformation.listener
