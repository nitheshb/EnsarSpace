// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, initializeFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC9LO1A37tnA0L83yxrzUr7895AJy69ODw',
  authDomain: 'ensarspace.firebaseapp.com',
  projectId: 'ensarspace',
  storageBucket: 'ensarspace.appspot.com',
  messagingSenderId: '912759673013',
  appId: '1:912759673013:web:e19c3e9f611e100d2aeefc',
  measurementId: 'G-1Z5R9EE8T2',
}

const settings = {
  experimentalForceLongPolling: true,
}


const app = initializeApp(firebaseConfig)

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
})
const storage = getStorage()


const auth = getAuth()
const analytics = getAnalytics(app)

export { auth, db, storage }
