import Head from "next/head";
import React from "react";

import FX5000Layout from "components/layout/FX5000Layout";
import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";

import Page1 from "components/pages/FX5000/Page1";
// import Page2 from "components/pages/FX5000/Page2";
// import Page3 from "components/pages/FX5000/Page3";
// import Page4 from "components/pages/FX5000/Page4";
// import Page5 from "components/pages/FX5000/Page5";

// import Page6 from "components/pages/puraTech/Page2";
import Oval from "components/Parts/Oval";

// const FX5000Layout = React.lazy(() => import("components/layout/FX5000Layout"));
// const Swipers = React.lazy(() => import("components/Swipers"));

// const Page1 = React.lazy(() => import("components/pages/FX5000/Page1"));
const Page2 = React.lazy(() => import("components/pages/FX5000/Page2"));
const Page3 = React.lazy(() => import("components/pages/FX5000/Page3"));
const Page4 = React.lazy(() => import("components/pages/FX5000/Page4"));
const Page5 = React.lazy(() => import("components/pages/FX5000/Page5"));
const Page6 = React.lazy(() => import("components/pages/puraTech/Page2"));

export default function FX5000() {
  return (
    <FX5000Layout>
      <Head>
        <title>FX5000</title>
        <meta
          name="description"
          content="PURAXEL FX-5000 피부 전문가를 위한 프락셔널 레이저"
        />
        <meta
          name="keywords"
          content="PURAXEL, FX-5000, 레이저, 프락셔널 레이저, 전문가, 피부 전문가"
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

        <SwiperSlide>
          <Page6 />
        </SwiperSlide>
      </Swipers>
    </FX5000Layout>
  );
}
