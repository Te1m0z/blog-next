import { useState, useEffect } from 'react'
import { User, onAuthStateChanged, getAuth } from 'firebase/auth'
import { TOKEN_KEY } from '~/constants'

export default function useUserData() {
  // const [user] = useAuthState(auth)
  // const [username, setUsername] = useState(null)
  const [user, setUser] = useState<User | null | false>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user !== null) {
        setUser(user)
        user.getIdToken().then((idToken) => {
          sessionStorage.setItem(TOKEN_KEY, idToken)
        })
        console.log('User"s state changed: Signed In')
      } else {
        setUser(false)
        sessionStorage.removeItem(TOKEN_KEY)
        console.log('Users state changed: Signed Out')
      }
    })
    return () => unsubscribe()
  }, [])

  return { user }
}
