import { Button } from "@mui/material";

export default function NavIconButton(props) {
  return (
    <div>
      <Button
        startIcon={props.icon ? "" : !props.icon}
        href={props.link ? props.link : "https://www.qwant.com/"}
      >
        {props.title ? props.title : "타이틀 없음 :/"}
      </Button>
    </div>
  );
}
