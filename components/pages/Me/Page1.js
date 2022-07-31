import { motion } from 'framer-motion';
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
      width={800}
      height={600}
    />
  );
};

export default function Page1() {
  return (
    <motion.div
      style={{
        display: 'grid',
        gridTemplateRows: '40vh 40vh',
        // gridTemplateColumns: '1fr 1fr',
      }}
    >
      <motion.div
        style={{
          borderBottom: '5px solid red',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          position: 'relative',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <span>{}</span>
          <span>{}</span>
          <span>{}</span> */}
          <Page1Intro1 />
        </motion.div>
        {/* 이미지 넣을 공간 */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            // alignItems: 'center',
            // background: 'black',
            position: 'fixed',
            // margin: '1rem',
            right: '2vw',
            top: '1vh',
            // zIndex: -10,
          }}
        >
          <Page1Img />
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <Page1Explain />
        </motion.div>
        <motion.div>{/* empty */}</motion.div>
      </motion.div>
    </motion.div>
  );
}

{
  /* <Box
display="grid"
sx={{
  gridTemplateColumns: 'repeat(2, 1fr)',
}}
>
<Box display={'grid'} sx={{ gridTemplateRows: '4fr 4fr 1fr' }}>
  <Box
    display={'grid'}
    sx={{
      borderBottom: '1px solid red',
      justifyContent: 'center',
      alignItems: 'center',
      // background: 'yellowgreen',
    }}
  >
    <Page1Intro1 sx={{ width: '25vw' }} />
  </Box>

  <Box
    display={'grid'}
    sx={{
      justifyContent: 'right',
      //  background: 'green'
    }}
  >
    <Page1Explain
      sx={{
        // background: 'blue',
        width: '25vw',
      }}
    />
  </Box>
  <Box
  // sx={{ background: 'purple' }}
  ></Box>
</Box>

<Box
  display={'flex'}
  sx={{ justifyContent: 'center' }}
  className={style.imgContainer}
>
  <Page1Img />
</Box>
</Box> */
}
