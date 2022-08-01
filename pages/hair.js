import Head from "next/head";
import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";
import HairLayout from "components/layout/HairLayout";
import Page1 from "components/pages/Hair/Page1";

export default function Hair() {
  return (
    <HairLayout>
      <Head>
        <title>자라나라 머리머리</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Swipers>
        <SwiperSlide>{Page1}</SwiperSlide>
        <SwiperSlide>머리머리</SwiperSlide>
      </Swipers>
    </HairLayout>
  );
}
