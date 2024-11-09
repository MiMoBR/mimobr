import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {

  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head>    
          <Script
            id="adobe-dtm"
            src="https://assets.adobedtm.com/6d8e00a15d8e/f95a5b2e64ec/launch-b6c973b2cdd8-development.min.js"
            strategy="beforeInteractive" // Optional: control execution timing
            async
          />     
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
