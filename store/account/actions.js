import { functions } from '~/services/firebase'

export default {
  async uploadProfileImage(_, { image }) {
    try {
      const uploadImage = functions.httpsCallable(
        'https-uploadUserProfileImage'
      )
      await uploadImage({ image })
      return 'done'
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  },

  async updateUserInformation(
    _,
    { firstName, lastName, username, bio, email }
  ) {
    try {
      const updateUserInformation = functions.httpsCallable(
        'https-updateUserInformation'
      )
      const { data } = await updateUserInformation({
        firstName,
        lastName,
        username,
        bio,
        email
      })
      console.log('data: ', data)
      return 'done'
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  }
}
