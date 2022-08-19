import style from "./temp.page1.module.css";

export default function Page0() {
  return (
    <main className={style.container}>
      <section className={style.leftContainer}>
        <span className={style.subTitle}>에스테틱 레이저의 시작</span>
        <span className={style.title}>PURAXEL ME</span>

        <span className={style.mainExplain}>레이저 기술로</span>
        <span className={style.mainExplainSub} style={{ marginBottom: "24px" }}>
          에스테틱에 혁신을 가져오다
        </span>

        <span className={style.subExplain}>
          병원, 의료기관에서만 볼 수 있던 프락셔널 레이저 기기,
        </span>
        <span className={style.subExplain}>
          이제는 집에서도 편리하게 사용하실 수 있습니다.
        </span>
      </section>
      <span className={style.rightContainer}>
        <span className={style.meImage} />
      </span>
    </main>
  );
}
