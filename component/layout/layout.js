import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
// import styles from "./layout.module.css";
// import "swiper/css";
// import "swiper/css/pagination";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>타이틀 don</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
