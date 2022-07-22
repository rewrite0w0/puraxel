import { Box } from "@mui/material";
import LinkButton from "./LinkButton";
import LinkPriceButton from "./LinkPriceButton";
import layoutFooterKr from "public/locales/kr/layoutFooter.json";

export default function MeFooterLeft() {
  return (
    <Box sx={{ display: "flex", heigth: "2vh", alignItems: "center" }}>
      <LinkButton buttonName={layoutFooterKr.ShoppingMallLink} />

      <LinkPriceButton
        title={layoutFooterKr.Me}
        price={layoutFooterKr.MePrice}
        installment={layoutFooterKr.MeInstallmentDuration}
        installmentPrice={layoutFooterKr.MeInstallmentPrice}
        link="/"
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
    </Box>
  );
}
