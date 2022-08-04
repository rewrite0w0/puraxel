import { Box, Paper } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ManualFractionPage2 } from "../../Parts/ManualFraction";
// import Swipers from "../../Swipers";
import { useState } from "react";
import { motion } from "framer-motion";
import meKr from "public/locales/kr/me.json";

import style from "./page2.module.css";
import right from "src/image/ME/me_02_a.png";
import left from "src/image/ME/me_02_b.png";
import Image from "next/image";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { PlusIcon } from "components/Parts/Icons";

export default function Page2(props) {
  return (
    <main className={style.page2Container}>
      <article className={style.page2ContainerLeft}>1</article>
      <article className={style.page2ContainerRight}>2</article>
    </main>
  );
}
