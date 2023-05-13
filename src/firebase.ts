import * as firebase from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
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

export const app = firebase.getApps().length
  ? firebase.getApp('main')
  : firebase.initializeApp(firebaseConfig, 'main')

// Auth exports
export const auth = getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider()

// Firestore exports
export const firestore = getFirestore(app)
// export const serverTimestamp = firestore.FieldValue.serverTimestamp
// export const fromMillis = firebase.firestore.Timestamp.fromMillis
// export const increment = firebase.firestore.FieldValue.increment

// Storage exports
export const storage = getStorage(app)
//export const STATE_CHANGED = storage.TaskEvent.STATE_CHANGED
//export const STATE_CHANGED = TaskEvent.STATE_CHANGED

/// Helper functions

/**
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users')
  const query = usersRef.where('username', '==', username).limit(1)
  const userDoc = (await query.get()).docs[0]
  return userDoc
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data()
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  }
}
