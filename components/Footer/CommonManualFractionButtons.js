import style from "./LinkPriceButton.module.css";

export default function CommonManualFractionButtons(props) {
  return (
    <section
      {...props}
      style={{
        background: "rgba(255,255,255,0.6)",
        boxShadow: "0px 6px 20px rgba(127, 46, 190, 0.05)",
        border: "1px solid #FFFFFF",
        borderRadius: "4px",
        display: "flex",
        // gridTemplateRows: "1fr 1fr",
        height: "64px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ...props.style,
      }}
    >
      <div>{props.icon ? props.icon : "error"}</div>
      <div>{props.title ? props.title : "error"}</div>
    </section>
  );
}
