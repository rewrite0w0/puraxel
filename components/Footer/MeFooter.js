import { Box } from "@mui/material";
import MeFooterRight from "./MeFooterRight";
import MeFooterLeft from "./MeFooterLeft";
import style from "styles/LayoutFooter.module.css";

export default function MeFooter() {
  return (
    <Box sx={{ display: "flex" }}>
      <MeFooterLeft />
      {/* <MeFooterRight className={style.rightFooter} /> */}
    </Box>
  );
}
