'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import React, { useEffect } from 'react';
import { AppProps } from "next/app";
import TagManager from "react-gtm-module";

// import dotenv from 'dotenv';
// dotenv.config();

const App = ({ Component, pageProps }: AppProps) => {

  // const gtmId = process.env.GTM_ID;
  // console.log(gtmId);

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-WV45BL3' });
    // TagManager.initialize({ gtmId: process.env.GTM_ID });
    
  }, []);

  return <Component {...pageProps} />;
};

export default App