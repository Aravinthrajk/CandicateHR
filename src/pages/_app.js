import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";

import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../config/theme";
// import '../global.css'; // Import your global CSS file

import createEmotionCache from "../config/createEmotionCache";
import Header from "@/components/Header";
import DrawerAppBar from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
// import Footer from "@/components/footer";


const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DrawerAppBar />
        <Component {...pageProps} />
        <Cursor/>
        <Footer/>
      </ThemeProvider>
    </CacheProvider>
  );
}
