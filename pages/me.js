import React from "react";
import Head from "next/head";
import Swipers from "components/Swipers";
import MeLayout from "components/layout/MeLayout";
import { SwiperSlide } from "swiper/react";

import Page1 from "components/pages/Me/Page1";
// import Page2 from "components/pages/Me/Page2";
// import Page3 from "components/pages/Me/Page3";
// import Page4 from "components/pages/Me/Page4";
// import Page5 from "components/pages/puraTech/Page2";
import Oval from "components/Parts/Oval";

const Page2 = React.lazy(() => import("components/pages/Me/Page2"));
const Page3 = React.lazy(() => import("components/pages/Me/Page3"));
const Page4 = React.lazy(() => import("components/pages/Me/Page4"));
const Page5 = React.lazy(() => import("components/pages/puraTech/Page2"));

export default function Me() {
  return (
    <MeLayout>
      <Head>
        <title>PURAXEL ME</title>
        <meta
          name="description"
          content="PURAXEL ME 홈 에스테틱 레이저의 시작"
        />
        <meta
          name="keywords"
          content="PURAXEL, PURAXEL ME, FX-1000, 레이저, 프락셔널 레이저, 전문가, 피부 전문가"
        />
        <meta name="author" content="LAMEDITECH" />
        <link rel="icon" href="/favicon_64_b.svg" />
      </Head>
      <Swipers>
        <SwiperSlide>
          <Page1 />
        </SwiperSlide>

        <SwiperSlide>
          <Page2 />
        </SwiperSlide>

        <SwiperSlide>
          <Page3 />
        </SwiperSlide>

        <SwiperSlide>
          <Page4 />
        </SwiperSlide>

        <SwiperSlide>
          <Page5 />
        </SwiperSlide>
      </Swipers>
    </MeLayout>
  );
}
