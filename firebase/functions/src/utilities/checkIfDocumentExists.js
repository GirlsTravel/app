import * as admin from 'firebase-admin'

// Checks if a document exists
export const checkIfDocumentExists = async ({ collectionId, documentId }) => {
  // build query
  const queryRef = admin
    .firestore()
    .collection(collectionId)
    .where('id', '==', documentId)
  // execute query
  const querySnapshot = await queryRef.get()
  return !querySnapshot.empty
}
