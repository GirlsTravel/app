import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

// update the user's information
const updateUserInformation = async (
  { uid, firstName, lastName, username, bio }
) => {
  return await admin
    .firestore()
    .collection('users')
    .doc(uid)
    .update({ uid, firstName, lastName, username, bio })
}

export const listener = functions.https.onCall(async (
  { firstName, lastName, username, bio },
  { auth }
) => {
  try {
    const { uid } = auth
    console.log('uid: ', uid)
    await updateUserInformation({ uid, firstName, lastName, username, bio })
    return
  } catch (e) {
    console.error('catch error: ', e)
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called while authenticated.'
    )
  }
})
