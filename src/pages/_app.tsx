import type { AppProps } from 'next/app'
import { UserAuthProvider } from '@/context/UserAuthContext'
import { ThemeSiteProvider } from '@/context/ThemeContext'
import AppLayout from '@/components/layout'
import ViewportProvider from '@/context/ViewportContext'
/* STYLES */
//import AppStyles from '@/styles/app'

import ResetStyles from '@/styles/reset'
import FontsStyles from '@/styles/fonts'
import GlobalStyles from '@/styles/global'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  console.log('When go through pages, its updating ? 0_o')
  return (
      <ThemeSiteProvider>
        <ResetStyles />
        <FontsStyles />
        <GlobalStyles />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeSiteProvider>
  )
}
