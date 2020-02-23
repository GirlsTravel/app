import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { incrementValue } from 'utils/incrementValue'


const firestoreDocument = functions.firestore.document('postComments/{commentId}')
export const listener = firestoreDocument.onCreate(async (snap, context) => {
  try {
    const { questionId } = snap.data()
    const docRef = admin.firestore().collection('posts').doc(questionId)
    await incrementValue({ docRef, key: 'comments' })
    return
  }
  catch (e) {
    console.error('postComments create Error: ', e)
    return
  }
})
