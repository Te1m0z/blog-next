/* eslint-disable import/no-extraneous-dependencies */
// TODO: Eslint throws a weird error, the line above is to fix that.
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

//import 'firebase/firestore'
//import 'firebase/storage'
//import 'firebase/analytics'

import config from './credentials'

const app = !getApps().length ? initializeApp(config) : getApp()
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage }
