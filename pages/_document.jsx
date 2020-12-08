import Document, { Head, Main, NextScript, Html } from "next/document";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Returns an object like: { html, head, errorHtml, chunks, styles }
    return renderPage();
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Airbnb</title>
          <link rel="stylesheet" href="./css/reset.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
