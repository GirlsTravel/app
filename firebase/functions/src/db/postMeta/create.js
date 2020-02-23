import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { incrementValue } from 'utils/incrementValue'


const firestoreDocument = functions.firestore.document('postMeta/{metaId}')
export const listener = firestoreDocument.onCreate(async (snap, context) => {
  try {
    const { questionId, commentId } = snap.data()
    const docRef = commentId ?
      admin.firestore().collection('postComments').doc(commentId) :
      admin.firestore().collection('posts').doc(questionId)
    await incrementValue({ docRef, key: 'likes' })
    return
  }
  catch (e) {
    console.error('postMeta create Error: ', e)
    return
  }
})
