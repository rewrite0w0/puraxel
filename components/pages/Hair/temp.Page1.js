import _ from "./temp.page1.module.css";

export default function Page0() {
  return (
    <main className={_.container}>
      <section className={_.leftContainer}>
        <span className={_.subTitle}>에스테틱의 시작</span>
        <span className={_.title}>PURAXEL HAIR</span>

        <span
          style={{
            fontSize: "40px",
            letterSpacing: "-0.02em",
            color: "#4D5058",
            fontWeight: "300",
          }}
        >
          레이저 기술로
        </span>
        <span style={{ marginBottom: "24px" }}>
          <span
            style={{
              fontSize: "48px",
              letterSpacing: "-0.02em",
              color: "#55576F",
              fontWeight: "600",
            }}
          >
            에스테틱에 혁신
          </span>
          <span
            style={{
              fontSize: "40px",
              letterSpacing: "-0.02em",
              color: "#4D5058",
              fontWeight: "300",
            }}
          >
            을 가져오다
          </span>
        </span>
        <span
          style={{
            fontSize: "24px",
            letterSpacing: "-0.02em",
            color: "#4D5058",
            fontWeight: "300",
          }}
        >
          퓨라셀 PURAXEL은
        </span>
        <span
          style={{
            fontSize: "24px",
            letterSpacing: "-0.02em",
            color: "#4D5058",
            fontWeight: "300",
          }}
        >
          에스테틱에서 만날 수 있는
        </span>
        <span
          style={{
            fontSize: "24px",
            letterSpacing: "-0.02em",
            color: "#4D5058",
            fontWeight: "300",
          }}
        >
          고품격 미용 레이저입니다.
        </span>
      </section>
      <section style={{ display: "flex" }}>
        <div className={_.rightImage}></div>
      </section>
    </main>
  );
}
