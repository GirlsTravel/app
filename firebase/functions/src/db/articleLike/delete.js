import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { decrementValue } from 'utils/decrementValue'


const firestoreDocument = functions.firestore.document('articleLike/{articleLikeId}')
export const listener = firestoreDocument.onDelete(async (snap, context) => {
  try {
    const { articleId, commentId } = snap.data()
    const docRef = commentId ?
      admin.firestore().collection('articleComment').doc(commentId) :
      admin.firestore().collection('article').doc(articleId)
    await decrementValue({ docRef, key: 'likes' })
    return
  }
  catch (e) {
    console.error('articleLike delete Error: ', e)
    return
  }
})
