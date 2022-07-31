import { Box, Paper, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ManualFractionPage2 } from './ManualFraction';
import Swipers from '../../Swipers';
import { useState } from 'react';
import { motion } from 'framer-motion';
import meKr from 'public/locales/kr/me.json';

import right from 'src/image/ME/me_02_a.png';
import left from 'src/image/ME/me_02_b.png';

import Image from 'next/image';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const LaserExplain = (props) => {
  return (
    <Box>
      {/* <Typography> */}
      <h2>{meKr.Page2LaserTitle}</h2>
      <span>{meKr.Page2LaserExplain1A}</span>
      <p>{meKr.Page2LaserExplain1B}</p>
      <span>{meKr.Page2LaserExplain1C}</span>
      <p>
        {meKr.Page2LaserTechExplain1A}
        {meKr.Page2LaserTechExplain1B}
      </p>

      {/* </Typography> */}
    </Box>
  );
};

const GalvanicExplain = (props) => {
  return (
    <Typography>
      <h2>{meKr.Page2GalvanicTitle}</h2>
      <p>{meKr.Page2GalvanicExplain1A}</p>
      <p>{meKr.Page2GalvanicExplain1B}</p>
      <p>{meKr.Page2GalvanicExplain1C}</p>
      <p>{meKr.Page2GalvanicExplain1D}</p>

      <span>
        <span>
          {meKr.Page2GalvanicTechExplain1A}
          <span> </span>

          <span style={{ fontSize: '0.5vw', color: 'rgba(0,0,0, 0.25)' }}>
            {meKr.Page2GalvanicTechExplain1B}
          </span>
        </span>
        <span> </span>
        <span>
          {meKr.Page2GalvanicTechExplain2A}
          <span> </span>

          <span style={{ fontSize: '0.5vw', color: 'rgba(0,0,0, 0.25)' }}>
            {meKr.Page2GalvanicTechExplain2B}
          </span>
        </span>
      </span>
    </Typography>
  );
};

export default function Page2(props) {
  const [modeSelector, setModeSelector] = useState('Laser');
  const [laserSelector, setLaserSelector] = useState(true);
  // console.log(modeSelector);

  const handlerLaserSelectorOnClick = () => {
    laserSelector ? setLaserSelector(false) : setLaserSelector(true);
    !modeCondition ? setModeSelector('Laser') : setModeSelector('Galvanic');
  };

  const selectorLaser = () => {
    return setModeSelector('Laser');
  };

  const selectorGalvanic = () => {
    return setModeSelector('Galvanic');
  };
  const modeCondition = modeSelector === 'Laser';
  const laserCondition = laserSelector === true;
  const disableColor = 'rgba(0, 0, 0, 0.25)';

  return (
    <>
      <Box
        display={'grid'}
        sx={{ gridTemplateColumns: '1.2fr 1fr', fontSize: '1vw' }}
      >
        {/* 왼쪽 grid */}
        <Box
          display={'grid'}
          sx={{
            gridTemplateColumns: '2fr 0.4fr',
            marginTop: '0.5vh',
            marginLeft: '3vw',
          }}
        >
          <Paper
            sx={{
              height: '60vh',
              display: 'grid',
              gridTemplateRows: '0.8fr 3fr 2fr',
              padding: '5rem',
            }}
          >
            {/* 첫 번째 grid: 제목/소개*/}
            <Box>
              <span style={{ color: 'rgba(0,0,0,0.5)' }}>
                {meKr.Page2Intro1}
              </span>
              <h1 style={{ margin: 0 }}>
                <span>{meKr.Page2Intro2A}</span>
                <span style={{ fontWeight: 'normal' }}>
                  {meKr.Page2Intro2B}
                </span>
                <span>{meKr.Page2Intro2C}</span>
                <span style={{ fontWeight: 'normal' }}>
                  {meKr.Page2Intro2D}
                </span>
              </h1>
            </Box>

            {/* 두 번째 grid: 이미지 모음 */}
            <Box
              sx={{
                display: 'flex',
                // gridTemplateColumns: '1fr 0.1fr 1fr',
              }}
            >
              {/* 레이저 */}
              <Box
                onClick={selectorLaser}
                sx={{
                  // border: "5px solid red",
                  display: 'grid',
                  gridTemplateRows: '0.5fr 2fr',
                  backgroundColor: modeCondition ? 'aliceblue' : disableColor,
                }}
              >
                <Box
                  sx={{
                    padding: '1vh',
                    color: modeCondition ? 'purple' : disableColor,
                  }}
                >
                  {meKr.Page2ContainerLaserTitle}
                </Box>
                <Box>
                  <Image
                    src={left}
                    alt="left"
                    style={{
                      filter: modeCondition ? 'grayscale(0)' : 'grayscale(1)',
                    }}
                  />
                </Box>
              </Box>
              {/* 중앙 */}
              <Box
                sx={{
                  display: 'flex',
                  backgroundColor: 'yellow',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  position: 'fixed',
                }}
              >
                <AddCircleOutlineRoundedIcon
                  sx={{ color: 'red', fontSize: '3vw' }}
                />
              </Box>
              {/* 갈바닉 */}
              <Box
                onClick={selectorGalvanic}
                sx={{
                  // border: '5px solid blue',
                  display: 'grid',
                  gridTemplateRows: '1fr 2fr',
                  backgroundColor: !modeCondition ? 'aliceblue' : disableColor,
                }}
              >
                <Box
                  sx={{
                    padding: '1vh',
                    color: !modeCondition ? 'purple' : disableColor,
                  }}
                >
                  {meKr.Page2ContainerGalvanicTitle}
                </Box>
                <Box>
                  <Image
                    src={right}
                    alt="right"
                    style={{
                      filter: !modeCondition ? 'grayscale(0)' : 'grayscale(1)',
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* 세 번째 grid: 설명 */}
            <Box>{modeCondition ? <LaserExplain /> : <GalvanicExplain />}</Box>
          </Paper>

          {/* 책갈피 grid */}
          <Box>
            <Paper
              onClick={selectorLaser}
              sx={{
                width: '10vh',
                height: '4vh',
                fontSize: '0.8vw',
                wordBreak: 'keep-all',
                display: 'grid',
                gridDirection: 'column',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                background: modeCondition ? 'pink' : disableColor,
              }}
            >
              <div
                style={{
                  fontSize: '0.65vw',
                }}
              >
                {meKr.Page2BookMarkLaser}
              </div>
              {'\n'}

              <div style={{ fontSize: '0.6vw' }}>
                {meKr.Page2BookMarkDetail}
              </div>
            </Paper>
            <Paper
              onClick={selectorGalvanic}
              sx={{
                width: '10vh',
                height: '4vh',
                fontSize: '0.8vw',
                wordBreak: 'keep-all',
                // display: "grid",
                // alignContent: "center",
                // justifyContent: "center",
                display: 'grid',
                gridDirection: 'column',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                background: !modeCondition ? 'pink' : disableColor,
              }}
            >
              {/* <Typography sx={{ fontSize: "0.5vw" }}> */}
              {meKr.Page2BookMarkGalvanic}
              {/* </Typography> */}
              {'\n'}
              {/* <Typography sx={{ fontSize: "0.5vw" }}> */}
              <div style={{ fontSize: '0.6vw' }}>
                {meKr.Page2BookMarkDetail}
              </div>
              {/* </Typography> */}
            </Paper>
          </Box>
        </Box>

        {/* 오른쪽 grid */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: '1rem',
            // background: 'white',
          }}
        >
          {/* 왼쪽 동그라미 */}
          <motion.div>
            <Box
              style={{
                background: 'black',
                width: '25vw',
                height: '50vh',
                borderRadius: '50%',
                position: 'relative',
                right: '-6vw',
              }}
            ></Box>
          </motion.div>

          <motion.div
            style={{
              // background: 'purple',
              width: '20vw',
              height: '40vh',
              position: 'fixed',
              // zIndex: 5,
              borderRadius: '50%',
              marginLeft: '17vw',
              marginTop: '4vh',
            }}
          >
            {modeCondition ? (
              // 레이저
              <Image
                src={left}
                alt="left"
                style={{
                  filter: modeCondition ? 'grayscale(0)' : 'grayscale(1)',
                }}
              />
            ) : (
              // 갈바닉
              <Image
                src={right}
                alt="right"
                style={{
                  filter: !modeCondition ? 'grayscale(0)' : 'grayscale(1)',
                }}
              />
            )}
          </motion.div>

          <motion.div>
            <Box
              style={{
                background: 'red',
                width: '25vw',
                height: '50vh',
                borderRadius: '50%',
              }}
            >
              {/* 오른쪽 동그라미 */}
            </Box>
          </motion.div>
        </Box>
      </Box>
    </>
  );
}
