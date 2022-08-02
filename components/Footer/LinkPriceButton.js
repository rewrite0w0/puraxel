import { Box } from "@mui/material";
import style from "./LinkPriceButton.module.css";

export default function LinkPriceButton(props) {
  const RED = "#B298AD";
  const GRAY = "#C7CAD3";

  return (
    <Box
      className={style.priceButton}
      sx={{
        display: "flex",
        gridTemplateColumns: "repeat(2, 1fr)",
        ...props.sx,
      }}
      href={props.link ? props.link : "/"}
      onClick={() => {
        window.open(props.link ? props.link : "/", "_blank");
      }}
    >
      <div className={style.priceButton1}>{props.title}</div>

      <div className={style.priceButton2}>
        <span style={{ color: GRAY }}>
          {props.originalPrice ? props.originalPrice : " "} &nbsp;
          {props.arrow ? props.arrow : false}
        </span>
        &nbsp;
        <span style={{ color: RED }}>{props.price}</span>
      </div>

      <div
        className={style.priceButton3}
        style={{ marginLeft: "1vw", color: RED }}
      >
        {props.offRate ? props.offRate : ""}
      </div>

      <div className={style.priceButton4}>
        <span style={{ color: GRAY }}>{props.installment}</span>
        &nbsp;
        <span>{props.installmentPrice}</span>
      </div>
    </Box>
  );
}
