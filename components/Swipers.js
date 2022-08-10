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

const Temp = (props) => {
  return <h1>{JSON.parse(props.current)}</h1>;
};

export default function Swipers({ children }) {
  return (
    <Swiper
      slidesPerView={1}
      mousewheel={{ sensitivity: 0.25 }}
      // navigation={true}
      pagination={{
        type: "custom",
        renderCustom: (swiper, current, total) => {
          // console.log(swiper);

          console.log(total);
          // return current + "    ㅡ    " + total;
          return `${current} ㅡ ${total}`;
        },
        renderFraction: (currentClass, totalClass) => {
          console.log(currentClass, totalClass);
          // return currentClass + " ㅡ " + totalClass;
          return `${currentClass} + " ㅡ " + ${totalClass}`;
        },
      }}
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
        Pagination,
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
