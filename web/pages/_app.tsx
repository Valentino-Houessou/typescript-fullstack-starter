import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import "../styles/globals.css";
import theme from '../styles/theme';
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { type EmotionCache } from '@emotion/cache/types';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type ExtendedAppProps = AppProps & {
  emotionCache: EmotionCache
}
function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: ExtendedAppProps) {

  return <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
}

export default MyApp;
