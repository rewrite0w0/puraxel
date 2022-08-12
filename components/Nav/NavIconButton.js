export default function NavIconButton(props) {
  return (
    <div
      style={{ ...props.sx, cursor: "pointer" }}
      disableRipple
      className={props.className}
      onClick={props.onClick}
      {...props}
    >
      {props.title ? props.title : ""}
    </div>
  );
}
