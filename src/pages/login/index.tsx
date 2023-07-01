import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react'
import cn from 'classnames'
import { signInWithEmailAndPassword } from 'firebase/auth'
//const InputMask = require('react-input-mask')
import toast from 'react-hot-toast'
import { auth } from '@/entry/firebase'

type FormErrors = { [key: string]: boolean }

const notifications = {
  success: {
    login: 'You succesfully logged in',
  },
  error: {
    login: 'Wrong login or password',
    some: 'Somethin went wrong',
    email: {
      empty: 'Email can not be empty',
    },
    password: {
      empty: 'Password can not be empty',
    },
    code: 'Wrong code',
  },
}

const errorDefault = {
  email: false,
  password: false,
}

const LoginPage: NextPage = () => {
  /* REFS */

  const verifierRef = useRef<HTMLDivElement | null>(null)
  //const inputPhoneRef = useRef<HTMLInputElement | null>(null)

  /* STATES */

  // телефон
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setError] = useState<FormErrors>(errorDefault)

  const router = useRouter()

  /* HOOKS */

  // useEffect(() => {
  //   console.log('router')
  //   const isLoggedIn = false
  //   if (isLoggedIn) router.push('/')
  // }, [router])

  /* METHODS */

  // const login = async () => {
  //   try {
  //     const response = await signInWithEmailAndPassword(auth, email, password)
  //     console.log(response)
  //   } catch (error) {
  //     toast.error(notifications.error.some)
  //     console.log(error)
  //   }
  // }

  // Проверка полей формы
  // true - проверка успешно прошла
  // false - есть ошибки
  const validateLoginForm = () => {
    // затем проверки
    setError(() => {
      // по дефолту перед проверкой - ошибок нет
      const updatedErrors = errorDefault
      if (!email) updatedErrors.email = true
      if (!password) updatedErrors.password = true
      return updatedErrors
    })

    return Object.values(errors).every((isError) => !isError)
  }

  /* HANDLERS */

  const handlerFormPhoneSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    console.log(validateLoginForm())
    //if (!validateLoginForm()) return
    //login()
  }

  const handlerEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlerPasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <div className='login-page'>
      <div ref={verifierRef}></div>
      <form onSubmit={handlerFormPhoneSubmit}>
        <input
          type='text'
          value={email}
          onInput={handlerEmailInput}
          className={cn({ error: errors.email })}
        />
        <input
          type='text'
          value={password}
          onInput={handlerPasswordInput}
          className={cn({ error: errors.password })}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
