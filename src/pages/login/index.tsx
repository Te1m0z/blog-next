import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react'
import cn from 'classnames'
import { signInWithEmailAndPassword } from 'firebase/auth'
//const InputMask = require('react-input-mask')
import toast from 'react-hot-toast'
import { auth } from '@/entry/firebase'
import { useForm } from 'react-hook-form'

// Components
import { Input } from '@/components/core'

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

  const [isLoading, setIsLoading]                         = useState<boolean>(false)
  const [error, setError]                                 = useState<Error | null>(null)
  const router                                            = useRouter()
  const { register, handleSubmit, formState: { errors }, control } = useForm()

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
        {errors.email && (
          <div className='error-message'>{errors.email.message}</div>
        )}
        {errors.password && (
          <div className='error-message'>{errors.password.message}</div>
        )}
        <Input
          name={'email'}
          placeholder={'email'}
          control={control}
          rules={{ required: true }}
        />
        <input
          type='text'
          className={cn({ error: errors.email })}
          {...register('email', {
            required: 'Please enter an name',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        <input
          type='password'
          className={cn({ error: errors.password })}
          {...register('password', {
            required: 'Please enter an password',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          })}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
