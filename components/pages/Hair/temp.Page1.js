import _ from "./temp.page1.module.css";

export default function Page0() {
  return (
    <main className={_.container}>
      <section className={_.leftContainer}>
        <div className={_.subTitle}>에스테틱의 시작</div>
        <div className={_.title}>PURAXEL HAIR</div>

        <div
          style={{
            fontSize: "40px",
            letterSpacing: "-0.02em",
            color: "#4D5058",
            fontWeight: "300",
            lineHeight: "128%",
          }}
        >
          레이저 기술로
        </div>

        <div
          style={{
            fontSize: "48px",
            letterSpacing: "-0.02em",
            color: "#55576F",
            fontWeight: "600",
            marginBottom: "24px",
            lineHeight: "128%",
          }}
        >
          에스테틱에 혁신을 가져오다
        </div>

        <div
          style={{
            fontSize: "24px",
            letterSpacing: "-0.02em",
            color: "#4D5058",
            fontWeight: "300",
            lineHeight: "140%",
          }}
        >
          퓨라셀 PURAXEL은
        </div>
        <div
          style={{
            fontSize: "24px",
            letterSpacing: "-0.02em",
            color: "#4D5058",
            fontWeight: "300",
            lineHeight: "140%",
          }}
        >
          에스테틱에서 만날 수 있는 고품격 미용 레이저입니다.
        </div>
      </section>
      <section className={_.rightContainer}>
        <div className={_.rightImage}></div>
      </section>
    </main>
  );
}
