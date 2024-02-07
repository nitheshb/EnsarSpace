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
  apiKey: "AIzaSyB60IzVnPRXdvSTPJOAIZugVXbrsiwnmkY",
  authDomain: "ensarspacenew1.firebaseapp.com",
  projectId: "ensarspacenew1",
  storageBucket: "ensarspacenew1.appspot.com",
  messagingSenderId: "97808342690",
  appId: "1:97808342690:web:d275ef4982e043840a81fb",
  measurementId: "G-KGP6LHHJDV"
};

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
