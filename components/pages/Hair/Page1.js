import _ from "./page1.module.css";

export default function Page0() {
  return (
    <main className={_.container}>
      <section className={_.leftContainer}>
        <div className={_.subTitle}>
          레이저 기술로 극복하는 탈모 증상, 자신있는 삶의 회복
        </div>
        <div className={_.title}>PURAXEL HAIR</div>

        <div className={_.explain}>
          프락셔널 레이저는 기능성 앰플의 두피 흡수를 도와
          <br /> 탈모관리에 효과적입니다.
        </div>
        {/* <div className={_.subExplain}>경험하실 수 있습니다.</div> */}
      </section>
      <section className={_.rightContainer}>
        <div className={_.rightImage}></div>
      </section>
      <div className={_.hair__caption}>※ 이 제품은 “두피관리기기” 입니다</div>
    </main>
  );
}
