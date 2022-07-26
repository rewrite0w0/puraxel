import { Box, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import meKr from "public/locales/kr/me";
import flowerWithMe from "src/image/ME/me_01.png";
import style from "./page1.module.css";

const Page1Intro1 = () => {
  return (
    <Container>
      <Typography>{meKr.Page1Intro1A}</Typography>
      <Typography>{meKr.Page1Intro1B}</Typography>
      <Typography>{meKr.Page1Title}</Typography>
    </Container>
  );
};

const Page1Explain = () => {
  return (
    <Container>
      <Typography>{meKr.Page1Explain1A}</Typography>
      <Typography>{meKr.Page1Explain1B}</Typography>
      <Typography>{meKr.Page1Explain1C}</Typography>
      <Typography>{meKr.Page1Explain1D}</Typography>
      <Typography>{meKr.Page1Explain2A}</Typography>
      <Typography>{meKr.Page1Explain2B}</Typography>
      <Typography>{meKr.Page1Explain2C}</Typography>
    </Container>
  );
};

const Page1Img = () => {
  return (
    <Image
      src={flowerWithMe}
      alt="flower with me"
      className={style.img}
      width="1000vw"
    />
  );
};

export default function Page1() {
  return (
    <>
      <Box display="grid">
        <Box
          display={"grid"}
          sx={{ gridTemplateColumns: "repeat(2, 1fr)" }}
          style={{
            height: "45vh",
            borderBottom: "0.1rem solid blue",
          }}
        >
          <Box>
            <Page1Intro1 />
          </Box>
          <Box className={style.imgContainer}>
            <Page1Img />
          </Box>
        </Box>
        {/*  */}
        <Box
          display={"grid"}
          sx={{ gridTemplateColumns: "repeat(2, 1fr)" }}
          style={{
            height: "45vh",
            // width: "100%",
          }}
        >
          <Box>
            <Page1Explain />
          </Box>
          <Box>{/* 4/4 */}</Box>
        </Box>
      </Box>
    </>
  );
}
