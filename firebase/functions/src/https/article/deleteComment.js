import * as functions from 'firebase-functions'
import { deleteDocument } from 'utils/deleteDocument'
import { checkIfAuthDocumentExists } from 'utils/checkIfAuthDocumentExists'

const COLLECTION_ID = 'articleComment'

// Allows the auth to delete their article comment
export const listener = functions.https.onCall(async ({ id }, { auth }) => {
  try {
    const { uid } = auth
    const doesDocExist = await checkIfAuthDocumentExists({
      uid,
      collectionId: COLLECTION_ID,
      documentId: id
    })
    if (!doesDocExist) throw new Error('The targeted document does not exist')
    await deleteDocument({
      collectionId: COLLECTION_ID,
      documentId: id
    })
    return { id }
  } catch (e) {
    console.error('catch error: ', e)
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called while authenticated.'
    )
  }
})
