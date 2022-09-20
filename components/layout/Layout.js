import Head from "next/head";
import Navbar from "components/Nav/Navbars";
import style from "./Layout.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Layout({ children }) {
  const [currentPage, setCurrentPage] = useState("main");

  const currentPageChecker = () => {
    if (document.documentURI.includes("hair")) {
      setCurrentPage("hair");
    }

    if (document.documentURI.includes("fx5000")) {
      setCurrentPage("fx5000");
    }

    if (document.documentURI.includes("me")) {
      setCurrentPage("me");
    }

    if (document.documentURI.includes("tech")) {
      setCurrentPage("tech");
    }
  };

  useEffect(() => {
    return currentPageChecker();
  }, []);

  const HAIR_BG = style.layout__background__hair;
  const MAIN_BG = style.layout__background__main;
  const ME_BG = style.layout__background__me;
  const TECH_BG = style.layout__background__tech;
  const FX5000_BG = style.layout__background__fx5000;
  const ERROR_BG = style.layout__background__404;

  const HAIR_BG_CDN = `background: url(https://cdn.jsdelivr.net/gh/rewrite0w0/puraxel@master/src/image/HAIR/productBg_hair.png);
  background-size: cover;
  background-position: 50%;
  background-attachment: fixed;`;

  const MAIN_BG_CDN = `background: url(https://cdn.jsdelivr.net/gh/rewrite0w0/puraxel@master/src/image/main/productBg_home.png);
  background-size: cover;
  background-position: 50%;
  background-attachment: fixed;`;

  const ME_BG_CDN = `background: url(https://cdn.jsdelivr.net/gh/rewrite0w0/puraxel@master/src/image/ME/productBg_me.png);
  background-size: cover;
  background-position: 50%;
  background-attachment: fixed;`;

  const TECH_BG_CDN = `background: url(https://cdn.jsdelivr.net/gh/rewrite0w0/puraxel@master/src/image/PURATECH/productBg.png);
  background-size: cover;
  background-position: 50%;
  background-attachment: fixed;`;

  const FX5000_BG_CDN = `background: url(https://cdn.jsdelivr.net/gh/rewrite0w0/puraxel@master/src/image/FX5000/productBg_fx-5000.png);
  background-size: cover;
  background-position: 50%;
  background-attachment: fixed;`;

  const ERROR_BG_CDN = `background: url(https://cdn.jsdelivr.net/gh/rewrite0w0/puraxel/src/image/main/logo.svg);
  background-size: cover;
  background-position: 50%;
  background-attachment: fixed;`;

  const TEMP = `background: url(https://cdn.jsdelivr.net/gh/rewrite0w0/puraxel/src/image/main/logo.svg);
  background-size: cover;
  background-position: 50%;
  background-attachment: fixed;`;

  return (
    <main
    // className={`${style.layout__background} ${
    //   currentPage === "main"
    //     ? MAIN_BG
    //     : currentPage === "me"
    //     ? ME_BG
    //     : currentPage === "fx5000"
    //     ? FX5000_BG
    //     : currentPage === "hair"
    //     ? HAIR_BG
    //     : currentPage === "tech"
    //     ? TECH_BG
    //     : ERROR_BG
    // }`}
    >
      {currentPage === "main" ? (
        <style jsx global>{`
          body {
            ${MAIN_BG_CDN};
          }
        `}</style>
      ) : currentPage === "me" ? (
        <style jsx global>{`
          body {
            ${ME_BG_CDN};
          }
        `}</style>
      ) : currentPage === "fx5000" ? (
        <style jsx global>{`
          body {
            ${FX5000_BG_CDN};
          }
        `}</style>
      ) : currentPage === "hair" ? (
        <style jsx global>{`
          body {
            ${HAIR_BG_CDN};
          }
        `}</style>
      ) : currentPage === "tech" ? (
        <style jsx global>{`
          body {
            ${TECH_BG_CDN};
          }
        `}</style>
      ) : (
        <style jsx global>{`
          body {
            ${ME_BG_CDN};
          }
        `}</style>
      )}

      <article className={style.layoutMain}>
        {/* <div className={style.wrap}> */}
        <div className={style.layoutHeader}>
          <Navbar />
        </div>

        <article className={style.layoutBody}>{children}</article>
        {/* </div> */}
      </article>
    </main>
  );
}
