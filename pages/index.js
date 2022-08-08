import Swipers from "components/Swipers";
import Head from "next/head";
import Image from "next/image";
import mainKr from "public/locales/kr/main";

import tempImage from "src/image/header/puraxel_logo_basic.svg";
import mainImage from "src/image/ME/main_01.png";
import style from "styles/main.module.css";
import Page1 from "components/pages/main/Page1";
import Page2 from "components/pages/main/Page1";
import Page3 from "components/pages/main/Page1";
import Page4 from "components/pages/main/Page1";
import { SwiperSlide } from "swiper/react";
import Page2Parts from "components/pages/FX5000/Page2Parts";

export default function Home() {
  return (
    <main>
      <Swipers>
        <SwiperSlide>{Page1}</SwiperSlide>
        <SwiperSlide>{Page2}</SwiperSlide>
        <SwiperSlide>{Page3}</SwiperSlide>
        <SwiperSlide>{Page4}</SwiperSlide>
      </Swipers>
    </main>
  );
}
