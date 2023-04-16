import type { AppProps } from 'next/app'

/* STYLES */
import '@/styles/app.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
