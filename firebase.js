import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBfGwmAF6g1yJCiB9nE9zwra4JWh3qa-YU',
  authDomain: 'whatsapp-clone-c42a4.firebaseapp.com',
  projectId: 'whatsapp-clone-c42a4',
  storageBucket: 'whatsapp-clone-c42a4.appspot.com',
  messagingSenderId: '990911877508',
  appId: '1:990911877508:web:69003a78607edd586a0dd1',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
