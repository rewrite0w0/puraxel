import Swipers from "components/Swipers";
import { SwiperSlide } from "swiper/react";

import MeFooterLeft from "components/Footer/MeFooterLeft";
import MeFooterRight from "components/Footer/MeFooterRight";

export default function Me() {
  return (
    <Swipers>
      {/* <MeFooter> */}
      <SwiperSlide>
        ME!
        <MeFooterLeft />
        <MeFooterRight />
      </SwiperSlide>
      <SwiperSlide>ME!ME!</SwiperSlide>
      <SwiperSlide>ME!ME!ME!</SwiperSlide>
      <SwiperSlide>ME!ME!ME!ME!</SwiperSlide>
      {/* </MeFooter> */}
    </Swipers>
  );
}
