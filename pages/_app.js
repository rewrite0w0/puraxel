import Head from "next/head";
import "styles/globals.css";
import "swiper/css/bundle";
import Layout from "components/layout/Layout";
import Transition from "components/Transition";

function MyApp({ Component, pageProps, router }) {
  // const getLayOut = Component.getLayOut || ((page) => page);

  // return getLayOut(<Component {...pageProps} />);

  return (
    <Transition>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Transition>
  );
}

export default MyApp;
