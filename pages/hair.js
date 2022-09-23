import React from "react";
import Head from "next/head";
import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";
import HairLayout from "components/layout/HairLayout";

import Page1 from "components/pages/Hair/Page1";
import Page2 from "components/pages/Hair/Page2";
import Page3 from "components/pages/Hair/Page3";
import Page4 from "components/pages/Hair/Page4";
import Page5 from "components/pages/Hair/Page5";
import Page6 from "components/pages/puraTech/Page2";

import Oval from "components/pages/Hair/Effect/HairOval";
import ColorOval from "components/pages/Hair/Effect/HairColorOval";

export default function Hair() {
  return (
    <HairLayout>
      <Head>
        <title>Hair</title>
        <meta
          name="description"
          content="PURAXEL HAIR 탈모, 레이저로 극복하다"
        />
        <meta
          name="keywords"
          content="PURAXEL, 탈모, 탈모 레이저, 레이저, 프락셔널 레이저, 전문가, 탈모 전문가"
        />
        <meta name="author" content="LAMEDITECH" />
        <link rel="icon" href="/favicon_64_b.svg" />
      </Head>
      <Swipers>
        <SwiperSlide>
          <Page1 />
          {/* <Oval style={{ top: "66%", left: "60%" }} />
          <ColorOval style={{ top: "34%", left: "80%" }} /> */}
        </SwiperSlide>

        <SwiperSlide>
          <Page2 />
          {/* <Oval style={{ top: "72%", left: "43%" }} />
          <ColorOval style={{ top: "8%", left: "5%" }} /> */}
        </SwiperSlide>

        <SwiperSlide>
          <Page3 />
          {/* <Oval style={{ top: "73.5%", left: "76%" }} />
          <ColorOval style={{ top: "24%", left: "3%" }} /> */}
        </SwiperSlide>

        <SwiperSlide>
          <Page4 />
          {/* <Oval style={{ top: "12%", left: "82%" }} />
          <ColorOval style={{ top: "24%", left: "73%" }} /> */}
        </SwiperSlide>

        <SwiperSlide>
          <Page5 />
          {/* <Oval style={{ top: "74%", left: "52%" }} />
          <ColorOval style={{ top: "74%", left: "59%" }} /> */}
        </SwiperSlide>

        <SwiperSlide>
          <Page6 />
          {/* <Oval style={{ top: "70%", left: "61%" }} />
          <ColorOval style={{ top: "34%", left: "18%" }} /> */}
        </SwiperSlide>
      </Swipers>
    </HairLayout>
  );
}
