import { Box, IconButton, SvgIcon } from "@mui/material";
import NavIconButton from "components/Nav/NavIconButton";
import layoutHeaderKr from "public/locales/kr/layoutHeader.json";
import style from "./Nav.module.css";

const buttonStyle = { fontWeight: "bolder", fontSize: "larger" };

export default function NavbarLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <NavIconButton
        onClick={() => {
          location.href = "/me";
        }}
        // link="/me"
        title={layoutHeaderKr.me}
        sx={buttonStyle}
      />
      {/* <NavIconButton
        link="/hair"
        title={layoutHeaderKr.hair}
        sx={buttonStyle}
      /> */}
      <NavIconButton
        onClick={() => {
          location.href = "/fx5000";
        }}
        // link="/fx5000"
        title={layoutHeaderKr.fx5000}
        sx={buttonStyle}
      />
      {/* <NavIconButton
        link="/puraTech"
        title={layoutHeaderKr.puraTech}
        sx={buttonStyle}
      /> */}
    </Box>
  );
}
