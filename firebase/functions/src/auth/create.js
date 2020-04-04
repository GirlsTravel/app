import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { uniqueNamesGenerator, adjectives, colors, names } from 'unique-names-generator'

// Creates a random, unique name
const generateUsername = () =>
  uniqueNamesGenerator({
    dictionaries: [colors, names],
    length: 2,
    separator: ''
  })

// add user to database collection
const createUser = async ({ uid }) => {
  const docRef = admin
    .firestore()
    .collection('users')
    .doc(uid)

  const data = {
    uid,
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
    const { uid } = user
    await createUser({ uid })
  } catch (e) {
    console.error('catch error: ', e)
  }
})
