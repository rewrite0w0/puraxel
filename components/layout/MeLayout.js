import LinkButton from "components/Footer/LinkButton";
import LinkPriceButton from "components/Footer/LinkPriceButton";
import layoutFooterKr from "public/locales/kr/layoutFooter.json";

import StoreIcon from "@mui/icons-material/Store";
import { ShopIcon } from "components/Parts/Icons";
import style from "./MeLayout.module.css";

export default function MeLayout({ children }) {
  return (
    <div className={style.meContainer}>
      <body className={style.bodyContainer}>
        {children}

        <footer className={style.footerContainer}>
          <LinkButton
            title={layoutFooterKr.ShoppingMallLink}
            link="https://qwant.com"
            icon={<ShopIcon sx={{ height: "14.88px", width: "17.5px" }} />}
            sx={{ width: "128px" }}
          />

          <LinkPriceButton
            title={layoutFooterKr.Me}
            price={layoutFooterKr.MePrice}
            installment={layoutFooterKr.MeInstallmentDuration}
            installmentPrice={layoutFooterKr.MeInstallmentPrice}
            link="https://qwant.com"
            sx={{ width: "277px" }}
          />

          <LinkPriceButton
            title={layoutFooterKr.MeAmpoul}
            originalPrice={layoutFooterKr.MeAmpoulOriginalPrice}
            arrow={layoutFooterKr.MeAmpoulArrow}
            price={layoutFooterKr.MeAmpoulPrice}
            offRate={layoutFooterKr.MeAmpoulPriceDiscountRate}
            installment={layoutFooterKr.MeAmpoulInstallment}
            installmentPrice={layoutFooterKr.MeAmpoulInstallmentPrice}
            link="https://www.qwant.com/"
            sx={{ width: "425px" }}
          />

          <LinkButton
            title="여기에 캐러셀 혹은 수동 캐러셀"
            sx={{ width: "92px" }}
          />
        </footer>
      </body>
    </div>
  );
}
