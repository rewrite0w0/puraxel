import { Box } from "@mui/material";
import style from "./LinkPriceButton.module.css";
import layoutFooterKr from "public/locales/kr/layoutFooter.json";

export default function LinkPriceButton(props) {
  return (
    <>
      <Box
        className={style.priceButton}
        sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
        href={props.link ? props.link : "/"}
        onClick={() => {
          window.open(props.link ? props.link : "/", "_blank");
        }}
      >
        <div className={style.priceButton1}>{props.title}</div>
        <div className={style.priceButton2}>
          {props.originalPrice ? props.originalPrice : false}{" "}
          {props.arrow ? props.arrow : false} {props.price}
        </div>
        <div className={style.priceButton3}>
          {props.offRate ? props.offRate : ""}
        </div>
        <div className={style.priceButton4}>
          <span>{props.installment} </span>
          <span>{props.installmentPrice}</span>
        </div>
      </Box>
    </>
  );
}
