import { Box } from "@mui/material";
import style from "./Nav.module.css";

export default function NavIconButton(props) {
  return (
    <Box
      style={{ ...props.sx, width: "5vw" }}
      className={style.buttonStyle}
      {...props}
    >
      {props.title ? props.title : ""}
    </Box>
  );
}
