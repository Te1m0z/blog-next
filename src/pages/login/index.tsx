import type { NextPage } from 'next'
//import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import { RecaptchaVerifier } from 'firebase/auth'
import { auth } from '~/firebase.config'
import { loginWithPhone } from '@/services/auth'
//import LogInForm from '@/components/forms/LogInForm'

const LoginPage: NextPage = () => {
  //const router = useRouter()
  const [phone, setPhone] = useState<string>('')
  const [verifier, setVerifier] = useState<RecaptchaVerifier | null>(null)
  const verifierContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // const isLoggedIn = false
    // if (isLoggedIn) router.push('/')
    if (!verifier && verifierContainerRef.current) {
      const verifier = new RecaptchaVerifier(
        verifierContainerRef.current,
        { size: 'invisible' },
        auth
      )
      setVerifier(verifier)
    }
  }, [verifier])

  const handleLogin = async (phoneNumber: string) => {
    if (!verifier) return
    try {
      const r = await loginWithPhone(phoneNumber, verifier)
      console.log(r)
      // Verification code sent, handle the next steps
    } catch (error) {
      console.error('Error logging in with phone number:', error)
    }
  }

  return (
    <div>
      <div ref={verifierContainerRef}></div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleLogin(phone)
        }}
      >
        <input
          type='text'
          onInput={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder='Phone number'
        />
        <button type='submit'>Login with Phone Number</button>
      </form>
    </div>
  )
}

export default LoginPage
