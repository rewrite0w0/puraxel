import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";
import MeLayout from "components/layout/MeLayout";
import MeFooterLeft from "components/Footer/MeFooterLeft";
import MeFooterRight from "components/Footer/MeFooterRight";

export default function Me() {
  return (
    <MeLayout>
      <Swipers>
        <SwiperSlide>ME!</SwiperSlide>
        <SwiperSlide>ME!ME!</SwiperSlide>
        <SwiperSlide>ME!ME!ME!</SwiperSlide>
        <SwiperSlide>ME!ME!ME!ME!</SwiperSlide>
      </Swipers>
    </MeLayout>
  );
}
