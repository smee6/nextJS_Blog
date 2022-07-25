import React from 'react';
import Footer from '../components/footer'
import Header from '../components/header'
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import { wrapper } from "../store";
import '../styles/globals.css'
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';

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

export default wrapper.withRedux(MyApp)

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};