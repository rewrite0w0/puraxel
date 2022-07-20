import Head from "next/head";
import "../styles/globals.css";
import "swiper/css/bundle";

import Transition from "../components/Transition";
import "../styles/transition.css";

function MyApp({ Component, pageProps, router }) {
  // const getLayOut = Component.getLayOut || ((page) => page);

  // return getLayOut(<Component {...pageProps} />);

  return (
    <Transition>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Transition>
  );
}

export default MyApp;
