import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { checkIfDocumentExists } from 'utils/checkIfDocumentExists'

const COLLECTION_ID = 'follow'

// add follow to database
const createFollow = async ({ uid, uidFollow }) => {
  const docRef = admin
    .firestore()
    .collection(COLLECTION_ID)
    .doc()
  const data = {
    uid,
    uidFollow,
    id: docRef.id,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  }
  await docRef.set(data)
  return data.id
}

export const listener = functions.https.onCall(async ({ user }, { auth }) => {
  try {
    const { uid } = auth
    const doesDocExist = await checkIfDocumentExists({
      collectionId: 'users',
      documentId: user.uid
    })
    if (!doesDocExist) throw new Error('User to follow does not exist')
    const followId = await createFollow({ uid, uidFollow: user.uid })
    return { followId }
  } catch (e) {
    console.error('catch error: ', e)
    throw new functions.https.HttpsError(
      'failed-precondition',
      'The function must be called while authenticated.'
    )
  }
})
