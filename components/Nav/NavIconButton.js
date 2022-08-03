import { Button } from "@mui/material";
import style from "./Nav.module.css";

export default function NavIconButton(props) {
  return (
    <Button
      style={{ ...props.sx }}
      disableRipple
      className={props.className}
      {...props}
    >
      {props.title ? props.title : ""}
    </Button>
  );
}
