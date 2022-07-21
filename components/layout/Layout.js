import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import Navbar from "components/Nav/Navbars";
import Slider from "./Slider";

import style from "styles/Layout.module.css";

// import styles from "./layout.module.css";
// import "swiper/css";
// import "swiper/css/pagination";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={style.body}>{children}</main>
    </>
  );
}
