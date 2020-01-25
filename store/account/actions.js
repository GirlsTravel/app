import { functions } from '~/plugins/firebase'

export default {
  async uploadProfileImage(_, { image }) {
    try {
      const uploadImage = functions.httpsCallable(
        'https-uploadUserProfileImage'
      )
      const { data } = await uploadImage({ image })
      console.log('data: ', data)
      return 'done'
    } catch (e) {
      console.log('error: ', e)
      console.log('error message: ', e.message)
      console.log('error details: ', e.details)
    }
  }
}
