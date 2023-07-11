import { Html, Head, Main, NextScript } from 'next/document'
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import AppToaster from '@/components/AppToaster'

export default function MyDocument() {
  return (
    <Html lang='ru'>
      <Head />
      <body>
        <Main />
        <AppToaster />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    }
  } finally {
    sheet.seal()
  }
}
