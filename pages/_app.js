import "../styles.scss";

import Router from "next/router";
import React from "react";

import { useEffect } from "react";

import { DEFAULT_SEO } from "../config";

import Head from "next/head";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url)
  //   }
  //   Router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     Router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, []);

  return (
    <React.Fragment>
      <Head>
        <title key="title">{DEFAULT_SEO.title}</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
