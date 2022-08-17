import style from "./LinkPriceButton.module.css";
import _ from "./CommonPlainButtons.module.css";

export default function CommonPlainButtons(props) {
  return (
    <section
      {...props}
      // style={{
      //   background: "rgba(255,255,255,0.6)",
      //   boxShadow: "0px 6px 20px rgba(127, 46, 190, 0.05)",
      //   border: "1px solid #FFFFFF",
      //   borderRadius: "4px",
      //   display: "flex",
      //   // gridTemplateRows: "1fr 1fr",
      //   height: "64px",
      //   // flexDirection: "column",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   ...props.style,
      // }}
      className={_.buttonContainer}
      onClick={() => {
        window.open(props.link ? props.link : "/", "_blank");
      }}
    >
      <div>{props.icon}</div>
      <div>{props.title}</div>
    </section>
  );
}
