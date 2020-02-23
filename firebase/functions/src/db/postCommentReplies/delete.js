import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { decrementValue } from 'utils/decrementValue'


const firestoreDocument = functions.firestore.document('postCommentReplies/{replyId}')
export const listener = firestoreDocument.onDelete(async (snap, context) => {
  try {
    const { commentId } = snap.data()
    const docRef = admin.firestore().collection('postComments').doc(commentId)
    await decrementValue({ docRef, key: 'comments' })
    return
  }
  catch (e) {
    console.error('postCommentReplies delete Error: ', e)
    return
  }
})
