import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import UserConfigProvider from '@/context/UserContext'
import { Toaster } from 'react-hot-toast'
import AppLayout from '@/components/layout'
import ViewportProvider from '@/context/ViewportContext'
import { ThemeSiteProvider } from '@/context/ThemeContext'

/* STYLES */
import AppStyles from '@/styles/app'

export default function MyApp ({ Component, pageProps, router }: AppProps) {
  console.log('app')

  // useEffect(() => {

  // }, [])

  // <Toaster
  //   toastOptions={{
  //     success: {
  //       position: 'top-center'
  //     },
  //     error: {
  //       position: 'top-right'
  //     },
  //   }}
  // />

  return (
    <UserConfigProvider>
      <ThemeSiteProvider>{/* <-- ? */}
        <AppStyles />{/* <-- ? */}
        <AppLayout>
          <ViewportProvider>
            <Component {...pageProps} key={router.route} />
          </ViewportProvider>
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
    </UserConfigProvider>
  )
}
