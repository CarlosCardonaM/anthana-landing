import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <meta name="theme-color" content="#1A2A44" />
        </Head>
        <body className="bg-[#1A2A44] text-white font-agrandir antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
