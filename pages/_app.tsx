// import App from 'next/app'
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout title="vibesa">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
