import { Box } from "@mui/material";
import LinkButton from "./LinkButton";
import LinkPriceButton from "../Body/LinkPriceButton";

export default function MeFooterRight() {
  return (
    <Box sx={{ display: "flex" }}>
      <LinkButton />
      <LinkPriceButton />
    </Box>
  );
}
