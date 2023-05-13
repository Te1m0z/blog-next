import React from 'react'
import type { TUserAuth } from '@/typings/User'

const UserContext = React.createContext<TUserAuth | null>(null)

export function UserWrapper({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<TUserAuth | null>(null)

  const login = () => {
    //setUser()
  }

  const logout = () => {
    setUser(false)
  }

  const value = {
    user,
    login,
    logout,
  }

  let sharedState = {
    /* whatever you want */
  }

  return (
    <UserContext.Provider value={sharedState}>{children}</UserContext.Provider>
  )
}

export function useUser() {
  return React.useContext(UserContext)
}
