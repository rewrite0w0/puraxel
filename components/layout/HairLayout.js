import LinkButton from "components/Footer/LinkButton";
import LinkPriceButton from "components/Footer/LinkPriceButton";
import layoutFooterKr from "public/locales/kr/layoutFooter.json";

import { ShopIcon } from "components/Parts/Icons";
import style from "./HairLayout.module.css";
import ModalComponent from "components/Modal/ModalComponent";

export default function HairLayout({ children }) {
  return (
    <div className={style.HairContainer}>
      <body className={style.bodyContainer}>
        {children}

        <footer className={style.footerContainer}>
          <ModalComponent />
          <LinkButton
            title="여기에 캐러셀 혹은 수동 캐러셀"
            sx={{ width: "92px" }}
          />
        </footer>
      </body>
    </div>
  );
}
