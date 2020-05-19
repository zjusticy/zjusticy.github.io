import '../styles.scss'

import Router from 'next/router'

// import { useEffect } from 'react'

// import * as gtag from '../utils/gtag'

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
  	  <Component {...pageProps} />
  	);

}