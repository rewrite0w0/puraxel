import style from "./Oval.module.css";

export default function Oval(props) {
  return (
    <div
      style={{
        position: "absolute",
      }}
      className={style.oval}
      {...props}
    />
  );
}
