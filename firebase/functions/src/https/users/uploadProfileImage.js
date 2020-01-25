import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as cloudinary from 'cloudinary'

// config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// uploads the image to Cloudinary
const uploadImage = async ({ image }) => {
  return await cloudinary.v2.uploader.upload(image)
}

// update the profile image URL for that user
const updateUserProfileImage = async ({ uid, photoURL }) => {
  // check if user exists
  return await admin
    .firestore()
    .collection('users')
    .doc(uid)
    .update({ photoURL })
}

export const listener = functions.https.onCall(async ({ image }, { auth }) => {
  try {
    const { uid } = auth
    console.log('uid: ', uid)
    console.log('image: ', image)
    const { url } = await uploadImage({ image })
    await updateUserProfileImage({ uid, photoURL: url })
    return
  } catch (e) {
    console.error('catch error: ', e)
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called while authenticated.'
    )
  }
})
