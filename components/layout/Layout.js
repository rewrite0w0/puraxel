import Head from "next/head";

import Navbar from "components/Nav/Navbars";
import style from "styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={style.body}>{children}</main>
    </>
  );
}
