import * as admin from 'firebase-admin'

// Deletes a document from a collection
export const deleteDocument = async ({ collectionId, documentId }) => {
  await admin
    .firestore()
    .collection(collectionId)
    .doc(documentId)
    .delete()
}
