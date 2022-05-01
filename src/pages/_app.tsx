import { AppProps } from 'next/app';
import Head from 'next/head';
import '../../public/css/reset.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>소셜 소설</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
