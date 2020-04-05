import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { incrementValue } from 'utils/incrementValue'


const firestoreDocument = functions.firestore.document('articleLike/{articleLikeId}')
export const listener = firestoreDocument.onCreate(async (snap, context) => {
  try {
    const { articleId, commentId } = snap.data()
    const docRef = commentId ?
      admin.firestore().collection('articleComment').doc(commentId) :
      admin.firestore().collection('article').doc(articleId)
    await incrementValue({ docRef, key: 'likes' })
    return
  }
  catch (e) {
    console.error('articleLike create Error: ', e)
    return
  }
})
