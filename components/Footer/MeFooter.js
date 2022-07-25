import { Box } from "@mui/material";
import MeFooterRight from "./MeFooterRight";
import MeFooterLeft from "./MeFooterLeft";
import style from "styles/LayoutMeFooter.module.css";

export default function MeFooter() {
  return (
    <Box sx={{ display: "flex" }} className={style.footer}>
      <MeFooterLeft />
      <MeFooterRight />
    </Box>
  );
}
