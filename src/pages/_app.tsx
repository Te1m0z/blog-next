import type { AppProps } from 'next/app'
import { UserAuthContextProvider } from '../contexts/UserAuthContext'

/* STYLES */
import '@/styles/app.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserAuthContextProvider>
      <Component {...pageProps} />
    </UserAuthContextProvider>
  )
}
