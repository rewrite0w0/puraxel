import { Box } from "@mui/material";
import MeFooterRight from "./MeFooterRight";
import MeFooterLeft from "./MeFooterLeft";

export default function MeFooter() {
  return (
    <Box sx={{ display: "flex" }}>
      <MeFooterLeft />
      <MeFooterRight />
    </Box>
  );
}
