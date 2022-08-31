import style from "./page1.module.css";

export default function Page0() {
  return (
    <main className={style.container}>
      <section className={style.leftContainer}>
        <div className={style.subTitle}>홈 에스테틱 레이저의 시작</div>
        <div className={style.title}>PURAXEL-ME</div>

        <div className={style.mainExplain}>전문적으로 사용하던</div>
        <div className={style.mainExplainSub}>
          프락셔널 레이저의 문턱을 낮췄습니다.
        </div>

        <div className={style.explain_sub}>
          하루 10분, 이제 집에서 관리하세요.
        </div>
      </section>
      <div className={style.rightContainer}>
        <div className={style.meImage} />
      </div>
    </main>
  );
}
