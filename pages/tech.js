import Head from "next/head";
import TechLayout from "components/layout/TechLayout";
import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";
import Page1 from "components/pages/puraTech/Page1";
import Page2 from "components/pages/puraTech/Page2";

import Oval from "components/Parts/Oval";

export default function PuraTech() {
  return (
    <TechLayout>
      <Head>
        <title>테크</title>
        <meta name="description" content="레이저 전문집단 PURAXEL의 기술" />
        <meta
          name="keywords"
          content="PURAXEL, FX-5000, FX-1000, PURAXEL-ME, PURAXEL-HAIR, 레이저, 프락셔널 레이저, 전문가, 탈모, 피부 전문가, 레이저 기술"
        />
        <meta name="author" content="LAMEDITECH" />
        <link rel="icon" href="/favicon_64_b.svg" />
      </Head>
      <Swipers>
        <SwiperSlide>
          <Page1 />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Page2 />
        </SwiperSlide> */}
      </Swipers>
    </TechLayout>
  );
}
