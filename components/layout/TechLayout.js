import CommonPlainButtons from "components/Footer/CommonPlainButtons";
import LinkButton from "components/Footer/LinkButton";
import LinkPriceButton from "components/Footer/LinkPriceButton";
import layoutFooterKr from "public/locales/kr/layoutFooter.json";

import { ShopIcon } from "components/Parts/Icons";
import style from "./TechLayout.module.css";

export default function TechLayout({ children }) {
  return (
    <main className={style.TechContainer}>
      <article className={style.bodyContainer}>
        {children}

        <footer className={style.footerContainer}>
          {/* <CommonPlainButtons
            title="여기에 캐러셀 혹은 수동 캐러셀"
            sx={{ width: "92px" }}
          /> */}
        </footer>
      </article>
    </main>
  );
}
