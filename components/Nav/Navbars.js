import { Box } from "@mui/material";
import NavbarRight from "./NavbarRight";
import NavbarLeft from "./NavbarLeft";
import style from "../layout/Layout.module.css";

export default function Navbars() {
  return (
    <Box sx={{ display: "flex" }} className={style.header}>
      <NavbarLeft />
      <NavbarRight className={style.rightNav} />
    </Box>
  );
}
