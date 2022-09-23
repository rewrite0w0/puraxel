import React from "react";
import Head from "next/head";
import Swipers from "components/Swipers";
import MeLayout from "components/layout/MeLayout";
import { SwiperSlide } from "swiper/react";

import Page1 from "components/pages/Me/Page1";
import Page2 from "components/pages/Me/Page2";
import Page3 from "components/pages/Me/Page3";
import Page4 from "components/pages/Me/Page4";
import Page5 from "components/pages/puraTech/Page2";

import Oval from "components/pages/Me/Effect/MeOval";
import ColorOval from "components/pages/Me/Effect/MeColorOval";

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
          {/* <Oval style={{ top: "60%", left: "74%" }} />
          <ColorOval style={{ top: "28%", left: "69%" }} /> */}
        </SwiperSlide>

        <SwiperSlide>
          <Page2 />
          {/* <Oval style={{ top: "69%", left: "43%" }} />
          <ColorOval style={{ top: "8%", left: "5%" }} /> */}
        </SwiperSlide>

        <SwiperSlide>
          <Page3 />
          {/* <Oval style={{ top: "69%", left: "76%" }} />
          <ColorOval style={{ top: "69%", left: "80%" }} /> */}
        </SwiperSlide>

        <SwiperSlide>
          <Page4 />
          {/* <Oval style={{ top: "74%", left: "80%" }} />
          <ColorOval style={{ top: "74%", left: "73%" }} /> */}
        </SwiperSlide>

        <SwiperSlide>
          <Page5 />
          {/* <Oval style={{ top: "70%", left: "61%" }} />
          <ColorOval style={{ top: "34%", left: "18%" }} /> */}
        </SwiperSlide>
      </Swipers>
    </MeLayout>
  );
}
