import { motion } from "framer-motion";
import { Box } from "@mui/material";
import Image from "next/image";
import meKr from "public/locales/kr/me";
import flowerWithMe from "src/image/ME/me_main.png";
import style from "./page1.module.css";

// import { ManualFractionPage1 } from "./ManualFraction";

const Page1Intro1 = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "15.5vw",
        marginBottom: "-0.8vw",
      }}
    >
      <span style={{ fontSize: "2.5vw" }}>
        <span style={{ color: "#A292A3" }}>{meKr.Page1Intro1A}</span>&nbsp;
        <span style={{}}>{meKr.Page1Intro1B}</span>
      </span>

      <span style={{ fontSize: "4.25vw" }} className={style.fontEN}>
        {meKr.Page1Title}
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
      src={flowerWithMe}
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
    <main
      className={style.container}
      style={{
        display: "grid",
        gridTemplateRows: "50vh 50vh",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <div className={style.containerLeftTop}>
        <div style={{ background: "red" }}>하이브리드 </div>

        {/* <hr className={style.borderLine} /> */}
      </div>
      <div className={style.containerRightTop}>
        asddddddddddddd
        {/* <Page1Img /> */}
        {/* <Box className={style.img}></Box> */}
      </div>
      <div className={style.containerLeftBottom}>ㅇㅋㄷㅋ</div>
      <div className={style.containerRightBottom}>{/* void */}</div>
    </main>
  );
}
