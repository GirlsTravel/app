import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

const COLLECTION_ID = 'articleLike'

// check if like already exists
const checkIfLikeExists = async ({ uid, articleId, commentId }) => {
  // build query
  let queryRef = admin
    .firestore()
    .collection(COLLECTION_ID)
    .where('uid', '==', uid)
    .where('articleId', '==', articleId)
  // add a commentId query if it exists
  queryRef = commentId ? queryRef.where('commentId', '==', commentId) : queryRef.where('commentId', '==', null)
  // execute query
  const querySnapshot = await queryRef.get()
  if (querySnapshot.empty) return false
  return true
}

// add like to postMeta database collection
const addLike = async ({ uid, articleId, commentId }) => {
  const docRef = admin
    .firestore()
    .collection(COLLECTION_ID)
    .doc()
  const data = {
    uid,
    articleId,
    commentId: commentId || null,
    id: docRef.id,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  }
  await docRef.set(data)
  return data.id
}

export const listener = functions.https.onCall(async ({ articleId, commentId }, { auth }) => {
  try {
    const { uid } = auth
    const doesLikeExist = await checkIfLikeExists({ uid, articleId, commentId })
    if (doesLikeExist) throw new Error('User has already liked the targeted document')
    const likeId = await addLike({ uid, articleId, commentId })
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
