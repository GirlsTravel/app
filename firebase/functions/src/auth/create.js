import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { uniqueNamesGenerator, adjectives, colors, names } from 'unique-names-generator'

// Creates a random, unique name
const generateUsername = () =>
  uniqueNamesGenerator({
    dictionaries: [adjectives, names],
    length: 2,
    separator: ''
  })

// add user to database collection
const createUser = async ({ uid, email, emailVerified }) => {
  const docRef = admin
    .firestore()
    .collection('users')
    .doc(uid)

  const data = {
    uid,
    email,
    emailVerified,
    firstName: '',
    lastName: '',
    username: generateUsername(),
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
