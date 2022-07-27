import meKr from "public/locales/kr/me.json";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Swipers from "../../Swipers";

const TitleDon = (props) => {
  return (
    <Box>
      <Typography>
        <p>{meKr.Page3Intro}</p>
      </Typography>
      <Typography>
        {meKr.Page3Title1A}
        <b>{meKr.Page3Title1B}</b>
      </Typography>
    </Box>
  );
};

const ExplainDetail = (props) => {
  return (
    // <Swiper>
    //   <SwiperSlide>1</SwiperSlide>
    //   <SwiperSlide>2</SwiperSlide>
    //   <SwiperSlide>3</SwiperSlide>
    // </Swiper>
    <Box
      display={"grid"}
      sx={{
        gridTemplateRows: "1fr 2fr 3fr",
        justifyContent: "center",
        height: "100%",
        margin: "1rem",
      }}
    >
      <Box></Box>
      <Box>
        <Typography></Typography>
      </Box>
      <Box>
        <Typography></Typography>
      </Box>
    </Box>
  );
};

const HowToUse = (props) => {
  return (
    // <Box
    //   display={"flex"}
    //   sx={{
    //     justifyContent: "center",
    //     alignItems: "center",

    //     background: "yellowgreen",
    //   }}
    // >
    <Box display="grid" sx={{ gridTemplateRows: "1fr 4fr", height: "70vh" }}>
      <Box sx={{ background: "red" }}>{/* <TitleDon /> */}</Box>
      <Box sx={{ background: "green" }}>
        <ExplainDetail />
      </Box>
    </Box>
    // </Box>
  );
};

export default function Page3() {
  return (
    // <Box
    //   display={"grid"}
    //   sx={{ gridTemplateColumns: "1fr 1.4fr", height: "100vh" }}
    // >
    <>
      <Box sx={{ background: "blue" }}>2</Box>
      {/* <Box sx={{ background: "yellow" }} height={500}> */}
      {/* <HowToUse /> */}
      {/* </Box> */}
      <Paper style={{ height: "50vh", width: "20vw" }}>
        <Swipers>
          <SwiperSlide style={{ background: "red" }}>
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
          </SwiperSlide>
          <SwiperSlide style={{ background: "blue" }}>2</SwiperSlide>
          <SwiperSlide style={{ background: "green" }}>3</SwiperSlide>
        </Swipers>
      </Paper>
    </>
  );
}
