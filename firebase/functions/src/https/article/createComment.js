import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { getUserInformation } from 'utils/getUserInformation'

const COLLECTION_ID = 'articleComment'

// add comment to database collection
const addComment = async ({ body, uid, username, photoURL, articleId }) => {
  const docRef = admin
    .firestore()
    .collection(COLLECTION_ID)
    .doc()
  const data = {
    body,
    uid,
    username,
    photoURL,
    id: docRef.id,
    articleId,
    likes: 0,
    comments: 0,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  }
  await docRef.set(data)
  return data.id
}

export const listener = functions.https.onCall(async ({ body, articleId }, { auth }) => {
  try {
    const { uid } = auth
    const { username, photoURL, } = await getUserInformation({ uid })
    const commentId = await addComment({ body, uid, articleId, username, photoURL })
    console.log('commentId: ', commentId)
    return { commentId }
  } catch (e) {
    console.error('catch error: ', e)
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called while authenticated.'
    )
  }
})
