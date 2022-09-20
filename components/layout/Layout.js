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

  return (
    <main
      className={`${style.layout__background} ${
        currentPage === "main"
          ? MAIN_BG
          : currentPage === "me"
          ? ME_BG
          : currentPage === "fx5000"
          ? FX5000_BG
          : currentPage === "hair"
          ? HAIR_BG
          : currentPage === "tech"
          ? TECH_BG
          : ERROR_BG
      }
}


    }`}
    >
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
