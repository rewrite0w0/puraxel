import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slideStlye from "styles/Slide.module.css";
import { Mousewheel, Pagination, Keyboard, Navigation, Autoplay } from "swiper";

export default function Swipers({ children }) {
  return (
    <Swiper
      slidesPerView={1}
      mousewheel={{ sensitivity: 0.25 }}
      navigation={true}
      scrollbar={false}
      keyboard={{ enabled: true, pageUpDown: true }}
      autoplay={{ delay: 50000 }}
      className={slideStlye.slide}
      speed={1000}
      rewind={true}
      modules={[Mousewheel, Pagination, Keyboard, Autoplay, Navigation]}
    >
      {children}
    </Swiper>
  );
}
