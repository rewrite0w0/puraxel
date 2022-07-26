import { Box } from "@mui/material";

import MouseIcon from "@mui/icons-material/Mouse";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function ManualFractionPage1() {
  return (
    <Box display="grid" sx={{}}>
      <Box className="mouse" display="flex" sx={{ color: "gray" }}>
        <ArrowBackIosIcon />
        <MouseIcon />
        <ArrowForwardIosIcon />
      </Box>
      <Box
        display="flex"
        //   style={{ justifyContent: "space-between" }}
      >
        <Box>01 </Box>
        <Box>ㅡ</Box>
        <Box sx={{ color: "gray" }}>04</Box>
      </Box>
    </Box>
  );
}

export function ManualFractionPage2() {
  return (
    <Box display="grid">
      <Box className="mouse" display="flex" sx={{ color: "gray" }}>
        <ArrowBackIosIcon />
        <MouseIcon />
        <ArrowForwardIosIcon />
      </Box>
      <Box
        display="flex"
        //   style={{ justifyContent: "space-between" }}
      >
        <Box>02 </Box>
        <Box>ㅡ</Box>
        <Box sx={{ color: "gray" }}>04</Box>
      </Box>
    </Box>
  );
}

export function ManualFractionPage3() {
  return (
    <Box display="grid">
      <Box className="mouse" display="flex" sx={{ color: "gray" }}>
        <ArrowBackIosIcon />
        <MouseIcon />
        <ArrowForwardIosIcon />
      </Box>
      <Box
        display="flex"
        //   style={{ justifyContent: "space-between" }}
      >
        <Box>03 </Box>
        <Box>ㅡ</Box>
        <Box sx={{ color: "gray" }}>04</Box>
      </Box>
    </Box>
  );
}

export function ManualFractionPage4() {
  return (
    <Box display="grid">
      <Box className="mouse" display="flex" sx={{ color: "gray" }}>
        <ArrowBackIosIcon />
        <MouseIcon />
        <ArrowForwardIosIcon />
      </Box>
      <Box
        display="flex"
        //   style={{ justifyContent: "space-between" }}
      >
        <Box>04 </Box>
        <Box>ㅡ</Box>
        <Box sx={{ color: "gray" }}>04</Box>
      </Box>
    </Box>
  );
}
