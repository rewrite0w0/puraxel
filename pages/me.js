import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";
import MeFooter from "../components/Footer/MeFooter";

export default function Me() {
  return (
    <Swipers>
      <MeFooter>
        <SwiperSlide>ME!</SwiperSlide>
        <SwiperSlide>ME!ME!</SwiperSlide>
        <SwiperSlide>ME!ME!ME!</SwiperSlide>
      </MeFooter>
    </Swipers>
  );
}
