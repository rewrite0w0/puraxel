import Head from "next/head";
import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";
import HairLayout from "components/layout/HairLayout";

import Page3 from "components/pages/Hair/Page3";
import Page4 from "components/pages/Hair/Page4";
import Page0 from "components/pages/Hair/Page1";
import Page22 from "components/pages/Hair/Page2";
import Page5 from "components/pages/Hair/Page5";
import Page6 from "components/pages/puraTech/Page2";
import Oval from "components/Parts/Oval";

export default function Hair() {
  return (
    <HairLayout>
      <Head>
        <title>Hair</title>
        <meta
          name="description"
          content="PURAXEL HAIR 탈모, 레이저로 극복하다"
        />
        <meta
          name="keywords"
          content="PURAXEL, 탈모, 탈모 레이저, 레이저, 프락셔널 레이저, 전문가, 탈모 전문가"
        />
        <meta name="author" content="LAMEDITECH" />
        <link rel="icon" href="/favicon_64_b.svg" />
      </Head>
      <Swipers>
        <SwiperSlide>
          <Page0 />
        </SwiperSlide>

        <SwiperSlide>
          <Page22 />
        </SwiperSlide>
        <SwiperSlide>
          <Page3 />
        </SwiperSlide>
        <SwiperSlide>
          <Page4 />
        </SwiperSlide>
        <SwiperSlide>
          <Page5 />
        </SwiperSlide>

        <SwiperSlide>
          <Page6 />
        </SwiperSlide>
      </Swipers>
    </HairLayout>
  );
}
