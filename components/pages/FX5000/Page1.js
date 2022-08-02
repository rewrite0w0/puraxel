import { motion } from "framer-motion";
import { Box } from "@mui/material";
import Image from "next/image";
import meKr from "public/locales/kr/me";
import flowerWithMe from "src/image/ME/me_main.png";
import style from "./page1.module.css";
// import { ManualFractionPage1 } from "./ManualFraction";
import tempImage from "src/image/giphy.gif";

const Page1Intro1 = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "15.5vw",
      }}
    >
      <span style={{ fontSize: "2.5vw" }}>
        <span style={{ color: "#A292A3" }}>{meKr.Page1Intro1A}</span>&nbsp;
        <span style={{}}>{meKr.Page1Intro1B}</span>
      </span>

      <span style={{ fontSize: "4.25vw" }} className={style.fontEN}>
        {/* {meKr.Page1Title} */}
        F.X.5.0.0.0.
      </span>
    </div>
  );
};

const Page1Explain = (props) => {
  return (
    <div style={{ fontSize: "1.2vw", marginLeft: "3.3vw" }}>
      <span>
        <span>{meKr.Page1Explain1A}</span>
        <br />
        <span>
          <span>{meKr.Page1Explain1B}</span>
          <span>{meKr.Page1Explain1C}</span>
          <span>{meKr.Page1Explain1D}</span>
        </span>
        <br />
        <br />

        <span style={{ fontWeight: "lighter" }}>
          <span>{meKr.Page1Explain2A}</span>
          <br />
          <span>{meKr.Page1Explain2B}</span>
          <br />
          <span>{meKr.Page1Explain2C}</span>
          <br />
        </span>
      </span>
    </div>
  );
};

const Page1Img = (props) => {
  return (
    <Image
      // src={flowerWithMe}
      src={tempImage}
      alt="flower with ME"
      className={style.img}
      width={800}
      height={700}
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
        {/* <hr className={style.borderLine} /> */}
      </motion.div>
      <motion.div className={style.containerRightTop}>
        <Page1Img />
        {/* <Box className={style.img}></Box> */}
        {/* <div className={style.img}></div> */}
      </motion.div>
      <motion.div className={style.containerLeftBottom}>
        <Page1Explain />
      </motion.div>
      <motion.div className={style.containerRightBottom}>
        {/* empty */}
      </motion.div>
    </motion.div>
  );
}
