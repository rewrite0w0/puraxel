import style from "./ClinicalTestImageParts.module.css";

export default function ClinicalTestImageParts(props) {
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
