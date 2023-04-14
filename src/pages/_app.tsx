'use client';

import { useEffect } from "react";
import { AppProps } from "next/app";
import TagManager from "react-gtm-module";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

const App = ({ Component, pageProps }: AppProps) => {

  useEffect(() => {
    TagManager.initialize({ gtmId: `${process.env.gtmID}` });
  }, []);

  return <Component {...pageProps} />;
};

export default App