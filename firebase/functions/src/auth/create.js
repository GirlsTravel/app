import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

// add user to database collection
const createUser = async ({ uid, email, emailVerified }) => {
  const docRef = admin
    .firestore()
    .collection('users')
    .doc()
  const data = {
    uid,
    email,
    emailVerified,
    id: docRef.id,
    firstName: '',
    lastName: '',
    displayName: '',
    photoURL: ''
  }
  await docRef.set(data)
  return data.id
}

export const onAuthCreate = functions.auth.user().onCreate(async (user) => {
  try {
    console.log('user: ', user)
    const { uid, email, emailVerified } = user
    await createUser({ uid, email, emailVerified })
  } catch (e) {
    console.error('catch error: ', e)
  }
})
