import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, useRef } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
//const InputMask = require('react-input-mask')
import toast from 'react-hot-toast'
import { auth } from '@/entry/firebase'
import { useForm } from 'react-hook-form'

// Components
import { Button, Input } from '@/components/core'

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

const LoginPage: NextPage = () => {
  /* REFS */

  const verifierRef = useRef<HTMLDivElement | null>(null)
  //const inputPhoneRef = useRef<HTMLInputElement | null>(null)

  /* STATES */

  const [isLoading, setIsLoading]                        = useState<boolean>(false)
  const [error, setError]                                = useState<Error | null>(null)
  const router                                           = useRouter()
  const { handleSubmit, formState: { errors }, control } = useForm()

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
  // const validateLoginForm = () => {
  //   // затем проверки
  //   setError(() => {
  //     // по дефолту перед проверкой - ошибок нет
  //     const updatedErrors = errorDefault
  //     if (!email) updatedErrors.email = true
  //     if (!password) updatedErrors.password = true
  //     return updatedErrors
  //   })

  //   return Object.values(errors).every((isError) => !isError)
  // }

  /* HANDLERS */

  const handlerFormLoginSubmit = (data) => {
    console.log(data)
  }

  // const handlerEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value)
  // }

  // const handlerPasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value)
  // }

  return (
    <div className='login-page'>
      <form onSubmit={handleSubmit(handlerFormLoginSubmit)}>
        {/* {errors.email && (
          <div className='error-message'>{errors.email.message}</div>
        )}
        {errors.password && (
          <div className='error-message'>{errors.password.message}</div>
        )} */}
        <Input
          type={'email'}
          name={'email'}
          label={'Email'}
          control={control}
          rules={{ required: true }}
        />
        <Input
          type={'password'}
          name={'password'}
          label={'Password'}
          control={control}
          rules={{ required: true }}
        />
        <Button>Hello</Button>
      </form>
    </div>
  )
}

export default LoginPage
