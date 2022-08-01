import { Button, Box } from "@mui/material";
import style from "./LinkButton.module.css";
import StoreIcon from "@mui/icons-material/Store";
import _style from "./LinkPriceButton.module.css";

export default function LinkButton(props) {
  return (
    <>
      <Box
        variant="text"
        // className={style.plainButton}
        className={_style.priceButton}
        startIcon={<StoreIcon />}
        style={{ ...props.sx }}
        onClick={() => {
          window.open(props.link ? props.link : "/", "_blank");
        }}
      >
        <span>
          {props.icon}
          {/* <StoreIcon /> */}
          {props.buttonName}
        </span>
      </Box>
    </>
  );
}
