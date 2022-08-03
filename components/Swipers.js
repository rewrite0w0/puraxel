import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slideStlye from "./Slide.module.css";
import {
  Mousewheel,
  Pagination,
  Keyboard,
  Navigation,
  Autoplay,
  EffectFade,
} from "swiper";

export default function Swipers({ children }) {
  return (
    <Swiper
      slidesPerView={1}
      mousewheel={{ sensitivity: 0.25 }}
      // navigation={true}
      // pagination={{
      //   type: "custom",
      //   renderCustom: (swiper, current, total) => {
      //     return current + "    ㅡ    " + total;
      //   },
      // }}
      scrollbar={false}
      keyboard={{ enabled: true, pageUpDown: true }}
      autoplay={{ delay: 500000 }}
      className={slideStlye.slide}
      speed={50}
      rewind={true}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      modules={[
        Mousewheel,
        // Pagination,
        Keyboard,
        Autoplay,
        Navigation,
        EffectFade,
      ]}
    >
      {children}
    </Swiper>
  );
}
