import firebase from '../../firebase.config'
import { AuthError, signInWithPhoneNumber, getAuth } from 'firebase/auth'

export const auth = getAuth(firebase.getApp('main'))

export const login = async (phone: string) => {
  const result = {
    user: null,
    loading: true,
    error: <AuthError | null>null,
  }

  try {
    result.user = await signInWithPhoneNumber(auth, phone, null)
  } catch (error) {
    result.error = error
  }

  return result
}
