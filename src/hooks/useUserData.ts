import { useState, useEffect } from 'react'
import { User, onAuthStateChanged, getAuth } from 'firebase/auth'
import { TOKEN_KEY } from '~/constants'

export default function useUserData() {
  // const [user] = useAuthState(auth)
  // const [username, setUsername] = useState(null)
  const [user, setUser] = useState<User | null | false>(null)

  return { user }
}
