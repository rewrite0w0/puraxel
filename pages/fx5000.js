import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";
import Page1 from "components/pages/FX5000/Page1";
import Page2 from "components/pages/FX5000/Page2";
import Page3 from "components/pages/FX5000/Page3";
import Page4 from "components/pages/FX5000/Page4";

export default function FX5000() {
  return (
    <Swipers>
      <SwiperSlide>{Page1}</SwiperSlide>
      <SwiperSlide>{Page2}</SwiperSlide>
      <SwiperSlide>{Page3}</SwiperSlide>
      <SwiperSlide>{Page4}</SwiperSlide>
    </Swipers>
  );
}
