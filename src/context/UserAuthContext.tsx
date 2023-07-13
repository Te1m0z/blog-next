import { NextPage } from 'next'
import { ReactNode, createContext, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { User, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'
import { TOKEN_KEY } from '~/constants'


type TUser = User | null

interface IUserContext {
  user: TUser
  setUser: Dispatch<SetStateAction<TUser>>
}

const defaultState = {
  user: null,
  setUser: () => {},
}

export const UserAuthContext = createContext<IUserContext>(defaultState)

export const UserAuthProvider: NextPage<{ children: ReactNode }> = ({ children }) => {
  /* STATES */
  const [user, setUser] = useState<User | null>(null)

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user !== null) {
  //       setUser(user)
  //       user.getIdToken().then((idToken) => {
  //         sessionStorage.setItem(TOKEN_KEY, idToken)
  //       })
  //       console.log('User"s state changed: Signed In')
  //     } else {
  //       setUser(false)
  //       sessionStorage.removeItem(TOKEN_KEY)
  //       console.log('Users state changed: Signed Out')
  //     }
  //   })
  //   // onmount
  //   return unsubscribe
  // }, [])

  const logout = () => {}

  return (
    <UserAuthContext.Provider value={{ user, setUser }}>
      {children}
    </UserAuthContext.Provider>
  )
}
