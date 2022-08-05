import style from "./CommonButtons.module.css";

export default function CommonButtons(props) {
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
        // justifyContent: "center",
        cursor: "pointer",
        ...props.style,
      }}
      onClick={() => {
        window.open(props.link ? props.link : "/", "_blank");
      }}
    >
      <div
        style={{
          marginRight: "16px",
          marginTop: "8px",
          marginBottom: "8px",
          marginLeft: "8px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            color: "#4D5058",
            fontsize: "16px",
            fontWeight: "500",
            // letterSpacing: "-1px",
            letterSpacing: "-0.01em",
          }}
        >
          {props.topLeft}
        </span>
        <span>
          <span
            style={{
              color: "#C7CAD3",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "-0.03em",
              marginRight: "4px",
            }}
          >
            {props.topRightOriginalPrice ? props.topRightOriginalPrice : ""}
          </span>
          <span
            style={{
              color: "#B398AD",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "-0.03em",
              marginRight: "4px",
            }}
          >
            {props.topRightDiscountPrice}
          </span>
        </span>
      </div>

      <div
        style={{
          marginRight: "16px",
          marginBottom: "8px",
          marginLeft: "8px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            color: "#4D5058",
            fontsize: "12px",
            fontWeight: "500",
            letterSpacing: "-1px",
            color: "#B398AD",
          }}
        >
          {props.bottomLeft ? props.bottomLeft : ""}
        </span>
        <span>
          <span
            style={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#C7CAD3",
            }}
          >
            {props.bottomRightz}
          </span>
          &nbsp;
          <span
            style={{ color: "#4D5058", fontSize: "20px", fontWeight: "300" }}
          >
            {props.bottomRightx}
          </span>
        </span>
      </div>
    </section>
  );
}
