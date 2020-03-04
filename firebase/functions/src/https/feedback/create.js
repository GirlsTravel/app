import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

export const listener = functions.https.onCall(async ({ message, value }, { auth }) => {
  try {
    const { uid } = auth
    await admin.firestore()
      .collection('feedback')
      .doc()
      .set({
        uid: uid || null,
        message: message.trim() || null,
        value: value.trim() || null,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      })
    return
  } catch (e) {
    console.error('catch error: ', e)
    throw new functions.https.HttpsError(
      'failed-precondition',
      'Feedback was not captured. Something went wrong.'
    )
  }
})
