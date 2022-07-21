import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import slideStlye from "styles/Slide.module.css";
import { Mousewheel, Pagination, Keyboard, Navigation, Autoplay } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        mousewheel={{ sensitivity: 0.12 }}
        pagination={{
          clickable: true,
        }}
        keyboard={{ enabled: true, pageUpDown: true }}
        autoplay={{ delay: 100 }}
        className={slideStlye.slide}
        speed={1000}
        rewind={true}
        modules={[Mousewheel, Pagination, Keyboard, Navigation, Autoplay]}
      >
        <SwiperSlide style={{ background: "greenyellow" }}></SwiperSlide>
        <SwiperSlide style={{ background: "pink" }}>Slide 2</SwiperSlide>
        <SwiperSlide style={{ background: "green" }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ background: "hotpink" }}>Slide 4</SwiperSlide>
        <SwiperSlide style={{ background: "skyblue" }}>Slide 5</SwiperSlide>
        <SwiperSlide style={{ background: "yellow" }}>Slide 6</SwiperSlide>
        <SwiperSlide style={{ background: "gray" }}>Slide 7</SwiperSlide>
        <SwiperSlide style={{ background: "#f0a0f9" }}>Slide 8</SwiperSlide>
        <SwiperSlide style={{ background: "tomato" }}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
