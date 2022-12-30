import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            rel="preconnect"
            href="/fonts/Beastly.otf"
            as="font"
            type="font/otf"
          />
          <link
            rel="preconnect"
            href="/fonts/Silka-Medium.ttf"
            as="font"
            type="font/ttf"
          />
          <link
            rel="preconnect"
            href="/fonts/Silka-Regular.ttf"
            as="font"
            type="font/ttf"
          />
          <link
            rel="preconnect"
            href="/fonts/Moranga-Bold.otf"
            as="font"
            type="font/otf"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
