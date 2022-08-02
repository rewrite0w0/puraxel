import { Box, Paper } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ManualFractionPage2 } from "../../Parts/ManualFraction";
// import Swipers from "../../Swipers";
import { useState } from "react";
import { motion } from "framer-motion";
import meKr from "public/locales/kr/me.json";

import right from "src/image/ME/me_02_a.png";
import left from "src/image/ME/me_02_b.png";

import Image from "next/image";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const LaserExplain = (props) => {
  return (
    <div>
      <br />
      <br />
      <span>{meKr.Page2LaserTitle}</span>
      <br />
      <br />
      {/* <span>{meKr.Page2LaserExplain1A}</span>
      <span>{meKr.Page2LaserExplain1B}</span>
      <span>{meKr.Page2LaserExplain1C}</span> */}
      <span>{meKr.Page2LaserExplain}</span>
      <br />
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
      <br />
      <br />
      <span>{meKr.Page2GalvanicTitle}</span>
      <br />
      <br />
      {/* <span>{meKr.Page2GalvanicExplain1A}</span>
      <span>{meKr.Page2GalvanicExplain1B}</span>
      <span>{meKr.Page2GalvanicExplain1C}</span>
      <span>{meKr.Page2GalvanicExplain1D}</span> */}
      <span>{meKr.Page2GalvanicExplain}</span>
      <br />
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
  const _GRAY = "#F2F3F6";
  const PURPLE = "#A590FA";
  const _GRAY2 = "rgba(217, 217, 217, 0.7)";
  const _WHITE = "rgba(255, 255, 255, 1)";
  const WHITEGRADIENT = "linear-gradient(#EFEFEF, #FFFFFF)";
  const PURPLEGRADIENT =
    "linear-gradient(180deg, #F9F5FD 0%, rgba(255, 255, 255, 0) 50%)";

  return (
    <Box
      display={"grid"}
      sx={{ gridTemplateColumns: "1.2fr 1fr", fontSize: "1vw" }}
    >
      {/* 왼쪽 grid */}
      <Box
        display={"grid"}
        sx={{
          gridTemplateColumns: "2fr 0.4fr",
          marginTop: "2vh",
          marginLeft: "7vw",
        }}
      >
        <Paper
          sx={{
            height: "63vh",
            display: "grid",
            gridTemplateRows: "0.8fr 2fr 2fr",
            padding: "5rem",
          }}
        >
          {/* 첫 번째 grid: 제목/소개*/}
          <Box sx={{ height: "10vh" }}>
            <span style={{ color: "rgba(0,0,0,0.5)" }}>{meKr.Page2Intro1}</span>
            <h1 style={{ margin: 0 }}>
              <span>{meKr.Page2Intro2A}</span>
              <span style={{ fontWeight: "normal" }}>{meKr.Page2Intro2B}</span>
              <span>{meKr.Page2Intro2C}</span>
              <span style={{ fontWeight: "normal" }}>{meKr.Page2Intro2D}</span>
            </h1>
          </Box>

          {/* 두 번째 grid: 이미지 모음 */}
          <Box
            sx={{
              display: "flex",
              height: "28vh",
              marginTop: "1vh",
              // gridTemplateColumns: '1fr 0.1fr 1fr',
            }}
          >
            {/* 레이저 */}
            <Box
              onClick={selectorLaser}
              sx={{
                // border: "5px solid red",
                display: "grid",
                gridTemplateRows: "0.5fr 2fr",
                background: modeCondition ? WHITEGRADIENT : DISABLECOLOR,
              }}
            >
              <Box
                sx={{
                  padding: "1vh",
                  color: modeCondition ? PURPLE : DISABLECOLOR,
                  // background: modeCondition ? PURPLEGRADIENT : DISABLECOLOR,
                }}
              >
                {meKr.Page2ContainerLaserTitle}
              </Box>
              <Box>
                <Image
                  src={left}
                  alt="left"
                  style={{
                    filter: modeCondition ? "grayscale(0)" : "grayscale(0.7)",
                  }}
                />
              </Box>
            </Box>
            {/* 중앙 */}
            <Box
              sx={{
                display: "flex",
                // height: "100vh",
                // width: "100vw",
                justifyContent: "center",
                alignItems: "center",

                // flexDirection: "column",
                // position: "fixed",
                // marginTop: "11vh",
                // marginLeft: "14vw",
              }}
            >
              <AddCircleOutlineRoundedIcon
                sx={{
                  position: "fixed",
                  color: "rgba(0,0,0,0.4)",
                  background: "rgba(255,255,255,0.4)",
                  backdropFilter: "blur('50px')",
                  fontSize: "3vw",
                }}
              />
            </Box>
            {/* 갈바닉 */}
            <Box
              onClick={selectorGalvanic}
              sx={{
                // border: '5px solid blue',
                display: "grid",
                gridTemplateRows: "1fr 2fr",
                background: !modeCondition ? _WHITE : DISABLECOLOR,
              }}
            >
              <Box
                sx={{
                  padding: "1vh",
                  color: !modeCondition ? PURPLE : DISABLECOLOR,
                  // background: !modeCondition ? PURPLEGRADIENT : DISABLECOLOR,
                }}
              >
                {meKr.Page2ContainerGalvanicTitle}
              </Box>
              <Box>
                <Image
                  src={right}
                  alt="right"
                  style={{
                    filter: !modeCondition ? "grayscale(0)" : "grayscale(0.7)",
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* 세 번째 grid: 설명 */}
          <Box sx={{ heigth: "10vh" }}>
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
