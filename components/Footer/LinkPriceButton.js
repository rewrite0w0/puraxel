import { Box, Button } from "@mui/material";
import style from "./LinkPriceButton.module.css";

export default function LinkPriceButton(props) {
  return (
    <>
      <Box
        className={style.priceButton}
        sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Box>
    </>
  );
}
