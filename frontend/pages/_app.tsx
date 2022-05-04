import Head from 'next/head'
import type { AppProps } from 'next/app'
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
