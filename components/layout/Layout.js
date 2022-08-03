import Head from "next/head";
import Navbar from "components/Nav/Navbars";
import style from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <body className={style.body}>{children}</body>
    </>
  );
}
