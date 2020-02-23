import * as admin from 'firebase-admin'

/**
 * Increments a document's property value by +1.
 */
export const incrementValue = async ({ docRef, key }) => {
  await admin.firestore().runTransaction(async (transaction) => {
    const data = (await transaction.get(docRef)).data()
    transaction.update(docRef, {
      [key]: data[key] + 1
    })
  })
}
