import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { decrementValue } from 'utils/decrementValue'


const firestoreDocument = functions.firestore.document('articleComment/{articleCommentId}')
export const listener = firestoreDocument.onDelete(async (snap, context) => {
  try {
    const { articleId } = snap.data()
    const docRef = admin.firestore().collection('article').doc(articleId)
    await decrementValue({ docRef, key: 'comments' })
    return
  }
  catch (e) {
    console.error('postComments delete Error: ', e)
    return
  }
})
