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
import Page22 from "components/pages/FX5000/temp.Page2";
import Oval from "components/Parts/Oval";

export default function FX5000() {
  return (
    <FX5000Layout>
      <Head>
        <title>55555555555555555555555555555555</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Swipers>
        <SwiperSlide>
          <Page0 />
          <Oval
            startX={0}
            startY={0}
            EndX={1191}
            EndY={686}
            // pause={ovalStart === "page1" ? false : true}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Page22 />
        </SwiperSlide>
        {/* <SwiperSlide>{Page1}</SwiperSlide> */}
        <SwiperSlide>
          <Page2 />
          <Oval
            startX={618}
            startY={822}
            EndX={822}
            EndY={618}
            // pause={ovalStart === "page1" ? false : true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Page3 />
          <Oval
            startX={822}
            startY={618}
            EndX={1434}
            EndY={728}
            // pause={ovalStart === "page1" ? false : true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Page4 />
          <Oval
            startX={1434}
            startY={728}
            EndX={612}
            EndY={235}
            // pause={ovalStart === "page1" ? false : true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Page5 />
          <Oval
            startX={612}
            startY={235}
            EndX={396}
            EndY={499}
            // pause={ovalStart === "page1" ? false : true}
          />
        </SwiperSlide>
      </Swipers>
    </FX5000Layout>
  );
}
