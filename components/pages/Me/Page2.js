import { Box, Paper } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ManualFractionPage2 } from "../../Parts/ManualFraction";
// import Swipers from "../../Swipers";
import { useState } from "react";
import { motion } from "framer-motion";
import meKr from "public/locales/kr/me.json";

import style from "./page2.module.css";

const LaserExplain = (props) => {
  return (
    <div>
      <span className={style.explainTitle}>{meKr.Page2LaserTitle}</span>
      <br style={{ margin: "8px" }} />
      {/* <span>{meKr.Page2LaserExplain1A}</span>
      <span>{meKr.Page2LaserExplain1B}</span>
      <span>{meKr.Page2LaserExplain1C}</span> */}
      <span>
        <span className={style.explainPara}>{meKr.Page2LaserExplain}</span>
        <br style={{ margin: "8px" }} />
        <span>
          {meKr.Page2LaserTechExplain1A}
          {meKr.Page2LaserTechExplain1B}
        </span>
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

          <span>{meKr.Page2GalvanicTechExplain1B}</span>
        </span>
        &nbsp;
        <span>
          {meKr.Page2GalvanicTechExplain2A}
          <span>{meKr.Page2GalvanicTechExplain2B}</span>
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

  const DISABLECOLOR = "#F2F3F6";

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
            {/* 인디케이터 */}
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
            {/* 설명 */}
            {modeCondition ? <LaserExplain /> : <GalvanicExplain />}
          </Box>
        </Paper>

        {/* 책갈피 grid */}
        <Box>
          <Paper
            onClick={selectorLaser}
            className={style.bookmark}
            sx={{
              background: modeCondition ? "white" : DISABLECOLOR,
              marginBottom: "8px",
            }}
          >
            <div className={style.bookmarkParaContainer}>
              <span
                className={style.bookmarkUpperpara}
                style={{
                  fontSize: "14px",
                  letterSpacing: "-1px",
                }}
              >
                {meKr.Page2BookMarkLaser}
              </span>
              <br />
              <span className={style.bookmarkLowerPara}>
                {meKr.Page2BookMarkDetail}
              </span>
            </div>
          </Paper>
          <Paper
            onClick={selectorGalvanic}
            className={style.bookmark}
            sx={{
              background: !modeCondition ? "white" : DISABLECOLOR,
            }}
          >
            <div className={style.bookmarkParaContainer}>
              <span className={style.bookmarkUpperpara}>
                {meKr.Page2BookMarkGalvanic}
              </span>
              <br />
              <span className={style.bookmarkLowerPara}>
                {meKr.Page2BookMarkDetail}
              </span>
            </div>
          </Paper>
        </Box>
      </Box>

      {/* 오른쪽 grid */}

      {/* <Box className={style.rightGridContainer}> */}
      {modeCondition ? (
        <Box
          className={`${style.laserImageRightContainer} ${style.rightGridContainer}`}
        ></Box>
      ) : (
        <Box
          className={`${style.galvanicImageRightContainer}  ${style.rightGridContainer}`}
        ></Box>
      )}
      {/* </Box> */}
    </Box>
  );
}
