import { Box, Typography } from "@mui/material";
import Image from "next/image";
import meKr from "public/locales/kr/me";
import flowerWithMe from "src/image/ME/me_01.png";
import style from "./page1.module.css";
// import { ManualFractionPage1 } from "./ManualFraction";

const Page1Intro1 = () => {
  return (
    <Box>
      <Typography sx={{ color: "blue", fontSize: "5vw" }}>
        {meKr.Page1Intro1A}
      </Typography>
      <Typography>{meKr.Page1Intro1B}</Typography>
      <Typography>{meKr.Page1Title}</Typography>
    </Box>
  );
};

const Page1Explain = () => {
  return (
    <Box>
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

const Page1Img = () => {
  return (
    <Image
      src={flowerWithMe}
      alt="flower with me"
      className={style.img}
      width="800vw"
    />
  );
};

export default function Page1() {
  return (
    <>
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <Box display={"grid"}>
          <Box>
            <Page1Intro1 />
          </Box>
          <Box>
            <Page1Explain />
          </Box>
        </Box>

        <Box
          display={"flex"}
          sx={{ justifyContent: "center" }}
          className={style.imgContainer}
        >
          <Page1Img />
        </Box>
      </Box>
    </>
  );
}
