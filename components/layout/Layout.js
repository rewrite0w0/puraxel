import Head from "next/head";
import Navbar from "components/Nav/Navbars";
import style from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <main className={style.layoutMain}>
      {/* <div className={style.wrap}> */}
      <div className={style.layoutHeader}>
        <Navbar />
      </div>

      <article className={style.layoutBody}>{children}</article>
      {/* </div> */}
    </main>
  );
}
