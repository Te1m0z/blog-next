import React from 'react'

import type IUser from '../typings/User'
import { logInWithPhone } from '../modules/auth'

const UserAuthContext = React.createContext<IUser | null>(null)

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = React.useState<IUser | null>(null)

  const defaultState = {
    user,
    logInWithPhone
  }

  return (
    <UserAuthContext.Provider value={defaultState}>
      {children}
    </UserAuthContext.Provider>
  )
}

export function useUserAuth() {
  return React.useContext(UserAuthContext)
}
