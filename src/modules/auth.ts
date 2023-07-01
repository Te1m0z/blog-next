import { ApplicationVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '@/entry/firebase'

export const fbLoginWithPhone = async (phone: string, provider: ApplicationVerifier) => {
  try {
    return await signInWithPhoneNumber(auth, phone, provider)
  } catch (error) {
    return error
  }
}

export const fbLogout = async (): Promise<void> => {
  try {
    return await auth.signOut()
  } catch (error) {
    console.log(error)
  }
}
