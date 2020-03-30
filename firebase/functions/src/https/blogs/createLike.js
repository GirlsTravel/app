import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

// check if like already exists
const checkIfLikeExists = async ({ uid, questionId, commentId }) => {
  // build query
  let queryRef = admin
    .firestore()
    .collection('postMeta')
    .where('uid', '==', uid)
    .where('questionId', '==', questionId)
  // add a commentId query if it exists
  queryRef = commentId ? queryRef.where('commentId', '==', commentId) : queryRef.where('commentId', '==', null)
  // execute query
  const querySnapshot = await queryRef.get()
  if (querySnapshot.empty) return false
  return true
}

// add like to postMeta database collection
const createLike = async ({ uid, questionId, commentId }) => {
  const docRef = admin
    .firestore()
    .collection('postMeta')
    .doc()
  const data = {
    uid,
    questionId,
    commentId: commentId || null,
    id: docRef.id,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  }
  await docRef.set(data)
  return data.id
}

export const listener = functions.https.onCall(async ({ questionId, commentId }, { auth }) => {
  try {
    const { uid } = auth
    const doesLikeExist = await checkIfLikeExists({ uid, questionId, commentId })
    if (doesLikeExist) throw new Error('User has already liked the targeted document')
    const likeId = await createLike({ uid, questionId, commentId })
    console.log('likeId: ', likeId)
    return { likeId }
  } catch (e) {
    console.error('catch error: ', e)
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called while authenticated.'
    )
  }
})
