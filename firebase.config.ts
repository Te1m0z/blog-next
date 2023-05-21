import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth, PhoneAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

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

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
//const authProviderPhone = new PhoneAuthProvider(auth)

export { app, auth, db, storage }
