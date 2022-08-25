import style from "./ClinicalTestImageParts.module.css";

export default function ClinicalTestImageParts(props) {
  return (
    <div
      className={style.icon}
      style={{
        ...props.sx,
        color: props.color ? props.color : "#ffffff",
      }}
      {...props}
    >
      <span className={style.para}>{props.title}</span>
    </div>
  );
}
