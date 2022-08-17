import _ from "./Nav.module.css";
export default function NavIconButton(props) {
  return (
    <div
      style={{ ...props.sx, cursor: "pointer" }}
      className={`${props.className} ${_.commonText}`}
      onClick={props.onClick}
      {...props}
    >
      <span
        className={_.titleStyle}
        style={{
          ...props.style,
          cursor: "pointer",
        }}
      >
        {props.title ? props.title : ""}
      </span>
    </div>
  );
}
