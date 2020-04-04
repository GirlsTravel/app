import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { generateShortId } from 'utils/generateShortId'
import { checkIfDocumentExists } from 'utils/checkIfDocumentExists'
import { slugifyString } from 'utils/slugifyString'
import { getUserInformation } from 'utils/getUserInformation'

const COLLECTION_ID = 'article'

// add article to database collection
const addArticle = async ({ documentId, title, body, heroImageURL, uid, username, photoURL }) => {
  const docRef = admin
    .firestore()
    .collection(COLLECTION_ID)
    .doc(documentId)
  const data = {
    title,
    handle: slugifyString(title),
    body,
    heroImageURL,
    uid,
    username,
    photoURL,
    id: docRef.id,
    likes: 0,
    comments: 0,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  }
  await docRef.set(data)
  return { articleId: data.id, handle: data.titleSlug }
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

export const listener = functions.https.onCall(async ({ title, body, heroImageURL }, { auth }) => {
  try {
    const { uid } = auth
    const documentId = await getUniqueDocumentId()
    if (!uid || !documentId) return

    const { username, photoURL } = await getUserInformation({ uid })
    const { articleId, handle } = await addArticle({ documentId, title, body, heroImageURL, uid, username, photoURL })
    console.log('articleId: ', articleId)
    return { articleId, handle }
  } catch (e) {
    console.error('catch error: ', e)
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called while authenticated.'
    )
  }
})
