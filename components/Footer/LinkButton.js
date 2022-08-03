import { Box } from "@mui/material";
import style from "./LinkButton.module.css";
import _style from "./LinkPriceButton.module.css";

export default function LinkButton(props) {
  return (
    <Box
      // className={style.plainButton}
      className={_style.priceButton}
      style={{ ...props.sx }}
      onClick={() => {
        window.open(props.link ? props.link : "/", "_blank");
      }}
    >
      <span>
        {props.icon ? props.icon : ""}

        {props.title ? props.title : ""}
      </span>
    </Box>
  );
}
