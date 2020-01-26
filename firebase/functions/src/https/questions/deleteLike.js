import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

// check if like already exists, and that user is the auth
const checkIfLikeExists = async ({ uid, id }) => {
  // build query
  const queryRef = admin
    .firestore()
    .collection('postMeta')
    .where('uid', '==', uid)
    .where('id', '==', id)
  // execute query
  const querySnapshot = await queryRef.get()
  if (querySnapshot.empty) return false
  return true
}

// delete like from postMeta database collection
const deleteLike = async ({ id }) => {
  await admin
    .firestore()
    .collection('postMeta')
    .doc(id)
    .delete()
}

export const listener = functions.https.onCall(async ({ id }, { auth }) => {
  try {
    const { uid } = auth
    const doesLikeExist = await checkIfLikeExists({ uid, id })
    if (!doesLikeExist) throw new Error('The targeted document does not exist')
    await deleteLike({ uid, id })
    return { id }
  } catch (e) {
    console.error('catch error: ', e)
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called while authenticated.'
    )
  }
})
