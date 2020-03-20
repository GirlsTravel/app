import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'

const config = {
  apiKey: 'AIzaSyCmUhXP9198N0y8vjuc0_gEO6XVdGCldws',
  authDomain: 'share-overflow.firebaseapp.com',
  databaseURL: 'https://share-overflow.firebaseio.com',
  projectId: 'share-overflow',
  storageBucket: 'share-overflow.appspot.com',
  messagingSenderId: '150551217325',
  appId: '1:150551217325:web:8401cdcf3f378eaa027224'
}

if (!firebase.apps.length) firebase.initializeApp(config)

// firebase.functions().useFunctionsEmulator('http://localhost:5000')

const storage = firebase.storage()
const firestore = firebase.firestore()
const auth = firebase.auth
const functions = firebase.functions()

export { storage, firestore, auth, functions }
