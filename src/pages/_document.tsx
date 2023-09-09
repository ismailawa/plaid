import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src='src="https://web-button.getmati.com/button.js'
          onError={() => {}}
          onReady={() => {}}
        />
      </body>
    </Html>
  );
}
