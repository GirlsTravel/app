import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { checkIfAuthDocumentExists } from 'utils/checkIfAuthDocumentExists'
import { slugifyString } from 'utils/slugifyString'

const COLLECTION_ID = 'posts'

// update document to posts database collection
const updateDocument = async ({ id, title, body }) => {
  const docRef = admin
    .firestore()
    .collection(COLLECTION_ID)
    .doc(id)
  const data = {
    title,
    titleSlug: slugifyString(title),
    body,
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  }
  await docRef.update(data)
  return id
}

export const listener = functions.https.onCall(async ({ id, title, body }, { auth }) => {
  try {
    const { uid } = auth
    const doesDocExist = await checkIfAuthDocumentExists({
      uid,
      collectionId: COLLECTION_ID,
      documentId: id
    })
    if (!doesDocExist) throw new Error('The targeted document does not exist')
    const questionId = await updateDocument({ id, title, body })
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
