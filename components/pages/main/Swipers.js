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

import Page0 from "components/pages/main/MainInnerLayout";
import Page1 from "components/pages/main/Page0";
import MainLayout from "components/layout/MainLayout";

export default function Swipers({ children }) {
  return (
    <Swiper
      className={_.container}
      slidesPerView={1}
      allowTouchMove={true}
      mousewheel={{ sensitivity: 0.1 }}
      // navigation={true}
      // zoom={true}
      scrollbar={false}
      keyboard={{ enabled: true, pageUpDown: true, onlyInViewport: true }}
      navigation={{ enabled: true }}
      // autoplay={{ delay: 4000 }}
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
      effect={"fade"}
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
      {children}
    </Swiper>
  );
}
