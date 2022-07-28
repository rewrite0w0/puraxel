import { Box, Paper, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { ManualFractionPage2 } from "./ManualFraction";
import Swipers from "../../Swipers";
import { useState } from "react";
import { motion } from "framer-motion";
import meKr from "public/locales/kr/me.json";

import right from "src/image/ME/me_02_a.png";
import left from "src/image/ME/me_02_b.png";

import Image from "next/image";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

// const CircleLeft = (props) => {
//   return (
//     <motion.div
//       style={{
//         width: "20vw",
//         height: "40vh",
//         background: "red",
//         borderRadius: "50%",
//       }}
//     />
//   );
// };

// const CircleRight = (props) => {
//   return (
//     <motion.div
//       style={{
//         width: "20vw",
//         height: "40vh",
//         background: "blue",
//         borderRadius: "50%",

//         ...props.sx,
//       }}
//     />
//   );
// };

// const Circle = (props) => {
//   return (
//     <motion.div
//       style={{
//         width: "25vw",
//         height: "25vw",
//         borderRadius: "50%",
//         ...props.sx,
//       }}
//     />
//   );
// };

export default function Page2(props) {
  const [modeSelector, setModeSelector] = useState("Laser");
  const [laserSelector, setLaserSelector] = useState(true);
  // console.log(modeSelector);

  const handlerLaserSelectorOnClick = () => {
    laserSelector ? setLaserSelector(false) : setLaserSelector(true);
    !modeCondition ? setModeSelector("Laser") : setModeSelector("Galvanic");
  };

  const selectorLaser = () => {
    return setModeSelector("Laser");
  };

  const selectorGalvanic = () => {
    return setModeSelector("Galvanic");
  };
  const modeCondition = modeSelector === "Laser";
  const laserCondition = laserSelector === true;

  console.log(laserSelector);
  console.log(modeSelector);
  return (
    <>
      <Box
        display={"grid"}
        sx={{ gridTemplateColumns: "1.3fr 1fr", fontSize: "1vw" }}
      >
        {/* 왼쪽 grid */}
        <Box
          display={"grid"}
          sx={{
            gridTemplateColumns: "2fr 1fr",
            marginTop: "4vh",
            marginLeft: "3vw",
          }}
        >
          <Paper
            sx={{
              height: "60vh",
              display: "grid",
              gridTemplateRows: "1fr 2fr 1fr",
              padding: "5rem",
            }}
          >
            {/* 첫 번째 grid */}
            <Box>
              <span style={{ color: "rgba(0,0,0,0.5)" }}>
                {meKr.Page2Intro1}
              </span>
              <h1>
                <span>{meKr.Page2Intro2A}</span>
                <span style={{ fontWeight: "normal" }}>
                  {meKr.Page2Intro2B}
                </span>
                <span>{meKr.Page2Intro2C}</span>
                <span style={{ fontWeight: "normal" }}>
                  {meKr.Page2Intro2D}
                </span>
              </h1>
            </Box>

            {/* 두 번째 grid */}
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 0.1fr 1fr" }}>
              <Box
                onClick={selectorLaser}
                sx={{
                  border: "5px solid red",
                  display: "grid",
                  gridTemplateRows: "0.5fr 2fr",
                }}
              >
                <Box sx={{ padding: "1vh" }}>
                  {meKr.Page2ContainerLaserTitle}
                </Box>
                <Box>
                  <Image src={left} alt="left" />
                </Box>
              </Box>
              <Box>
                <AddCircleOutlineRoundedIcon
                  sx={{ color: "blue", fontSize: "2vw" }}
                />
              </Box>
              <Box
                sx={{
                  border: "5px solid red",
                  display: "grid",
                  gridTemplateRows: "1fr 2fr",
                }}
              >
                <Box sx={{ padding: "1vh" }}>
                  {meKr.Page2ContainerGalvanicTitle}
                </Box>
                <Box>
                  <Image src={right} alt="right" />
                </Box>
              </Box>
            </Box>

            {/* 세 번째 grid */}
            <Box>
              <Typography>
                <h2>{meKr.Page2LaserTitle}</h2>
                <p>{meKr.Page2LaserExplain1A}</p>
                <p>{meKr.Page2LaserExplain1B}</p>
                <p>{meKr.Page2LaserExplain1C}</p>
                <p>
                  {meKr.Page2LaserTechExplain1A}
                  {meKr.Page2LaserTechExplain1B}
                </p>
              </Typography>
            </Box>
          </Paper>

          {/* 책갈피 grid */}
          <Box>
            <Paper
              sx={{
                width: "10vh",
                height: "4vh",
                background: "yellowgreen",
                fontSize: "0.8vw",
                wordBreak: "keep-all",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Typography sx={{ fontSize: "1vw" }}> */}
              <div style={{ fontSize: "0.65vw" }}>
                {meKr.Page2BookMarkLaser}
              </div>
              {"\n"}
              {/* </Typography> */}
              {/* <Typography sx={{ fontSize: "1vw" }}> */}
              <div style={{ fontSize: "0.6vw" }}>
                {meKr.Page2BookMarkDetail}
              </div>
              {/* </Typography> */}
            </Paper>
            <Paper
              sx={{
                width: "10vh",
                height: "4vh",
                fontSize: "0.8vw",
                wordBreak: "keep-all",
                // display: "grid",
                // alignContent: "center",
                // justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Typography sx={{ fontSize: "0.5vw" }}> */}
              {meKr.Page2BookMarkGalvanic}
              {/* </Typography> */}
              {"\n"}
              {/* <Typography sx={{ fontSize: "0.5vw" }}> */}
              <div style={{ fontSize: "0.6vw" }}>
                {meKr.Page2BookMarkDetail}
              </div>
              {/* </Typography> */}
            </Paper>
          </Box>
        </Box>

        {/* 오른쪽 grid */}
        <Box>2</Box>
      </Box>
    </>
  );
}

// <Box>
//         <Box
//           display={"flex"}
//           sx={{ justifyContent: "center", alignItem: "center" }}
//         >
//           <Box
//             onClick={() => setModeSelector("Laser")}
//             sx={{
//               background: modeCondition ? "green" : "transparent",
//               filter: modeCondition ? "grayscale(0)" : "grayscale(1)",
//             }}
//           >
//             <Image
//               src={testImage}
//               alt="test image :)"
//               style={{ height: "50vh" }}
//               height={500}
//             />
//           </Box>
//           <AddCircleOutlineRoundedIcon
//             sx={{
//               fontSize: "8vw",
//               color: "blueviolet",
//               position: "absolute",
//               zIndex: 10,
//             }}
//           />
//           <Box
//             onClick={() => setModeSelector("Galvanic")}
//             sx={{
//               background: !modeCondition ? "red" : "transparent",
//               filter: !modeCondition ? "grayscale(0)" : "grayscale(1)",
//             }}
//           >
//             <Image src={testImage} alt="test image :)" height={500} />
//           </Box>
//         </Box>
//       </Box>

//

// <Box
// display={"grid"}
// sx={{
//   gridTemplateColumns: "1fr 1fr",
//   justifyContent: "center",
//   alignContent: "center",
// }}
// >
// <Box
//   style={{ background: "yellow", justifyContent: "center" }}
//   // display="flex"
// >
//   {/* <Circle sx={{ background: "purple", position: "absoulte" }} />
//   <CircleLeft /> */}
//   1
// </Box>
// <Box
//   display={"grid"}
//   sx={{
//     gridTemplateRows: "1fr 2.5fr 1fr",
//     justifyContent: "center",
//     background: "green",
//     position: "relative",
//     height: "100vh",
//   }}
// >
//   <Box sx={{ background: "red" }}>1</Box>

//   <Box
//     display={"flex"}
//     sx={{
//       background: "yellow",
//       position: "relative",
//       marginRight: "10vw",
//     }}
//   >
//     <Circle
//       sx={{ background: "purple", position: "absolute", left: "12vw" }}
//     />
//     <Circle sx={{ background: "red" }} />
//   </Box>

//   <Box sx={{ background: "blue" }}>3</Box>

//   {/* <CircleRight /> */}
// </Box>
// </Box>
