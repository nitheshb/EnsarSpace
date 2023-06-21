const { initializeApp } = require('firebase/app')

const {
  getFirestore,
  initializeFirestore,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  addDoc,
  collection,
  arrayUnion,
} = require('firebase/firestore')
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth')
require('firebase/firestore')

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
const app = initializeApp(firebaseConfig)
initializeFirestore(app, settings)
const db = getFirestore(app)
const auth = getAuth(app)
module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.', req)

  const empId = req.query.empId || (req.body && req.body.empId)
  const name = req.query.name || (req.body && req.body.name)
  const email = req.query.email || (req.body && req.body.email)
  const password = req.query.password || (req.body && req.body.password)
  const dept = req.query.dept || (req.body && req.body.dept)
  const role = req.query.role || (req.body && req.body.role)
  const orgName = req.query.orgName || (req.body && req.body.orgName)
  const orgId = req.query.orgId || (req.body && req.body.orgId)
  const offPh = req.query.offPh || (req.body && req.body.offPh)
  const perPh = req.query.perPh || (req.body && req.body.perPh)

  let responseMessage = name
    ? 'Hello, ' + name + '. This HTTP triggered function executed successfully.'
    : 'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.'

  try {
    let createdUserResp = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    if (createdUserResp?.user?.uid) {
      const user = createdUserResp?.user
      let addedUserDocR = await createUser({
        empId: user.empId,
        uid: user.uid,
        orgName: orgName,
        orgId: orgId,
        department: [dept],
        roles: [role],
        name: name,
        email: email,
        offPh: offPh,
        perPh: perPh,
      })
      responseMessage = {
        success: true,
        uId: user.uid,
        msg: `Email ${user.email} and ${user.uid} is added Successfully `,
        payload: JSON.stringify(addedUserDocR),
      }
      context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage,
      }
      return responseMessage
    }
  } catch (e) {
    responseMessage = {
      success: false,
      msg: `Error at User Creation ${email} ${password}  ${req.body}`,
      payload: JSON.stringify(e),
    }
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: responseMessage,
    }
    return responseMessage
  }
}

const createUser = async (data) => {
  try {
    const userRef = doc(db, 'users', data.uid)
    const docSnap = await getDoc(userRef)
    if (!docSnap.exists()) {
      await setDoc(userRef, data, { merge: true })
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!')
      return null
    }
  } catch (error) {
    console.log('error in db', error)
  }
}
