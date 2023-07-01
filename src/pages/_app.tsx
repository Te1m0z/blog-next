import type { AppProps } from 'next/app'
import { UserAuthProvider } from '@/context/UserAuthContext'
import { Toaster } from 'react-hot-toast'
import AppLayout from '@/components/layout'
import ViewportProvider from '@/context/ViewportContext'
import { ThemeSiteProvider } from '@/context/ThemeContext'

/* STYLES */
//import '@/styles/app.scss'
import AppStyles from '@/styles/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserAuthProvider>
      <ThemeSiteProvider>
        <AppLayout>
          <ViewportProvider>
            <Component {...pageProps} />
          </ViewportProvider>
          <AppStyles />
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
      </ThemeSiteProvider>
    </UserAuthProvider>
  )
}

export default App
