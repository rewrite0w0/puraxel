import { Box } from "@mui/material";
import NavbarInfo from "./NavbarInfo";
import Navbar from "./Navbar";
import style from "styles/Layout.module.css";

export default function Navbars() {
  return (
    <Box sx={{ display: "flex" }} className={style.header}>
      <Navbar />
      <NavbarInfo />
    </Box>
  );
}
