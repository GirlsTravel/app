import * as admin from 'firebase-admin'

/**
 * Decrements a document's property value by -1.
 * Prevents value from going below 0.
 */
export const decrementValue = async ({ docRef, key }) => {
  await admin.firestore().runTransaction(async (transaction) => {
    const data = (await transaction.get(docRef)).data()
    transaction.update(docRef, {
      [key]: Math.max(0, data[key] - 1)
    })
  })
}
