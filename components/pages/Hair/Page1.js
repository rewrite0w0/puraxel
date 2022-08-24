import _ from "./page1.module.css";

export default function Page0() {
  return (
    <main className={_.container}>
      <section className={_.leftContainer}>
        <div className={_.subTitle}>
          레이저 기술로 극복하는 탈모 증상, 자신있는 삶의 회복
        </div>
        <div className={_.title}>PURAXEL HAIR</div>

        <div
          style={{
            fontSize: "48px",
            letterSpacing: "-0.02em",
            color: "#55576F",
            fontWeight: "600",
            lineHeight: "128%",
          }}
        >
          머리카락이 돋아나는 마법을
        </div>
        <div
          style={{
            fontSize: "40px",
            letterSpacing: "-0.02em",
            color: "#4D5058",
            fontWeight: "300",
            lineHeight: "128%",
          }}
        >
          경험하실 수 있습니다.
        </div>
      </section>
      <section className={_.rightContainer}>
        <div className={_.rightImage}></div>
      </section>
    </main>
  );
}
