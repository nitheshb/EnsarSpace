// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, initializeFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// import { initializeApp } from 'firebase-admin/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//
const firebaseConfig = {
  apiKey: 'AIzaSyANYyTx06DsGPRERNipL3ahWv2gTXSu8LU',
  authDomain: 'ensar-space.firebaseapp.com',
  projectId: 'ensar-space',
  storageBucket: 'ensar-space.appspot.com',
  messagingSenderId: '519786637049',
  appId: '1:519786637049:web:013048b1e92b3593636428',
  measurementId: 'G-0B0R3VR78D',
}

const settings = {
  experimentalForceLongPolling: true,
}
// Initialize Firebase

const app = initializeApp(firebaseConfig)
// initializeFirestore(app, settings)

// firebase.firestore().settings({ experimentalForceLongPolling: true });
// const db = getFirestore(app)
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
})
const storage = getStorage()

// export const auth = app.auth()
const auth = getAuth()
const analytics = getAnalytics(app)

export { auth, db, storage }
