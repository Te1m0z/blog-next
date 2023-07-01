import type { AppProps } from 'next/app'
import { UserAuthContext } from '@/contexts/UserAuthContext'
import { useUserData } from '@/hooks/useUserData'
import { Toaster } from 'react-hot-toast'
import AppLayout from '@/components/layout'

/* STYLES */
import '@/styles/app.scss'

const App = ({ Component, pageProps }: AppProps) => {
  const userData = useUserData()

  return (
    <UserAuthContext.Provider value={userData}>
      <AppLayout>
        <Component {...pageProps} />
        <Toaster
          toastOptions={{
            success: {
              position: 'top-center'
            },
            error: {
              position: 'top-right'
            },
          }}
        />
      </AppLayout>
    </UserAuthContext.Provider>
  )
}

export default App
