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
import { useMediaQuery } from "react-responsive";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const MINHEIGHT = 720;
  const MINWIDTH = 1024;
  const REDIRECT_MOBILE = "https://lmdtwoo.netlify.app/";

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(gtag.pageView(url));
      gtag.pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const reSizeDetector = () => {
    window.onresize = function (e) {
      window.innerHeight < MINHEIGHT
        ? (location.href = REDIRECT_MOBILE)
        : undefined;
      window.innerWidth < MINWIDTH
        ? (location.href = REDIRECT_MOBILE)
        : undefined;
    };
  };

  const reSizeHandler = (e) => {
    window.onresize = function (e) {
      window.innerHeight < MINHEIGHT
        ? (location.href = REDIRECT_MOBILE)
        : undefined;
      window.innerWidth < MINWIDTH
        ? (location.href = REDIRECT_MOBILE)
        : undefined;
    };
  };

  useEffect(() => {
    const windowSizeDetectCondition =
      window.innerHeight < MINHEIGHT || window.innerWidth < MINWIDTH;
    // 초기 접속시 크기 판별
    // window.innerHeight < MINHEIGHT
    //   ? (location.href = REDIRECT_MOBILE)
    //   : undefined;
    // window.innerWidth < MINWIDTH
    // ? (location.href = REDIRECT_MOBILE)
    // : undefined;
    windowSizeDetectCondition ? (location.href = REDIRECT_MOBILE) : undefined;
  }, []);

  useEffect(() => {
    // 접속 이후 크기 판별

    const windowSizeDetectConditionForRedirect =
      window.innerHeight < MINHEIGHT || window.innerWidth < MINWIDTH;

    windowSizeDetectConditionForRedirect ? undefined : reSizeHandler();
  }, []);

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
