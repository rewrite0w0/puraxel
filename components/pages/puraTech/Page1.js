import { useState } from "react";
import meKr from "public/locales/kr/me";
import style from "./page1.module.css";

const MaruNumber = (props) => {
  return <section className={style.maruNumber}>{props.num}</section>;
};

const temp = () => {
  return (
    <div>
      <MaruNumber num={1} />
      <MaruNumber num={2} />
      <MaruNumber num={3} />
    </div>
  );
};

const PageTitle = () => {
  return <div className={style.ExplainTitle}>Fractional 레이저</div>;
};

const Page01 = () => {
  return (
    <section className={style.ExplainContainer}>
      <span className={style.ExplainCommonPara}>
        Array Lens를 사용한 Fractional 형태의 레이저 출력
      </span>
      <div className={style.page01Image}></div>
    </section>
  );
};

const Page02 = () => {
  return (
    <section className={style.ExplainContainer}>
      <span className={style.ExplainCommonPara}>
        방사되는 레이저 에너지는 생체에 흡수되며 피부 내 물분자의 결합을
        파괴하며 나오는
      </span>
      <br />
      <span className={style.ExplainCommonPara}>
        높은 에너지 통해 피부를 증발 시켜 Micro hole 생성
      </span>
      <br />
      <span className={style.ExplainCommonParaSub}>
        *1회 레이저 조사 시 약 100개 Micro holes생성
      </span>
      <div className={style.page02Image}></div>
    </section>
  );
};

const Page03 = () => {
  return (
    <section className={style.ExplainContainer}>
      <span className={style.ExplainCommonPara}>
        0.2mm 이하 표피조직에만 최소한 침습 되어 기능성 화장품 등의 영양물질
        흡수율 향상 시킴
      </span>
      <br />
      <span className={style.ExplainCommonParaSub}>
        퓨라셀 레이저는 표피 조직에만 침입하여 부작용을 최소화 할 수 있습니다.
      </span>
      <div className={style.page03Image}></div>
    </section>
  );
};

const ExplainFloatingTop = () => {
  return (
    <section className={style.ExplainFloatingTop}>
      <span>갈바닉, 초음파 LED, Cooling으로</span>
      <br />
      <span>흡수율 향상</span>
    </section>
  );
};

const ExplainFloatingBottom = () => {
  return (
    <section className={style.ExplainFloatingBottom}>
      <span>
        <span className={style.ExplainFloatingBottomBold}>
          피부 재생 레이저
        </span>{" "}
        적용,
      </span>
      <br />
      <span>
        피부에{" "}
        <span className={style.ExplainFloatingBottomBold}>
          Micro Hole을 생성해
        </span>
      </span>
      <br />
      <span>
        화장품 등의{" "}
        <span className={style.ExplainFloatingBottomBold}>
          영양 물질의 흡수를 촉진
        </span>
        합니다.
      </span>
    </section>
  );
};

export default function Page1() {
  const [pageState, setPageState] = useState("page1");

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "228px",
        marginRight: "228px",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <section>
        <span
          style={{
            fontSize: "48px",
            fontWeight: "300",
            letterSpacing: "-0.02em",
            color: "#55576f",
          }}
        >
          하이브리드 레이저의 에스테틱 솔루션
          <br />
          퓨라셀의 기술력
          <br />
          <span
            style={{
              fontSize: "96px",
              fontWeight: "300",
              letterSpacing: "-0.02em",
              color: "#55576f",
            }}
          >
            Fractional + MTS function
          </span>
        </span>
      </section>
      <section style={{ display: "flex" }}>
        <div>
          <ExplainFloatingTop />
          <ExplainFloatingBottom />
        </div>
        <div style={{ marginLeft: "155px" }}>
          <section style={{ display: "flex", alignItems: "center" }}>
            <PageTitle />
            <span className={style.ExplainTitleSub}>작동 방식</span>
            <span>번호</span>
            <span>화살표</span>
          </section>
          {/* <Page01 /> */}
          {/* <Page02 /> */}
          <Page03 />
        </div>
      </section>
    </article>
  );
}
