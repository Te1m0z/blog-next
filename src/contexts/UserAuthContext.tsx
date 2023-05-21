import React from 'react'
import { User } from 'firebase/auth'

interface IUserContext {
  user: User | null | undefined
  username: null
}

const defaultState = {
  user: null,
  username: null,
}

export const UserAuthContext = React.createContext<IUserContext>(defaultState)
