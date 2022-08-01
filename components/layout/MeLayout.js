import { motion } from "framer-motion";
import layoutStyle from "components/pages/Me/mePage.module.css";

import { Box } from "@mui/material";

import LinkButton from "components/Footer/LinkButton";
import LinkPriceButton from "components/Footer/LinkPriceButton";
import layoutFooterKr from "public/locales/kr/layoutFooter.json";

import StoreIcon from "@mui/icons-material/Store";

export default function MeLayout({ children }) {
  return (
    <div>
      <body
        style={
          {
            // height: '100vh',
            // backgroundColor: 'skyblue',
            // background:
            //   'linear-gradient(rgba(255, 255, 255, 0.3), rgba(252, 209, 215, 0.7))',
            // position: 'relative',
            // margin: 0,
          }
        }
      >
        {children}
      </body>
      <footer
        style={{
          position: "fixed",
          display: "flex",
          zIndex: 99,
          height: "10vh",
          // backgroundColor: 'blue',
          right: 0,
          left: "4vw",
          bottom: "1vh",
        }}
      >
        <LinkButton
          title={layoutFooterKr.ShoppingMallLink}
          link="https://qwant.com"
          icon={<StoreIcon />}
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
