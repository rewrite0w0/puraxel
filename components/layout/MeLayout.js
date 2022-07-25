import { Box } from "@mui/material";
import MeFooterRight from "components/Footer//MeFooterRight";
import MeFooterLeft from "components/Footer//MeFooterLeft";
import style from "styles/LayoutMeFooter.module.css";

export default function MeLayout({ children }) {
  return (
    <div>
      <body className={style.backGround}>{children}</body>
      <footer>
        <Box sx={{ display: "flex" }} className={style.footer}>
          <MeFooterLeft />
          <MeFooterRight />
        </Box>
      </footer>
    </div>
  );
}
