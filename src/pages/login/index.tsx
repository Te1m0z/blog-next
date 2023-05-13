import React from 'react'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
//import { useRouter } from 'next/navigation'
import { auth } from '../../../firebase.config'
import { useUserAuth } from '../../contexts/UserAuthContext'

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = React.useState<null | string>(null)
  const [isCodeSended, setIsCodeSended] = React.useState<boolean>(false)
  const [errorMessage, setErrorMessage] = React.useState<null | string>(null)

  const phoneRef = React.useRef<null | HTMLInputElement>(null)
  const submitBtnRef = React.useRef<null | HTMLButtonElement>(null)

  const sendCode = () => {
    console.log(phoneRef.current?.value)

    signInWithPhoneNumber(
      auth,
      phoneRef.current.value,
      window.recaptchaVerifier
    )
      .then((confirmResult) => {
        setIsCodeSended(true)
        console.log('code sended')
      })
      .catch((error) => {
        console.log('err', error)
      })
  }

  const user = useUserAuth()

  console.log(user)

  /* Установка капчи */
  React.useEffect(() => {
    if (window.recaptchaVerifier) return
    window.recaptchaVerifier = new RecaptchaVerifier(
      submitBtnRef.current,
      {
        size: 'invisible',
        callback: () => {
          handleSubmit()
        },
      },
      auth
    )
    window.recaptchaVerifier.render()
  }, [])

  return (
    <div>
      <form>
        <input type='text' ref={phoneRef} />
        <button type='submit' ref={submitBtnRef}>
          send
        </button>
      </form>
      {isCodeSended && (
        <div>
          <p>code sended:</p>
          <input type='number' />
        </div>
      )}
    </div>
  )
}
