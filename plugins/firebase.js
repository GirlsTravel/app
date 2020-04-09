import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

const prodConfig = {
  apiKey: 'AIzaSyAa4jRHDqgEpkyWhbRR1L15BfzWuU6hYeo',
  authDomain: 'girls-travel-co.firebaseapp.com',
  databaseURL: 'https://girls-travel-co.firebaseio.com',
  projectId: 'girls-travel-co',
  storageBucket: 'girls-travel-co.appspot.com',
  messagingSenderId: '1001380734364',
  appId: '1:1001380734364:web:994e56a46216c58ff1d459'
}

const devConfig = {
  apiKey: 'AIzaSyDZ0EkjpJeEN8Ho7PK-DCd4qZgxfDwN_JY',
  authDomain: 'girls-travel-co-dev.firebaseapp.com',
  databaseURL: 'https://girls-travel-co-dev.firebaseio.com',
  projectId: 'girls-travel-co-dev',
  storageBucket: 'girls-travel-co-dev.appspot.com',
  messagingSenderId: '759661404696',
  appId: '1:759661404696:web:71e834895529129be7996d'
}

const isProd = process.env.NODE_ENV === 'production'
console.log('isProd: ', isProd)

if (!firebase.apps.length)
  firebase.initializeApp(isProd ? prodConfig : devConfig)

// if (!firebase.apps.length) firebase.initializeApp(devConfig)

// firebase.functions().useFunctionsEmulator('http://localhost:5000')

const storage = firebase.storage()
const firestore = firebase.firestore()
const auth = firebase.auth
const functions = firebase.functions()

export { storage, firestore, auth, functions }
