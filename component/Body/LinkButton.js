import { Button } from "@mui/material";
import style from "./LinkButton.module.css";
import StoreIcon from "@mui/icons-material/Store";

export default function LinkButton(props) {
  return (
    <>
      <Button variant="text" className={style.btn} startIcon={<StoreIcon />}>
        {props.buttonName}
      </Button>
    </>
  );
}
