import type { AppProps } from 'next/app'
import { UserAuthProvider } from '@/context/UserAuthContext'
import { ThemeSiteProvider } from '@/context/ThemeContext'
import AppLayout from '@/components/layout'
import ViewportProvider from '@/context/ViewportContext'
import AppToaster from '@/components/AppToaster'

/* STYLES */
import AppStyles from '@/styles/app'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <UserAuthProvider>
        <ThemeSiteProvider>
          <AppStyles />
          <AppLayout>
            <ViewportProvider>
              <Component {...pageProps} key={router.route} />
            </ViewportProvider>
          </AppLayout>
        </ThemeSiteProvider>
      </UserAuthProvider>
      <AppToaster />
    </>
  )
}
