import type { AppProps } from 'next/app'
import { UserAuthContext } from '@/contexts/UserAuthContext'
import { useUserData } from '@/hooks/useUserData'
import AppLayout from '@/components/layout'

/* STYLES */
import '@/styles/app.scss'

export default function App({ Component, pageProps }: AppProps) {
  const userData = useUserData()

  return (
    <UserAuthContext.Provider value={userData}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </UserAuthContext.Provider>
  )
}
