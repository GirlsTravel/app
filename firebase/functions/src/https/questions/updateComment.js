import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { checkIfAuthDocumentExists } from 'utils/checkIfAuthDocumentExists'

const COLLECTION_ID = 'postComments'

// update document to posts database collection
const updateDocument = async ({ id, body }) => {
  const docRef = admin
    .firestore()
    .collection(COLLECTION_ID)
    .doc(id)
  const data = {
    body,
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  }
  await docRef.update(data)
  return id
}

export const listener = functions.https.onCall(async ({ id, body }, { auth }) => {
  try {
    const { uid } = auth
    const doesDocExist = await checkIfAuthDocumentExists({
      uid,
      collectionId: COLLECTION_ID,
      documentId: id
    })
    if (!doesDocExist) throw new Error('The targeted document does not exist')
    const commentId = await updateDocument({ id, body })
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
