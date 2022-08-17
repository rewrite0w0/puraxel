import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slideStlye from "./Slide.module.css";
import {
  Mousewheel,
  Pagination,
  Keyboard,
  Navigation,
  Autoplay,
  EffectFade,
  Lazy,
} from "swiper";

export default function Swipers({ children }) {
  return (
    <Swiper
      style={{
        // maxHeight: "0%",
        // minHeight: "100%",
        // maxWidth: "0%",
        // minWidth: "100%",
        // width:"100%",
        // height:"0%"
        height: "100vh",
      }}
      slidesPerView={1}
      allowTouchMove={false}
      mousewheel={{ sensitivity: 0.25 }}
      // navigation={true}
      pagination={{
        type: "custom",
        renderCustom: (swiper, current, total) => {
          // console.log(swiper.pagination.textContent);

          // console.log(JSON.stringify(swiper));

          // return current + "    ㅡ    " + total;
          // return `<span style="font-size: 20px; color:rgba(85, 87, 111, 1)">${current} ㅡ</span>&nbsp;<span style="font-size:20px; color:pink;">${total}</span>`;
          // return swiper.pagination.textContent;

          return `<span
          class="customPagination"
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 92px;
            height: 59px;
          "
        >
          <span style="margin-bottom: 8px; width: 38px; height: 22px">
            <svg
              width="40"
              height="22"
              viewBox="0 0 40 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3">
                <rect
                  x="13.75"
                  y="0.75"
                  width="12.5"
                  height="20.5"
                  rx="6.25"
                  stroke="#55576F"
                  stroke-width="1.5"
                />
                <line
                  x1="20.25"
                  y1="4.75"
                  x2="20.25"
                  y2="8.25"
                  stroke="#55576F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M5 7L1 11L5 15"
                  stroke="#55576F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35 7L39 11L35 15"
                  stroke="#55576F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </span>
          <span>
            <span
              style="
                font-size: 20px;
                color: #55576f;
                font-weight: 500;
                letter-spacing: -0.01em;
                margin-right: 8px;
              "
              >${current}<span style="margin-left: 8px">ㅡ</span></span
            ><span
              style="
                font-size: 20px;
                color: #55576f;
                opacity: 0.3;
                font-size: 20px;
                letter-spacing: -0.01em;
                font-weight: 500;
              "
              >${total}</span
            >
          </span>
        </span>`;
        },
        renderFraction: (currentClass, totalClass) => {
          console.log(currentClass, totalClass);
          // return currentClass + " ㅡ " + totalClass;
          return `${currentClass} + " ㅡ " + ${totalClass}`;
          // return <Temp>{currentClass}</Temp>;
        },
      }}
      scrollbar={false}
      keyboard={{ enabled: true, pageUpDown: true, onlyInViewport: true }}
      // onKeyPress={(swiper, keycode) => {
      //   if (keycode === 32) {
      //     console.log(swiper);
      //   }
      // }}

      navigation={{ enabled: true }}
      autoplay={{ delay: 5000 }}
      className={slideStlye.slide}
      speed={1000}
      preloadImages={false}
      // lazy={{
      //   enabled: true,
      //   loadPrevNext: false,
      //   loadPrevNextAmount: 0,
      //   loadOnTransitionStart: false,
      //   checkInView: true,
      // }}
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
      ]}
    >
      {children}
    </Swiper>
  );
}
