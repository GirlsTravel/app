import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { incrementValue } from 'utils/incrementValue'


const firestoreDocument = functions.firestore.document('postCommentReplies/{replyId}')
export const listener = firestoreDocument.onCreate(async (snap, context) => {
  try {
    const { commentId } = snap.data()
    const docRef = admin.firestore().collection('postComments').doc(commentId)
    await incrementValue({ docRef, key: 'comments' })
    return
  }
  catch (e) {
    console.error('postCommentReplies create Error: ', e)
    return
  }
})
