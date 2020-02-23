import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { decrementValue } from 'utils/decrementValue'


const firestoreDocument = functions.firestore.document('postMeta/{metaId}')
export const listener = firestoreDocument.onDelete(async (snap, context) => {
  try {
    const { questionId, commentId } = snap.data()
    const docRef = commentId ?
      admin.firestore().collection('postComments').doc(commentId) :
      admin.firestore().collection('posts').doc(questionId)
    await decrementValue({ docRef, key: 'likes' })
    return
  }
  catch (e) {
    console.error('postMeta delete Error: ', e)
    return
  }
})
