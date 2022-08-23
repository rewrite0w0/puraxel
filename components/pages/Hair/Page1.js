import _ from "./page1.module.css";

export default function Page0() {
  return (
    <main className={_.container}>
      <section className={_.leftContainer}>
        <div className={_.subTitle}>두피 전문가를 위한 프락셔널 레이저</div>
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
          소형 레이저 기술로
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
          FX-5000은 에스테틱 샵에서만 구매 가능한 전문가용 제품입니다.
        </div>
      </section>
      <section className={_.rightContainer}>
        <div className={_.rightImage}></div>
      </section>
    </main>
  );
}
