import _ from "./page1.module.css";

export default function Page1() {
  return (
    <section className={_.container}>
      <article className={_.explainContainer}>
        <div className={_.explain_inner_container}>
          <div className={_.explain_wrap_container}>
            <div className={_.explain_top}>
              <span className={_.explain_top__bold}>홀</span>로 빛나다
            </div>
            <div className={_.explain_mid}>
              <div>레이저의 미세한 홀이</div>

              <div>당신의 피부를 지켜줍니다.</div>
            </div>

            <div className={_.explain_bot_title}>소형 미용 기기의 혁신</div>

            <div className={_.explain_bot_sub}>
              <div>레이저 전문 기업이 만들어</div>
              <div>더욱 안전한 소형 프락셔널 레이저</div>
            </div>
          </div>
        </div>
      </article>
      <article className={_.imageContainer}>
        <div className={_.imageContent}></div>
      </article>
    </section>
  );
}
