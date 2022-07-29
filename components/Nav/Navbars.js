import { Box } from "@mui/material";
import NavbarRight from "./NavbarRight";
import NavbarLeft from "./NavbarLeft";
import style from "../layout/Layout.module.css";
import navStyle from "./Nav.module.css";

import Image from "next/image";
import layoutHeaderKr from "public/locales/kr/layoutHeader.json";

import PuraxelLogo from "src/image/header/puraxel_logo_basic.svg";
// import PuraxelLogoColor from "src/image/header/puraxel_logo_basic.svg";
import { motion } from "framer-motion";

export default function Navbars() {
  return (
    <Box sx={{ display: "flex" }} className={style.header}>
      {/* <Image
        src={PuraxelLogo}
        alt="puraxel logo image"
        width={160}
        // height={50}
        className={navStyle.logo}
        onClick={() => {
          location.href = "/";
        }}
      /> */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "95vw" }}
      >
        <NavbarLeft className={navStyle.leftNav} />
        <NavbarRight className={navStyle.rightNav} />
      </Box>
    </Box>
  );
}
