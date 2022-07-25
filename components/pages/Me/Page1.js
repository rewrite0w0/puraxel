import { Box, Container, Paper, Typography } from "@mui/material";
import meKr from "public/locales/kr/me";
import { Swiper } from "swiper";

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

export default function Page1() {
  var sw = new Swiper();
  console.log(sw);
  return (
    <>
      <Box display="grid">
        <Box
          display={"grid"}
          sx={{ gridTemplateColumns: "repeat(2, 1fr)" }}
          style={{
            height: "45vh",
            borderBottom: "0.1rem solid blue",
            // width: "100%",
          }}
        >
          <Box>
            <Page1Intro1 />
          </Box>
          <Box>@</Box>
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
          <Box>@</Box>
        </Box>
      </Box>
    </>
  );
}
