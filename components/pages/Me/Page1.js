import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import meKr from "public/locales/kr/me";
import flowerWithMe from "src/image/ME/me_01.png";
import style from "./page1.module.css";
// import { ManualFractionPage1 } from "./ManualFraction";

const Page1Intro1 = (props) => {
  return (
    <Box sx={props.sx}>
      <Typography sx={{ color: "red" }}>{meKr.Page1Intro1A}</Typography>
      <Typography>{meKr.Page1Intro1B}</Typography>
      <Typography sx={{ fontSize: "4vw" }}>{meKr.Page1Title}</Typography>
    </Box>
  );
};

const Page1Explain = (props) => {
  return (
    <Box sx={props.sx}>
      <Typography>
        <Typography>{meKr.Page1Explain1A}</Typography>
        <Typography>
          {meKr.Page1Explain1B}
          {meKr.Page1Explain1C}
          {meKr.Page1Explain1D}
        </Typography>
        <br />
        <Typography>{meKr.Page1Explain2A}</Typography>
        <Typography>{meKr.Page1Explain2B}</Typography>
        <Typography>{meKr.Page1Explain2C}</Typography>
      </Typography>
    </Box>
  );
};

const Page1Img = (props) => {
  return (
    <Image
      src={flowerWithMe}
      alt="flower with ME"
      className={style.img}
      width={800}
      height={600}
      style={{ ...props.sx }}
    />
  );
};

export default function Page1() {
  return (
    <motion.div
      className={style.container}
      style={{
        display: "grid",
        gridTemplateRows: "40vh 40vh",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <motion.div className={style.containerLeftTop}>
        <Page1Intro1 />
      </motion.div>
      <motion.div className={style.containerRightTop}>
        <Page1Img />
      </motion.div>
      <motion.div className={style.containerLeftBottom}>
        <Page1Explain />
      </motion.div>
      {/* <motion.div className={style.containerRightBottom}>4</motion.div> */}
    </motion.div>
  );
}
