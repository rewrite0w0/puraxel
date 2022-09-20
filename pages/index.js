import Head from "next/head";
import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";

import Page1 from "components/pages/main/Page1";
import MainLayout from "components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>PURAXEL</title>
        <meta
          name="description"
          content="PURAXEL로 홀로 빛나다. 레이저의 미세한 홀이 당신의 피부를 지켜줍니다."
        />
        <meta
          name="keywords"
          content="PURAXEL, 레이저, 프락셔널 레이저, 전문가, 피부 전문가, 레이저 전문"
        />
        <meta name="author" content="LAMEDITECH" />
        <link rel="icon" href="/favicon_64_b.svg" />
      </Head>
      <Swipers>
        <SwiperSlide>
          <Page1 />
        </SwiperSlide>
      </Swipers>
    </MainLayout>
  );
}
