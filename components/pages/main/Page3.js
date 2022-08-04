import { Box, Paper } from "@mui/material";

import style from "./page3.module.css";

export default function Page3() {
  return (
    <Box display={"grid"} sx={{ gridTemplateColumns: "2fr 3fr" }}>
      <Box display="flex" className={style.leftContainer}>
        <Box className={style.lowerImage}>{/* 아래 */}</Box>
        <Box className={style.upperImage}>{/* 위 */}</Box>
      </Box>
      <Box className={style.rightContainer}>
        <Paper className={style.rightContents}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/X6oDTHJnxq4?controls=1&rel=0&disablekb=1&autoplay=1&loop=1&mute=0&modestbranding=1"
            title="How to use PURAXEL"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Paper>
      </Box>
    </Box>
  );
}
