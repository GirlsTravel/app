import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

// add comment to blog database collection
const createQuestion = async ({ title, body, uid }) => {
  const docRef = admin
    .firestore()
    .collection('posts')
    .doc()
  const data = {
    title,
    body,
    uid,
    id: docRef.id,
    likes: 0,
    dislikes: 0,
    comments: 0
  }
  await docRef.set(data)
  return data.id
}

export const listener = functions.https.onCall(async ({ title, body }, { auth }) => {
  try {
    const { uid } = auth
    const questionId = await createQuestion({ title, body, uid })
    console.log('questionId: ', questionId)
    return { questionId }
  } catch (e) {
    console.error('catch error: ', e)
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called while authenticated.'
    )
  }
})
