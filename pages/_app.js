import React from 'react';
import Footer from '../components/footer'
import Header from '../components/header'
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css'
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import Router from 'next/router';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


config.autoAddCss = false

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return <>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <Container maxWidth="md">
          <CssBaseline />
          <Header></Header>
          <Component {...pageProps} />
          <Footer></Footer>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  </>
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};