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

// add comment to blog database collection
const createQuestion = async ({ title, body, uid, username, photoURL }) => {
  const docRef = admin
    .firestore()
    .collection('posts')
    .doc()
  const data = {
    title,
    body,
    uid,
    username,
    photoURL,
    id: docRef.id,
    likes: 0,
    dislikes: 0,
    comments: 0,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  }
  await docRef.set(data)
  return data.id
}

export const listener = functions.https.onCall(async ({ title, body }, { auth }) => {
  try {
    const { uid } = auth
    const { username, photoURL, } = await getUserInformation({ uid })
    const questionId = await createQuestion({ title, body, uid, username, photoURL })
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
