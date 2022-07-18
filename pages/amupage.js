import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import slideStlye from "../styles/Slide.module.css";
import { Mousewheel, Pagination, Keyboard, Navigation, Autoplay } from "swiper";
import CircleFloating from "../component/CircleFloating";

export default function Amupage() {
  return (
    <>
      <header>
        <h1>HEY</h1>
      </header>
      <Swiper
        slidesPerView={1}
        // centeredSlides={true}
        mousewheel={{ sensitivity: 0.12 }}
        pagination={{
          clickable: true,
          type: "progressbar",
        }}
        // navigation={true}
        keyboard={{ enabled: true, pageUpDown: true }}
        autoplay={{ delay: 2000 }}
        // style={{ height: 1000, width: 2000 }}
        className={slideStlye.slide}
        speed={2000}
        rewind={true}
        // loop={true}
        modules={[Mousewheel, Pagination, Keyboard, Navigation, Autoplay]}
      >
        <SwiperSlide style={{ background: "greenyellow" }}>
          <header>헤더헤더</header>
          <CircleFloating height={160} width={200} blur={50} />
          <main>메인메인</main>
          <footer>푸터푸터</footer>
        </SwiperSlide>
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
