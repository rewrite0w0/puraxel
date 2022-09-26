import Head from "next/head";
import React, { useEffect, useState } from "react";

import FX5000Layout from "components/layout/FX5000Layout";
import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";

import Page1 from "components/pages/FX5000/Page1";
import Page2 from "components/pages/FX5000/Page2";
import Page3 from "components/pages/FX5000/Page3";
import Page4 from "components/pages/FX5000/Page4";
import Page5 from "components/pages/FX5000/Page5";

import Page6 from "components/pages/puraTech/Page2";

import Oval from "components/pages/FX5000/Effect/FX5000Oval";
import ColorOval from "components/pages/FX5000/Effect/FX5000ColorOval";

export default function FX5000() {
  // const [realPage, setRealPage] = useState(undefined);

  // console.log(realPage);

  // const A = () => {
  //   return (
  //     <div>
  //       <Oval style={{ top: "72%", left: "67%" }} />
  //       <ColorOval style={{ top: "34%", left: "61%" }} />
  //     </div>
  //   );
  // };

  // const B = () => {
  //   return (
  //     <>
  //       <Oval style={{ top: "0%", left: "0%" }} />
  //       <ColorOval style={{ top: "0%", left: "0%" }} />
  //     </>
  //   );
  // };

  // const L = () => {
  //   return (
  //     <>
  //       <Oval style={{ top: "100%", left: "100%" }} />
  //       <ColorOval style={{ top: "100%", left: "100%" }} />
  //     </>
  //   );
  // };

  // const moveOval = () => {
  //   if (realPage === 0) {
  //     return A();
  //   }
  //   if (realPage === 1) {
  //     return B();
  //   }
  //   if (realPage === 2) {
  //     return L();
  //   }
  // };

  // useEffect(() => {
  //   return moveOval();
  // }, [realPage]);

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

      <Swipers
        onSlideChange={(e) => {
          e.realIndex === 0 ? (
            <ColorOval style={{ top: "72%", left: "67%" }} />
          ) : undefined;
        }}
      >
        <SwiperSlide>
          <Page1 />
          {/* <Oval style={{ top: "72%", left: "67%" }} />
          <ColorOval style={{ top: "34%", left: "61%" }} /> */}
        </SwiperSlide>

        <SwiperSlide>
          <Page2 />
          {/* <Oval style={{ top: "72%", left: "46%" }} />
          <ColorOval style={{ top: "8%", left: "2.5%" }} /> */}
        </SwiperSlide>

        <SwiperSlide>
          <Page3 />
          {/* <Oval style={{ top: "69%", left: "72%" }} />
          <ColorOval style={{ top: "60%", left: "61%" }} /> */}
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
    </FX5000Layout>
  );
}
