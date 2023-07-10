// import { NextPage } from 'next'
// import React, { ReactNode } from 'react'
// import { User } from 'firebase/auth'
// import { useUserData } from '@/hooks/useCurrentUser'

// interface IUserContext {
//   user: User | null | undefined
//   username: null
// }

// const defaultState = {
//   user: null,
//   username: null,
// }

// export const UserAuthContext = React.createContext<IUserContext>(defaultState)

// export const UserAuthProvider: NextPage<{ children: ReactNode }> = ({ children }) => {
//   const userData = useUserData()
//   return (
//     <UserAuthContext.Provider value={userData}>
//       {children}
//     </UserAuthContext.Provider>
//   )
// }
