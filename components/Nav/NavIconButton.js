import { Button, Box } from "@mui/material";
import style from "./Nav.module.css";

export default function NavIconButton(props) {
  return (
    <div>
      <Box
        // startIcon={props.icon ? props.icon : false}
        style={{ ...props.sx, width: "5vw" }}
        href={props.link ? props.link : props.link}
        className={style.buttonStyle}
        {...props}
      >
        {props.title ? props.title : ""}
      </Box>
    </div>
  );
}
