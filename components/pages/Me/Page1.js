import style from "./page1.module.css";

export default function Page0() {
  return (
    <article className={style.container}>
      <section className={style.leftContainer}>
        <div className={style.subTitle}>홈 에스테틱 레이저의 시작</div>
        <div className={style.title}>PURAXEL-ME</div>

        <div className={style.mainExplain}>
          프락셔널 레이저의 효능을 직접 확인하실 수 있습니다.
        </div>
        {/* <div className={style.mainExplainSub}>직접 확인하실 수 있습니다.</div> */}

        <div className={style.explain_sub}>
          하루 10분, 이제 집에서 관리하세요.
        </div>
      </section>
      <div className={style.rightContainer}>
        <div className={style.margin__bottom}></div>
        <div className={style.meImage} />
      </div>
      <div className={style.me__caption}>※ 이 제품은 “미용기기” 입니다</div>
    </article>
  );
}
