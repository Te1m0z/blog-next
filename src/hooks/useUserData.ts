import { useState, useEffect } from 'react'
import { doc, onSnapshot, getFirestore, Unsubscribe } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase'

export default function useUserData() {
  const [user] = useAuthState(auth)
  const [username, setUsername] = useState(null)

  useEffect(() => {
    let unsubscribe: undefined | Unsubscribe

    if (user) {
      const ref = doc(getFirestore(), 'users', user.uid)
      console.log(ref)
      unsubscribe = onSnapshot(ref, (doc) => {
        setUsername(doc.data()?.username)
      })
    } else {
      setUsername(null)
    }

    console.log('useUserData::unsubscribe', unsubscribe)

    return unsubscribe
  }, [user])

  return { user, username }
}
