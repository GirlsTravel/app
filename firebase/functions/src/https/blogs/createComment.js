import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

// get user information
const getUserInformation = async ({ uid }) => {
  const doc = await admin
    .firestore()
    .collection('users')
    .doc(uid)
    .get()

  if (!doc.exists) {
    throw new Error('User document does not exist in the Users collection')
  }

  return doc.data()
}

// add comment to questions database collection
const createComment = async ({ body, uid, username, photoURL, questionId }) => {
  const docRef = admin
    .firestore()
    .collection('postComments')
    .doc()
  const data = {
    body,
    uid,
    username,
    photoURL,
    id: docRef.id,
    questionId,
    likes: 0,
    comments: 0,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  }
  await docRef.set(data)
  return data.id
}

export const listener = functions.https.onCall(async ({ body, questionId }, { auth }) => {
  try {
    const { uid } = auth
    const { username, photoURL, } = await getUserInformation({ uid })
    const commentId = await createComment({ body, uid, questionId, username, photoURL })
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
