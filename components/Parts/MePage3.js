import { Box } from "@mui/material";
import style from "./Mepage3.module.css";

export default function MePage3Parts(props) {
  return (
    <div
      className={style.icon}
      style={{
        ...props.sx,
        width: props.width ? props.width : "129px",
        color: props.color ? props.color : "#ffffff",
      }}
    >
      {props.title}
    </div>
  );
}
