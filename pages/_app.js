import Head from 'next/head';
import Layout from '../components/Elements/Layout';
import '@/styles/globals.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <Head>
        <meta charset="UTF-8" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}