import _ from "./CommonPlainButtons.module.css";

export default function CommonPlainButtons(props) {
  return (
    <section
      {...props}
      className={`${props.class}`}
      onClick={() => {
        window.open(props.link ? props.link : "/", "_blank");
      }}
    >
      <div>{props.icon}</div>
      <div>{props.title}</div>
    </section>
  );
}
