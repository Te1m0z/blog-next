import type { AppProps } from 'next/app'
import { UserAuthContextProvider } from '../contexts/UserAuthContext'
import AppLayout from '@/components/layout'

/* STYLES */
import '@/styles/app.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserAuthContextProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </UserAuthContextProvider>
  )
}
