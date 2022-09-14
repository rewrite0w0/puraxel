import "styles/globals.css";
// import "public/globals.css";
import Layout from "components/layout/Layout";
import Head from "next/head";
import "swiper/css/bundle";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "@mui/material";
// import "@mui/icons-material";
// import "@emotion/react";
// import "@emotion/styled";
import { Provider } from "jotai";
import * as gtag from "lib/gtag";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

import {
  BrowserView,
  MobileView,
  isMobile,
  isTablet,
} from "react-device-detect";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const MINHEIGHT = 720;
  const MINWIDTH = 1024;
  const REDIRECT_MOBILE = "https://lmdtwoo.netlify.app/";

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    window.onresize = function (e) {
      // console.log(e);
      // console.log(window.innerHeight);
      // console.log(window.innerWidth);

      window.innerHeight < MINHEIGHT
        ? (location.href = REDIRECT_MOBILE)
        : undefined;
      window.innerWidth < MINWIDTH
        ? (location.href = REDIRECT_MOBILE)
        : undefined;
    };
  });

  return !isMobile || !isTablet ? (
    <BrowserView>
      <Provider>
        <Layout>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </BrowserView>
  ) : (
    <>{(location.href = REDIRECT_MOBILE)}</>
  );
}

export default MyApp;
