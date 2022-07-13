import { Button } from "@mui/material";

export default function FooterFamilySiteButton(props) {
  return (
    <div>
      <Button
        startIcon={props.icon ? "" : !props.icon}
        href={props.link ? props.link : "https://www.qwant.com/"}
      >
        {props.title ? props.title : "타이틀 미정 :/"}
      </Button>
    </div>
  );
}
