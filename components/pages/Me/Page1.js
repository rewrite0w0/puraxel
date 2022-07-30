import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import meKr from 'public/locales/kr/me';
import flowerWithMe from 'src/image/ME/me_01.png';
import style from './page1.module.css';
// import { ManualFractionPage1 } from "./ManualFraction";

const Page1Intro1 = (props) => {
  return (
    <Box sx={props.sx}>
      <Typography sx={{ color: 'red' }}>{meKr.Page1Intro1A}</Typography>
      <Typography>{meKr.Page1Intro1B}</Typography>
      <Typography sx={{ fontSize: '4vw' }}>{meKr.Page1Title}</Typography>
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

const Page1Img = () => {
  return (
    <Image
      src={flowerWithMe}
      alt="flower with ME"
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
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <Box display={'grid'}>
          <Box
            display={'grid'}
            sx={{
              borderBottom: '1px solid red',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'yellowgreen',
            }}
          >
            <Page1Intro1 sx={{ width: '25vw' }} />
          </Box>

          <Box
            display={'grid'}
            sx={{ justifyContent: 'right', background: 'green' }}
          >
            <Page1Explain sx={{ background: 'blue', width: '25vw' }} />
          </Box>
        </Box>

        <Box
          display={'grid'}
          sx={{ justifyContent: 'center' }}
          className={style.imgContainer}
        >
          <Page1Img />
        </Box>
      </Box>
    </>
  );
}
