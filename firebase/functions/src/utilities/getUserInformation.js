import * as admin from 'firebase-admin'

// get user information
export const getUserInformation = async ({ uid }) => {
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
