import Head from "next/head";
import Swipers from "components/Swipers";
import MeLayout from "components/layout/MeLayout";
import { SwiperSlide } from "swiper/react";
import Page1 from "components/pages/Me/Page1";
import Page2 from "components/pages/Me/Page2";
import Page3 from "components/pages/Me/Page3";
import Page4 from "components/pages/Me/Page4";
import CircleFloating from "components/Parts/CircleFloating";
import { useState } from "react";

export default function Me() {
  return (
    <MeLayout>
      <Head>
        <title>팅팅팅팅 탱탱탱탱</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Swipers>
        <SwiperSlide>
          <Page1 />
        </SwiperSlide>
        <SwiperSlide>
          {/* {window.screen.width > 1000 ? <Page2 /> : <Page3 />} */}
          <Page2 />
        </SwiperSlide>

        {/* <SwiperSlide>
          <Page3 />
        </SwiperSlide> */}

        {/* <SwiperSlide>
          <Page4 />
        </SwiperSlide> */}
      </Swipers>
    </MeLayout>
  );
}
