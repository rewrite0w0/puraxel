import "../styles/globals.css";
import Layout from "components/layout/Layout";
import Head from "next/head";
import "swiper/css/bundle";

import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import Transition from "components/Transition";
import { Provider } from "jotai";

function MyApp({ Component, pageProps, router }) {
  // const getLayOut = Component.getLayOut || ((page) => page);

  // return getLayOut(<Component {...pageProps} />);

  return (
    // <Transition>
    <Provider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    // </Transition>
  );
}

export default MyApp;
