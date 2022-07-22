import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";

import MeFooterLeft from "../components/Footer/MeFooterLeft";

export default function Me() {
  return (
    <Swipers>
      {/* <MeFooter> */}
      <SwiperSlide>
        ME!
        <MeFooterLeft />
      </SwiperSlide>
      <SwiperSlide>ME!ME!</SwiperSlide>
      <SwiperSlide>ME!ME!ME!</SwiperSlide>
      <SwiperSlide>ME!ME!ME!ME!</SwiperSlide>
      {/* </MeFooter> */}
    </Swipers>
  );
}
