import Head from "next/head";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import _ from "components/Swipers.module.css";

import {
  Mousewheel,
  Pagination,
  Keyboard,
  Navigation,
  Autoplay,
  EffectFade,
  Lazy,
  Zoom,
} from "swiper";

// import Page0 from "components/pages/main/MainInnerLayout";
// import Page1 from "components/pages/main/Page0";
// import MainLayout from "components/layout/MainLayout";

import Page1 from "components/pages/main/Page1";
import page1Style from "components/pages/main/page1.module.css";

import Page2 from "components/pages/main/Page2";
import page2Style from "components/pages/main/page2.module.css";

import Page3 from "components/pages/main/Page3";
import page3Style from "components/pages/main/page3.module.css";

export default function Swipers() {
  return (
    <Swiper
      // className={_.container}
      style={{ height: "100%", zIndex: 0 }}
      slidesPerView={1}
      allowTouchMove={true}
      mousewheel={{ sensitivity: 0.1 }}
      // navigation={true}
      // zoom={true}
      scrollbar={false}
      keyboard={{ enabled: true, pageUpDown: true, onlyInViewport: true }}
      // navigation={{ enabled: true }}
      autoplay={{ delay: 2000 }}
      speed={2000}
      preloadImages={true}
      lazy={{
        enabled: true,
        loadPrevNext: false,
        loadPrevNextAmount: 0,
        loadOnTransitionStart: false,
        checkInView: true,
      }}
      loop={true}
      rewind={true}
      // effect={"fade"}
      effect={"slide"}
      fadeEffect={{ crossFade: true }}
      modules={[
        Mousewheel,
        Pagination,
        Keyboard,
        Autoplay,
        Navigation,
        EffectFade,
        Lazy,
        Zoom,
      ]}
    >
      <SwiperSlide>
        <Page1 />
      </SwiperSlide>
      <SwiperSlide>
        <Page2 />
      </SwiperSlide>
      <SwiperSlide>
        <Page3 />
      </SwiperSlide>
    </Swiper>
  );
}
