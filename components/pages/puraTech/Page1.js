import { useState } from "react";
import meKr from "public/locales/kr/me";
import style from "./page1.module.css";
import { ArrowLA, ArrowLI, ArrowRA, ArrowRI } from "components/Parts/Icons";

const MaruNumber = (props) => {
  return <section className={style.maruNumber}>{props.num}</section>;
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
      <div className={style.commonImage}>
        <div className={style.page01Image}></div>
      </div>
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
      <div className={style.commonImage}>
        <div className={style.page02Image}></div>
      </div>
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
      <div className={style.commonImage}>
        <div className={style.page03Image}></div>
      </div>
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

const ArrowLayout = ({ children }) => {
  return <section style={{ display: "flex" }}>{children}</section>;
};

export default function Page1() {
  const [pageState, setPageState] = useState("page1");

  const onClickHandler = {
    page01: () => setPageState("page1"),
    page02: () => setPageState("page2"),
    page03: () => setPageState("page3"),
  };

  const CurrentArrow = () => {
    if (pageState === "page1") {
      return (
        <ArrowLayout>
          <ArrowLI />
          <ArrowRA
            onClick={onClickHandler.page02}
            style={{ cursor: "pointer" }}
          />
        </ArrowLayout>
      );
    }

    if (pageState === "page2") {
      return (
        <ArrowLayout>
          <ArrowLA
            onClick={onClickHandler.page01}
            style={{ cursor: "pointer" }}
          />
          <ArrowRA
            onClick={onClickHandler.page03}
            style={{ cursor: "pointer" }}
          />
        </ArrowLayout>
      );
    }

    if (pageState === "page3") {
      return (
        <ArrowLayout>
          <ArrowLA
            onClick={onClickHandler.page02}
            style={{ cursor: "pointer" }}
          />
          <ArrowRI />
        </ArrowLayout>
      );
    }
  };

  const CurrentNumber = () => {
    if (pageState === "page1") {
      return <MaruNumber num={1} />;
    }

    if (pageState === "page2") {
      return <MaruNumber num={2} />;
    }
    if (pageState === "page3") {
      return <MaruNumber num={3} />;
    }
  };

  const PageDetail = () => {
    if (pageState === "page1") {
      return <Page01 />;
    }

    if (pageState === "page2") {
      return <Page02 />;
    }
    if (pageState === "page3") {
      return <Page03 />;
    }
  };

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "228px",
        marginRight: "228px",
        marginTop: "164px",
        marginBottom: "100px",
      }}
    >
      <section>
        <span
          style={{
            fontSize: "48px",
            // fontWeight: "300",
            letterSpacing: "-0.02em",
            color: "#55576f",
          }}
          className={style.subTitle}
        >
          하이브리드 레이저의 에스테틱 솔루션
          <br />
          퓨라셀의 기술력
          <br style={{ marginBottom: "24px" }} />
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
        <div style={{ marginTop: "114px" }}>
          <ExplainFloatingTop />
          <ExplainFloatingBottom />
        </div>
        <div style={{ marginLeft: "155px", marginTop: "61px" }}>
          <section
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <PageTitle />
            <span className={style.ExplainTitleSub}>작동 방식</span>
            <span>
              <CurrentNumber />
            </span>
            <span>
              <CurrentArrow />
            </span>
          </section>
          <PageDetail />
        </div>
      </section>
    </article>
  );
}
