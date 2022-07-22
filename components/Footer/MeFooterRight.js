import { Box } from "@mui/material";
import LinkButton from "./LinkButton";
import LinkPriceButton from "./LinkPriceButton";

export default function MeFooterRight() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <LinkButton />
      <LinkPriceButton />
    </Box>
  );
}
