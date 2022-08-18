import _ from "./temp.page1.module.css";

export default function Page0() {
  return (
    <main className={_.container}>
      <section className={_.leftContainer}>
        <span className={_.subTitle}>에스테틱의 시작</span>
        <span className={_.title}>PURAXEL FX-5000</span>

        <span className={_.expTop}>레이저 기술로</span>
        {/* <br /> */}
        <span className={_.expBot}>에스테틱에 혁신을 가져오다</span>

        {/* <br style={{ marginBottom: "24px" }} /> */}
        <span className={_.explainDetail}>
          퓨라셀 PURAXEL은 <br />
          에스테틱에서 만날 수 있는 고품격 미용 레이저입니다.
        </span>
      </section>
      <section className={_.rightContainer}>
        <div className={_.rightImage}></div>
      </section>
    </main>
  );
}
