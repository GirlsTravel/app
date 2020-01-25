import * as CreateQuestion from './questions/createQuestion'
import * as UploadUserProfileImage from './users/uploadProfileImage'
import * as UpdateUserInformation from './users/updateInformation'

export const createQuestion = CreateQuestion.listener
export const uploadUserProfileImage = UploadUserProfileImage.listener
export const updateUserInformation = UpdateUserInformation.listener
