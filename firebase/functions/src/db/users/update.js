import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { flatten } from 'lodash'

// Batch update all relevant documents
const batchUpdateDocuments = async ({ documents, username, photoURL }) => {
  const db = admin.firestore()
  const batch = db.batch()
  documents.forEach(({ collectionId, documentId }) => {
    const docRef = db.collection(collectionId).doc(documentId)
    batch.update(docRef, { username, photoURL })
  })
  return await batch.commit()
}

// Queries a collection document(s) that belong to a user
const queryDocuments = async ({ collectionId, uid }) => {
  const documents = []
  const queryRef = admin
    .firestore()
    .collection(collectionId)
    .where('uid', '==', uid)
  const querySnapshot = await queryRef.get()
  querySnapshot.forEach(doc =>
    documents.push({ collectionId, documentId: doc.id })
  )
  return documents
}

const firestoreDocument = functions.firestore.document('users/{userId}')
export const listener = firestoreDocument.onUpdate(async (change, context) => {
  try {
    // Relevant collections that contain documents that should updated
    const collectionIds = ['posts', 'postComments', 'postCommentReplies']

    const {
      photoURL: beforePhotoURL,
      username: beforeUsername
    } = change.before.data()

    const {
      photoURL: afterPhotoURL,
      username: afterUsername,
      uid
    } = change.after.data()

    // Check if the fields we care about have changed
    if (!(beforePhotoURL !== afterPhotoURL || beforeUsername !== afterUsername)) return

    const documents = await Promise.all(
      collectionIds.map(async collectionId =>
        await queryDocuments({ collectionId, uid })
      )
    )

    const batchResponse = await batchUpdateDocuments({
      documents: flatten(documents),
      username: afterUsername,
      photoURL: afterPhotoURL
    })

    return
  }
  catch (e) {
    console.error('users update Error: ', e)
    return
  }
})
