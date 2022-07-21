import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slideStlye from "styles/Slide.module.css";
import { Mousewheel, Pagination, Keyboard, Navigation, Autoplay } from "swiper";

export default function Swipers({ children }) {
  return (
    <Swiper
      slidesPerView={1}
      mousewheel={{ sensitivity: 0.5 }}
      pagination={{
        clickable: true,
      }}
      keyboard={{ enabled: true, pageUpDown: true }}
      autoplay={{ delay: 3000 }}
      className={slideStlye.slide}
      speed={1000}
      rewind={true}
      modules={[Mousewheel, Pagination, Keyboard, Navigation, Autoplay]}
    >
      {children}
    </Swiper>
  );
}
