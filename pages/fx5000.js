import Head from "next/head";
import FX5000Layout from "components/layout/FX5000Layout";
import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";
import Page1 from "components/pages/FX5000/Page1";
import Page2 from "components/pages/FX5000/Page2";
import Page3 from "components/pages/FX5000/Page3";
import Page4 from "components/pages/FX5000/Page4";
import Page5 from "components/pages/FX5000/Page5";
import Page0 from "components/pages/FX5000/temp.Page1";

export default function FX5000() {
  return (
    <FX5000Layout>
      <Head>
        <title>55555555555555555555555555555555</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Swipers>
        <SwiperSlide>{Page0}</SwiperSlide>
        {/* <SwiperSlide>{Page1}</SwiperSlide> */}
        <SwiperSlide>{Page2}</SwiperSlide>
        <SwiperSlide>{Page3}</SwiperSlide>
        <SwiperSlide>{Page4}</SwiperSlide>
        <SwiperSlide>{Page5}</SwiperSlide>
      </Swipers>
    </FX5000Layout>
  );
}
