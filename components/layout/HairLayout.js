import LinkButton from "components/Footer/LinkButton";
import LinkPriceButton from "components/Footer/LinkPriceButton";
import layoutFooterKr from "public/locales/kr/layoutFooter.json";

import StoreIcon from "@mui/icons-material/Store";
import { ShopIcon } from "components/Parts/Icons";
import style from "./MeLayout.module.css";

export default function HairLayout({ children }) {
  return (
    <div className={style.meContainer}>
      <body className={style.bodyContainer}>{children}</body>
      <footer
        className={style.footerContainer}
        style={{
          // position: "fixed",
          display: "flex",

          // zIndex: 99,
          // height: "10vh",
          // backgroundColor: 'blue',
          // right: 0,
          // left: "4vw",
          // bottom: "1vh",
          // width: "100%",
          // justifyContent: "space-between",
          // justifyContent: "space-around",
          // justifyContent: "space-evenly",
        }}
      >
        <LinkButton
          title={layoutFooterKr.ShoppingMallLink}
          link="https://qwant.com"
          icon={<ShopIcon sx={{ fontSize: "1.1vw" }} />}
          sx={{ width: "4vw", fontSize: "1vw" }}
        />

        <LinkPriceButton
          title={layoutFooterKr.Me}
          price={layoutFooterKr.MePrice}
          installment={layoutFooterKr.MeInstallmentDuration}
          installmentPrice={layoutFooterKr.MeInstallmentPrice}
          link="https://qwant.com"
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
        />

        <LinkButton
          sx={{ marginLeft: "42vw" }}
          title="여기에 캐러셀 혹은 수동 캐러셀"
        />
      </footer>
    </div>
  );
}
