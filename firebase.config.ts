import * as firebase from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAEOch__PXgzuF_oRdu8iB5PKKPTLVLsAA',
  authDomain: 'te1m0z-blog.firebaseapp.com',
  databaseURL:
    'https://te1m0z-blog-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'te1m0z-blog',
  storageBucket: 'te1m0z-blog.appspot.com',
  messagingSenderId: '627042806351',
  appId: '1:627042806351:web:523c58713e29e70e4c983a',
}

//if (firebase.getApps().length) return

const app = firebase.initializeApp(firebaseConfig, 'main')

const auth = getAuth(app)

auth.useDeviceLanguage()

export { auth }

export const database = getFirestore(app)

export default app