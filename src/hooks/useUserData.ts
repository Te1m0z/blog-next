import React from 'react'
import { auth, firestore } from '@/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { collection, doc } from 'firebase/firestore'

export function useUserData() {
  const [user] = useAuthState(auth)
  const [username, setUsername] = React.useState(null)

  React.useEffect(() => {
    // turn off realtime subscription
    let unsubscribe

    if (user) {
      const refCol = collection(firestore, 'users')
      console.log(refCol)
      //   const ref = doc(firestore, 'users')
      //   unsubscribe = ref.onSnapshot((doc) => {
      //     setUsername(doc.data()?.username)
      //   })
    } else {
      setUsername(null)
    }

    return unsubscribe
  }, [user])

  return { user, username }
}
