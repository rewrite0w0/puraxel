import { Box, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { ManualFractionPage2 } from "./ManualFraction";
import Swipers from "../../Swipers";
import { useState } from "react";
import { motion } from "framer-motion";

import testImage from "src/image/ME/me_03_b.png";
import Image from "next/image";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const Temp1 = () => {
  return (
    <>
      <h1>111111</h1>
    </>
  );
};

const Temp2 = () => {
  return (
    <>
      <h1>111111</h1>
    </>
  );
};

export default function Page2(props) {
  const [modeSelector, setModeSelector] = useState("Laser");
  console.log(modeSelector);

  const modeCondition = modeSelector === "Laser";

  return (
    <>
      <Box>
        <Box
          display={"flex"}
          sx={{ justifyContent: "center", alignItem: "center" }}
        >
          <Box
            onClick={() => setModeSelector("Laser")}
            sx={{
              background: modeCondition ? "green" : "transparent",
              filter: modeCondition ? "grayscale(0)" : "grayscale(1)",
            }}
          >
            <Image src={testImage} alt="test image :)" height={500} />
          </Box>
          <AddCircleOutlineRoundedIcon sx={{ height: "10vh" }} />
          <Box
            onClick={() => setModeSelector("Galvanic")}
            sx={{
              background: !modeCondition ? "red" : "transparent",
              filter: !modeCondition ? "grayscale(0)" : "grayscale(1)",
            }}
          >
            <Image src={testImage} alt="test image :)" height={500} />
          </Box>
        </Box>
      </Box>
      {/* <Box display={"grid"} sx={{ gridTemplateColumns: "1fr 1fr" }}>
        <Paper style={{ width: "40vw", height: "60vh" }}>
          <Swipers>
            <SwiperSlide>
              <Temp1 />
            </SwiperSlide>
            <SwiperSlide>
              <Temp2 />
            </SwiperSlide>
          </Swipers>
        </Paper>
        <Box>12345</Box>
      </Box> */}
    </>
  );
}
