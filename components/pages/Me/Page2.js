import { Box, Paper } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import Swipers from "../../Swipers";
import { ManualFractionPage2 } from "./ManualFraction";

export default function Page2(props) {
  return (
    <>
      <Paper style={{ width: 1000, height: 1000 }}>
        <Swipers>
          <SwiperSlide>1</SwiperSlide>
          <SwiperSlide>2</SwiperSlide>
        </Swipers>

        <ManualFractionPage2 />
      </Paper>
    </>
  );
}
