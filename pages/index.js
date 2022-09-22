import Head from "next/head";

import Swipers from "components/pages/main/Swipers";
// import Swipers from "components/Swipers";
// import { SwiperSlide } from "swiper/react";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import _ from "components/Swipers.module.css";

import MainLayout from "components/layout/MainLayout";
import MainInnerLayout from "components/pages/main/MainInnerLayout";

import Page1 from "components/pages/main/Page1";
import page1Style from "components/pages/main/page1.module.css";

import Page2 from "components/pages/main/Page2";
import page2Style from "components/pages/main/page2.module.css";

import Page3 from "components/pages/main/Page3";
import page3Style from "components/pages/main/page3.module.css";

export default function Home() {
  return (
    <Swipers>
      <MainLayout>
        <Head>
          <title>PURAXEL</title>
          <meta
            name="description"
            content="PURAXEL로 홀로 빛나다. 레이저의 미세한 홀이 당신의 피부를 지켜줍니다."
          />
          <meta
            name="keywords"
            content="PURAXEL, 레이저, 프락셔널 레이저, 전문가, 피부 전문가, 레이저 전문"
          />
          <meta name="author" content="LAMEDITECH" />
          <link rel="icon" href="/favicon_64_b.svg" />
        </Head>

        <SwiperSlide>
          <MainInnerLayout image={<Page1 />} class={page1Style.bg} />
        </SwiperSlide>

        <SwiperSlide>
          <MainInnerLayout image={<Page2 />} class={page2Style.bg} />
        </SwiperSlide>

        <SwiperSlide>
          <MainInnerLayout image={<Page3 />} class={page3Style.bg} />
        </SwiperSlide>
      </MainLayout>
    </Swipers>
  );
}
