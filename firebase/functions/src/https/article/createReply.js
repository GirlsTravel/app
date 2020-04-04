import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { getUserInformation } from 'utils/getUserInformation'

const COLLECTION_ID = 'articleCommentReply'

// add reply to a question answer in the replies collection database
const addReply = async ({ body, uid, username, photoURL, articleId, commentId }) => {
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
    commentId,
    likes: 0,
    comments: 0,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  }
  await docRef.set(data)
  return data.id
}

export const listener = functions.https.onCall(async ({ body, articleId, commentId }, { auth }) => {
  try {
    const { uid } = auth
    const { username, photoURL, } = await getUserInformation({ uid })
    const replyId = await addReply({ body, uid, articleId, commentId, username, photoURL })
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
