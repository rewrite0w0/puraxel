import { Button } from "@mui/material";
import style from "styles/NavbarsCommon.module.css";

export default function NavIconButton(props) {
  return (
    <div>
      <Button
        startIcon={props.icon ? props.icon : false}
        href={props.link ? props.link : props.link}
        className={style.NavItem}
      >
        {props.title ? props.title : "타이틀 없음 :/"}
      </Button>
    </div>
  );
}
