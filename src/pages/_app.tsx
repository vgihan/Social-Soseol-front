import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import '../../public/css/reset.css';
import store from '../store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>소셜 소설</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
