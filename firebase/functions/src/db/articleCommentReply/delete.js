import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { decrementValue } from 'utils/decrementValue'


const firestoreDocument = functions.firestore.document('articleCommentReply/{articleCommentReplyId}')
export const listener = firestoreDocument.onDelete(async (snap, context) => {
  try {
    const { commentId } = snap.data()
    const docRef = admin.firestore().collection('articleComment').doc(commentId)
    await decrementValue({ docRef, key: 'comments' })
    return
  }
  catch (e) {
    console.error('articleCommentReply delete Error: ', e)
    return
  }
})
