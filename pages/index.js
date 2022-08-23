import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";

import _ from "styles/main.module.css";
import Page1 from "components/pages/main/Page1";

export default function Home() {
  return (
    <main className={_.main}>
      <Swipers>
        <SwiperSlide>
          <Page1 />
        </SwiperSlide>
      </Swipers>
    </main>
  );
}
