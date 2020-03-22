import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

const config = {
  apiKey: 'AIzaSyAa4jRHDqgEpkyWhbRR1L15BfzWuU6hYeo',
  authDomain: 'girls-travel-co.firebaseapp.com',
  databaseURL: 'https://girls-travel-co.firebaseio.com',
  projectId: 'girls-travel-co',
  storageBucket: 'girls-travel-co.appspot.com',
  messagingSenderId: '1001380734364',
  appId: '1:1001380734364:web:994e56a46216c58ff1d459'
}

if (!firebase.apps.length) firebase.initializeApp(config)

// firebase.functions().useFunctionsEmulator('http://localhost:5000')

const storage = firebase.storage()
const firestore = firebase.firestore()
const auth = firebase.auth
const functions = firebase.functions()

export { storage, firestore, auth, functions }
