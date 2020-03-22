import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { generateShortId } from 'utils/generateShortId'
import { checkIfDocumentExists } from 'utils/checkIfDocumentExists'
import { slugifyString } from 'utils/slugifyString'

const COLLECTION_ID = 'posts'

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
const createQuestion = async ({ documentId, title, body, uid, username, photoURL }) => {
  const docRef = admin
    .firestore()
    .collection(COLLECTION_ID)
    .doc(documentId)
  const data = {
    title,
    titleSlug: slugifyString(title),
    body,
    uid,
    username,
    photoURL,
    id: docRef.id,
    likes: 0,
    comments: 0,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  }
  await docRef.set(data)
  return data.id
}

// Generate an unique collection id
const getUniqueDocumentId = async () => {
  const maxAttempts = 3
  for (let i=0;i<maxAttempts;i++) {
    const id = generateShortId()
    const doesDocExist = await checkIfDocumentExists({
      collectionId: COLLECTION_ID,
      documentId: id
    })
    if (!doesDocExist) return id
  }
}

export const listener = functions.https.onCall(async ({ title, body }, { auth }) => {
  try {
    const { uid } = auth
    const documentId = await getUniqueDocumentId()
    if (!uid || !documentId) return

    const { username, photoURL } = await getUserInformation({ uid })
    const questionId = await createQuestion({ documentId, title, body, uid, username, photoURL })
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
