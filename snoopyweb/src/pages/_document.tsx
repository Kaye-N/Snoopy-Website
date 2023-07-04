import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href='https://unpkg.com/css.gg@2.0.0/icons/css/play-button-o.css' rel='stylesheet'/>
        <link href='https://unpkg.com/css.gg@2.0.0/icons/css/log-off.css' rel='stylesheet'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
