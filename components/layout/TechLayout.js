import LinkButton from "components/Footer/LinkButton";
import LinkPriceButton from "components/Footer/LinkPriceButton";
import layoutFooterKr from "public/locales/kr/layoutFooter.json";

import { ShopIcon } from "components/Parts/Icons";
import style from "./TechLayout.module.css";

export default function TechLayout({ children }) {
  return (
    <div className={style.TechContainer}>
      <body className={style.bodyContainer}>
        {children}

        <footer className={style.footerContainer}>
          <LinkButton
            title="여기에 캐러셀 혹은 수동 캐러셀"
            sx={{ width: "92px" }}
          />
        </footer>
      </body>
    </div>
  );
}
