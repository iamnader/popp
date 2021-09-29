import StateProvider from 'utils/state/index'; // State management
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from 'styles/mui/theme';
import createEmotionCache from 'styles/mui/createEmotionCache';
import { CeramicProvider, Networks } from 'use-ceramic';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Proof of Personhood Passport</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <CeramicProvider network={Networks.MAINNET}>
          <StateProvider>
            <Component {...pageProps} />
          </StateProvider>
        </CeramicProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
