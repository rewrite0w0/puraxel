import { Box } from "@mui/material";
import LinkButton from "./LinkButton";
import LinkPriceButton from "./LinkPriceButton";
import layoutFooterKr from "public/locales/kr/layoutFooter.json";

export default function MeFooterLeft() {
  return (
    <Box sx={{ display: "flex", heigth: "2vh", alignItems: "center" }}>
      <LinkButton buttonName={layoutFooterKr.ShoppingMallLink} />
      <LinkPriceButton />
      <LinkPriceButton />
    </Box>
  );
}
