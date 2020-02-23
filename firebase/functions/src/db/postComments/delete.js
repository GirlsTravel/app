import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { decrementValue } from 'utils/decrementValue'


const firestoreDocument = functions.firestore.document('postComments/{commentId}')
export const listener = firestoreDocument.onDelete(async (snap, context) => {
  try {
    const { questionId } = snap.data()
    const docRef = admin.firestore().collection('posts').doc(questionId)
    await decrementValue({ docRef, key: 'comments' })
    return
  }
  catch (e) {
    console.error('postComments delete Error: ', e)
    return
  }
})
