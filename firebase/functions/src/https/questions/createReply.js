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

// add reply to a question answer in the replies collection database
const createReply = async ({ body, uid, username, photoURL, questionId, commentId }) => {
  const docRef = admin
    .firestore()
    .collection('postCommentReplies')
    .doc()
  const data = {
    body,
    uid,
    username,
    photoURL,
    id: docRef.id,
    questionId,
    commentId,
    likes: 0,
    dislikes: 0,
    comments: 0,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  }
  await docRef.set(data)
  return data.id
}

export const listener = functions.https.onCall(async ({ body, questionId, commentId }, { auth }) => {
  try {
    const { uid } = auth
    const { username, photoURL, } = await getUserInformation({ uid })
    const replyId = await createReply({ body, uid, questionId, commentId, username, photoURL })
    console.log('replyId: ', replyId)
    return { replyId }
  } catch (e) {
    console.error('catch error: ', e)
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called while authenticated.'
    )
  }
})
