import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../utils/gtag";
import { DEFAULT_SEO } from "../config";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <meta
            key="description"
            name="description"
            content={DEFAULT_SEO.description}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
