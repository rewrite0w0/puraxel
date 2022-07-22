import commonStyle from "./Me.common.module.css";

export default function Page1(props) {
  return (
    <div
      className={commonStyle.backGround}
      //   style={{
      //     height: "100vh",
      //     width: "100%",
      //     background: "rgba(2,2,2,0.12)",
      //     color: "green",
      //     position: "inherit",
      //   }}
    >
      dddd
      <div className={commonStyle.temp}>move?</div>
    </div>
  );
}
