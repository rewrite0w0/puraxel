import Head from "next/head";
import Navbar from "components/Nav/Navbars";
import style from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <main className={style.layoutMain}>
      <header className={style.layoutHeader}>
        <Navbar />
      </header>

      <article className={style.layoutBody}>{children}</article>
    </main>
  );
}
