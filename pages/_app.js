import "styles/globals.css";
import Layout from "components/layout/Layout";
import Head from "next/head";
import "swiper/css/bundle";

import * as gtag from "lib/gtag";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

import { isMobile, isTablet } from "react-device-detect";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
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

  useEffect(() => {
    isMobile || isTablet ? (location.href = REDIRECT_MOBILE) : undefined;
  }, []);

  return (
    <Layout>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
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

      {/* <Script
        strategy="afterInteractive"
        src="http://wcs.naver.net/wcslog.js"
      /> */}
      <Script
        strategy="afterInteractive"
        src="https://wcs.naver.net/wcslog.js"
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if(!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "cbebc90131a410";
            if(window.wcs) {
              wcs_do();
            }`,
        }}
        id="naver"
      />

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
