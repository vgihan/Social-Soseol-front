import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>소셜 소설</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="소설,글,시,사회,소셜,일기,책" />
        <meta name="description" content="📖 사회가 소설을 만든다 - 소셜 소설 📖" />
        {/* <meta name="naver-site-verification" content="bf0aa56a1eb42c038834ca4aafb118b5d8bf15af" /> */}
        {/* <meta name="google-site-verification" content="QL6xJnBIBwJARnRjGuBW1uDQS98EJZFiFUkfUAxJm54" /> */}
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
