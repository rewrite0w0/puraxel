import _ from "./page1.module.css";

export default function Page1() {
  return (
    <section className={_.container}>
      <article className={_.explainContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // height: "50%",
            // justifyContent: "space-evenly",
            justifyContent: "center",
            // background: "blue",
            padding: "20px",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "48px",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <span className={_.icon}>고품격 홈 레이저 퓨라셀</span>
            </div>
            <div>
              <span className={_.iconTitle}>
                홈 에스테틱
                <br />
                레이저의 시작
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "96px",
            }}
          >
            <div style={{ marginBottom: "24px" }}>
              <span className={_.mainExp}>
                프락셔널 레이저 모듈로 생성되는
                <br />
                5000개의 마이크로 홀.
              </span>
            </div>
            <br />
            <div>
              <span className={_.subExp}>
                레이저, 시작부터 프로페셔널.
                <br />
                홈 레이저 뷰티 케어의 시작.
                <br />
                퓨라셀 ME.
                <br />
              </span>
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
