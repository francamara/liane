import * as React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import theme from '../config/theme'
import createEmotionCache from '../config/createEmotionCache'
import '../styles/globals.css'
import '../styles/header.css'
import '../styles/navbar.css'
import '../styles/counseling.css'
import '../styles/bannerpodcast.css'
import '../styles/aboutme.css'
import '../styles/ayudarte.css'
import '../styles/faq.css'
import '../styles/footer.css'
import '../styles/mensaje.css'
import '../styles/dashboard.css'
import '../styles/blog.css'
import { SessionProvider } from 'next-auth/react'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()


export default function MyApp(props) {
  /*eslint-disable */
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SessionProvider>

          <Component {...pageProps} />

        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
