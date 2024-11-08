import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <script src="https://assets.adobedtm.com/6d8e00a15d8e/f95a5b2e64ec/launch-4c1c95261a08-development.min.js" async></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
