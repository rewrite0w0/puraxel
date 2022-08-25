import style from "./ClinicalTestImageParts.module.css";

export default function ClinicalTestImageParts(props) {
  return (
    <div
      className={style.icon}
      style={{
        ...props.sx,
      }}
      {...props}
    >
      <hr className={style.dot} />

      <span className={style.para}>{props.title}</span>
    </div>
  );
}
