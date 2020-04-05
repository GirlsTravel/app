import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { incrementValue } from 'utils/incrementValue'


const firestoreDocument = functions.firestore.document('articleComment/{articleCommentId}')
export const listener = firestoreDocument.onCreate(async (snap, context) => {
  try {
    const { articleId } = snap.data()
    const docRef = admin.firestore().collection('article').doc(articleId)
    await incrementValue({ docRef, key: 'comments' })
    return
  }
  catch (e) {
    console.error('articleComment create Error: ', e)
    return
  }
})
