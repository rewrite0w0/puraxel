import { Box, Paper } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ManualFractionPage2 } from "../../Parts/ManualFraction";
// import Swipers from "../../Swipers";
import { useState } from "react";
import { motion } from "framer-motion";
import meKr from "public/locales/kr/me.json";

import style from "./page2.module.css";
import right from "src/image/ME/me_02_a.png";
import left from "src/image/ME/me_02_b.png";
import Image from "next/image";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { PlusIcon } from "components/Parts/Icons";

const LaserExplain = (props) => {
  return (
    <div>
      <span className={style.explainTitle}>{meKr.Page2LaserTitle}</span>
      <br style={{ margin: "8px" }} />
      {/* <span>{meKr.Page2LaserExplain1A}</span>
      <span>{meKr.Page2LaserExplain1B}</span>
      <span>{meKr.Page2LaserExplain1C}</span> */}
      <span className={style.explainPara}>{meKr.Page2LaserExplain}</span>
      <br />
      <span>
        {meKr.Page2LaserTechExplain1A}
        {meKr.Page2LaserTechExplain1B}
      </span>
    </div>
  );
};

const GalvanicExplain = (props) => {
  return (
    <div>
      <span className={style.explainTitle}>{meKr.Page2GalvanicTitle}</span>
      <br style={{ margin: "8px" }} />
      {/* <span>{meKr.Page2GalvanicExplain1A}</span>
      <span>{meKr.Page2GalvanicExplain1B}</span>
      <span>{meKr.Page2GalvanicExplain1C}</span>
      <span>{meKr.Page2GalvanicExplain1D}</span> */}
      <span className={style.explainPara}>{meKr.Page2GalvanicExplain}</span>

      <br />
      <span>
        <span>
          {meKr.Page2GalvanicTechExplain1A}
          <span> </span>

          <span style={{ fontSize: "0.7vw", color: "rgba(0,0,0, 0.25)" }}>
            {meKr.Page2GalvanicTechExplain1B}
          </span>
        </span>
        &nbsp;
        <span>
          {meKr.Page2GalvanicTechExplain2A}
          <span style={{ fontSize: "0.7vw", color: "rgba(0,0,0, 0.25)" }}>
            {meKr.Page2GalvanicTechExplain2B}
          </span>
        </span>
      </span>
    </div>
  );
};

export default function Page2(props) {
  const [modeSelector, setModeSelector] = useState("Laser");
  const [laserSelector, setLaserSelector] = useState(true);
  // console.log(modeSelector);

  // const handlerLaserSelectorOnClick = () => {
  //   laserSelector ? setLaserSelector(false) : setLaserSelector(true);
  //   !modeCondition ? setModeSelector("Laser") : setModeSelector("Galvanic");
  // };

  const selectorLaser = () => {
    return setModeSelector("Laser");
  };

  const selectorGalvanic = () => {
    return setModeSelector("Galvanic");
  };
  const modeCondition = modeSelector === "Laser";
  // const laserCondition = laserSelector === true;

  const DISABLECOLOR = "rgba(0, 0, 0, 0.25)";

  const indicatorActive = "#A590FA";
  const indicatorInactive = "#DFE1E8";

  return (
    <Box className={style.page2Container}>
      {/* 왼쪽 grid */}
      <Box className={style.leftGridContainer}>
        <Paper className={style.leftPaper}>
          {/* 첫 번째 grid: 제목/소개*/}
          <Box className={style.leftPaperTop}>
            <span className={style.leftPaperTopFirst}>{meKr.Page2Intro1}</span>
            <br />
            <span className={style.leftPaperTopSecond}>
              <span className={style.leftPaperTopSecondPoint}>
                {meKr.Page2Intro2A}
              </span>
              <span>{meKr.Page2Intro2B}</span>
              <span className={style.leftPaperTopSecondPoint}>
                {meKr.Page2Intro2C}
              </span>
              <span>{meKr.Page2Intro2D}</span>
            </span>
          </Box>

          {/* 두 번째 grid: 이미지 모음 */}
          <Box className={style.leftPaperMiddle}>
            {/* 레이저 */}
            <Box
              className={style.laserContainer}
              onClick={selectorLaser}
              sx={{
                // background: modeCondition ? WHITEGRADIENT : DISABLECOLOR,
                filter: modeCondition ? "grayscale(0)" : "grayscale(0.7)",
              }}
            ></Box>
            {/* 중앙 */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className={style.plusImage}></Box>
            </Box>
            {/* 갈바닉 */}
            <Box
              onClick={selectorGalvanic}
              className={style.galvanicContainer}
              sx={{
                filter: !modeCondition ? "grayscale(0)" : "grayscale(0.7)",
              }}
            ></Box>
          </Box>

          {/* 세 번째 grid: 설명 */}
          <Box className={style.leftPaperBottom}>
            <span className={style.indicator}>
              <span
                className={style.indicatorAtom}
                style={{
                  background: modeCondition
                    ? indicatorActive
                    : indicatorInactive,
                }}
              ></span>
              <span
                className={style.indicatorAtom}
                style={{
                  background: !modeCondition
                    ? indicatorActive
                    : indicatorInactive,
                }}
              ></span>
            </span>
            {modeCondition ? <LaserExplain /> : <GalvanicExplain />}
          </Box>
        </Paper>

        {/* 책갈피 grid */}
        <Box>
          <Paper
            onClick={selectorLaser}
            // elevation={0}
            sx={{
              width: "10vh",
              height: "4vh",
              fontSize: "0.8vw",
              wordBreak: "keep-all",
              display: "grid",
              gridDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",

              background: modeCondition ? "white" : DISABLECOLOR,
            }}
          >
            <div
              style={{
                fontSize: "0.65vw",
              }}
            >
              {meKr.Page2BookMarkLaser}
            </div>
            {"\n"}

            <div style={{ fontSize: "0.6vw" }}>{meKr.Page2BookMarkDetail}</div>
          </Paper>
          <Paper
            onClick={selectorGalvanic}
            sx={{
              width: "10vh",
              height: "4vh",
              fontSize: "0.8vw",
              wordBreak: "keep-all",
              // display: "grid",
              // alignContent: "center",
              // justifyContent: "center",
              display: "grid",
              gridDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              background: !modeCondition ? "white" : DISABLECOLOR,
            }}
          >
            {/* <Typography sx={{ fontSize: "0.5vw" }}> */}
            {meKr.Page2BookMarkGalvanic}
            {/* </Typography> */}
            {"\n"}
            {/* <Typography sx={{ fontSize: "0.5vw" }}> */}
            <div style={{ fontSize: "0.6vw" }}>{meKr.Page2BookMarkDetail}</div>
            {/* </Typography> */}
          </Paper>
        </Box>
      </Box>

      {/* 오른쪽 grid */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // margin: "1rem",
          // background: "white",
        }}
      >
        {/* 왼쪽 동그라미 */}
        {/* <motion.div> */}
        <Box
          style={{
            // background: "black",
            background: modeCondition
              ? "linear-gradient(#DEE1FF00,#BFA9EE)"
              : DISABLECOLOR,

            width: "25vw",
            height: "50vh",
            borderRadius: "50%",
            position: "relative",
            right: "-5vw",
          }}
        ></Box>
        {/* </motion.div> */}

        {/* 이미지 */}
        <motion.div
          style={{
            // background: "PURPLE",
            display: "flex",
            width: "20vw",
            height: "40vh",
            position: "fixed",
            zIndex: 1,
            borderRadius: "50%",
            // marginLeft: "17vw",
            // marginTop: "4vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {modeCondition ? (
            // 레이저
            <Image
              src={left}
              alt="left"
              style={{
                filter: modeCondition ? "grayscale(0)" : "grayscale(0.7)",
              }}
            />
          ) : (
            // 갈바닉
            <Image
              src={right}
              alt="right"
              style={{
                filter: !modeCondition ? "grayscale(0)" : "grayscale(0.7)",
              }}
            />
          )}
        </motion.div>

        {/* <motion.div> */}
        <Box
          style={{
            // background: "red",
            background: !modeCondition
              ? "linear-gradient(#DEE1FF00,#BFA9EE)"
              : DISABLECOLOR,
            backdropFilter: "blur(32px)",
            width: "25vw",
            height: "50vh",
            borderRadius: "50%",
            marginRight: "2vw",
          }}
        >
          {/* 오른쪽 동그라미 */}
        </Box>
        {/* </motion.div> */}
      </Box>
    </Box>
  );
}
