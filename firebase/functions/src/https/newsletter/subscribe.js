import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as EmailValidator from 'email-validator'


export const listener = functions.https.onCall(async ({ email }, { auth }) => {
  try {
    if (!EmailValidator.validate(email)) throw new Error('Invalid email address.')

    const { uid } = auth
    await admin.firestore()
      .collection('newsletter')
      .doc()
      .set({
        uid: uid || null,
        email: email.trim(),
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      })

    return
  } catch (e) {
    console.error('catch error: ', e)
    throw new functions.https.HttpsError(
      'failed-precondition',
      'Invalid email address.'
    )
  }
})
