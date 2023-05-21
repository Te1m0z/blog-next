import { RecaptchaVerifier, RecaptchaParameters, PhoneAuthProvider } from 'firebase/auth'
import { auth } from '~/firebase.config'

export const loginWithPhone = async ( phoneNumber: string, verifier: RecaptchaVerifier) => {
  try {
    const phoneAuthProvider = new PhoneAuthProvider(auth)
    return phoneAuthProvider.verifyPhoneNumber(phoneNumber, verifier)
  } catch (error) {
    console.log('AuthError error: ', error)
  }
}

export const setRecaptchVerifier = async (container: string | HTMLElement, params: RecaptchaParameters) => {
  return new RecaptchaVerifier(container, params, auth)
}
