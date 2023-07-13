import type { AppProps } from 'next/app'
//import { UserAuthProvider } from '@/context/UserAuthContext'
import { ThemeSiteProvider } from '@/context/ThemeContext'
import AppLayout from '@/components/layout'
//import ViewportProvider from '@/context/ViewportContext'
/* STYLES */
import AppStyles from '@/styles/app'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  console.log('When go through pages, its updating ? 0_o')
  return (
    <ThemeSiteProvider>
      <AppStyles /> {/* This component depends on above theme context */}
      <AppLayout>
        <Component {...pageProps} />
        {/* was: <Component {...pageProps} key={router.route} /> */}
      </AppLayout>
    </ThemeSiteProvider>
  )
}
