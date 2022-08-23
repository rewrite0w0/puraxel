import _ from "./page1.module.css";

export default function Page0() {
  return (
    <main className={_.container}>
      <section className={_.leftContainer}>
        <div className={_.subTitle}>피부 전문가를 위한 프락셔널 레이저</div>
        <div className={_.title}>PURAXEL FX-5000</div>

        <div className={_.expTop}>소형 레이저 기술로</div>
        <div className={_.expBot}>에스테틱에 혁신을 가져오다</div>

        <div className={_.explainDetail}>
          FX-5000은 에스테틱 샵에서만 구매 가능한 전문가용 제품입니다.
        </div>
      </section>
      <section className={_.rightContainer}>
        <div className={_.rightImage}></div>
      </section>
    </main>
  );
}
