import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

if (!firebase.apps.length) firebase.initializeApp(config)

// firebase.functions().useFunctionsEmulator('http://localhost:5000')

const storage = firebase.storage()
const firestore = firebase.firestore()
const auth = firebase.auth
const functions = firebase.functions()

export { storage, firestore, auth, functions }
