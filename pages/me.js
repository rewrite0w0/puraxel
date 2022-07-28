import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";
import MeLayout from "components/layout/MeLayout";
import Page1 from "components/pages/Me/Page1";
import Page2 from "components/pages/Me/Page2";
import Page3 from "components/pages/Me/Page3";
import Page4 from "components/pages/Me/Page4";
import CircleFloating from "components/Parts/CircleFloating";

export default function Me() {
  return (
    <MeLayout>
      <Swipers>
        <SwiperSlide>
          <Page1 />
        </SwiperSlide>
        <SwiperSlide>
          <Page2 />
        </SwiperSlide>
        <SwiperSlide>
          <Page3 />
        </SwiperSlide>
        <SwiperSlide>
          <Page4 />
        </SwiperSlide>
      </Swipers>
    </MeLayout>
  );
}
