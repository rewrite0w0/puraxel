import { useState, useEffect } from "react";
import _ from "./temp.page5.module.css";

import parts01onPaper from "src/image/FX5000/page5/fx-5000_01_active.svg";
import parts02onPaper from "src/image/FX5000/page5/fx-5000_02_active.svg";
import parts03onPaper from "src/image/FX5000/page5/fx-5000_03_active.svg";
import parts04onPaper from "src/image/FX5000/page5/fx-5000_04_active.svg";

const GrayButton = (props) => {
  return (
    <span
      className={`${_.optionButtonCommon}`}
      style={{
        width: props.width,
      }}
    >
      {props.title}
    </span>
  );
};

const Bar = () => {
  return (
    <div className={_.hrContainer}>
      <hr className={_.commonHR} />
    </div>
  );
};

const ExplainFrame = (props) => {
  return (
    <section className={_.frameContainer}>
      <Bar />
      <br />
      <span className={_.frameTitle}>{props.title}</span>
      <br />
      <span className={_.frameExp}>{props.exp}</span>
    </section>
  );
};

const ExplainFeatureMode = () => {
  return (
    <span>
      1) 레이저 모드
      <br />
      2) 초음파 모드
      <br />
      3) 갈바닉 모드 <span className={_.subExplain}>(옵션)</span>
      <br />
      4) 쿨링 모드 <span className={_.subExplain}>(옵션)</span>
      <br />
      5) LED 모드 <span className={_.subExplain}>(옵션)</span>
      <br />
    </span>
  );
};

const ProductWeight = () => {
  return (
    <span className={_.mainExplain}>
      616g <span className={_.subExplain}>(Main body)</span>
      <br />
      503g <span className={_.subExplain}>(Cradle, 배터리 포함)</span>
    </span>
  );
};

const ProductSize = () => {
  return (
    <span>
      82x201x225.3mm <span className={_.subExplain}>(Main body)</span>
      <br />
      250x169x135mm <span className={_.subExplain}>(Cradle)</span>
    </span>
  );
};

const ProductBattery = () => {
  return (
    <span>
      11.1V 1,300mAh
      <br />
      Lithium-Polymer Battery
      <br />
      충전 어댑터: 14VDC / 1.71A
    </span>
  );
};
const ProductETC = () => {
  return (
    <span style={{ display: "flex", flexWrap: "wrap" }}>
      <GrayButton title="제품 본체" width="76px" />
      <GrayButton title="충전 크래들" width="88px" />
      <GrayButton title="어댑터" width="61px" />
      <GrayButton title="보안경(시술자용, 고객용)" width="161px" />
      <GrayButton title="레이저 헤드팁(원형, 일자, 네모)" width="195px" />
      <GrayButton title="초음파 헤드" width="88px" />
      <GrayButton title="배터리(충전용) *2" width="124px" />
      <GrayButton title="사용 설명서" width="88px" />
      <GrayButton title="퀵 가이드" width="76px" />
    </span>
  );
};

const ExplainOnPaper = () => {
  return (
    <section
      style={{
        // display: "grid",
        // gridTemplateColumns: "1fr 1fr auto",
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
          justifyContent: "flex-start",
          width: "50%",
        }}
      >
        <ExplainFrame title="제품명" exp="퓨라셀 fx-5000" />
        <ExplainFrame title="레이저 종류" exp="Er:YAG" />
        <ExplainFrame title="레이저 등급" exp="1등급(class 1)" />
        <ExplainFrame title="레이저 레벨 범위" exp="1~3 level" />
        <ExplainFrame title="기능 모드" exp={<ExplainFeatureMode />} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
          justifyContent: "flex-start",
          width: "50%",
        }}
      >
        <ExplainFrame title="제품 무게" exp={<ProductWeight />} />
        <ExplainFrame title="제품 사이즈" exp={<ProductSize />} />
        <ExplainFrame title="배터리" exp={<ProductBattery />} />
        <ExplainFrame title="구성품" exp={<ProductETC />} />
      </div>
    </section>
  );
};

export default function Page5() {
  const [parts, setParts] = useState(undefined);

  const imageOnClickHandler = {
    onPu: () => {
      setParts("pu");
    },
    onRa: () => {
      setParts("ra");
    },
    onXel: () => {
      setParts("xel");
    },
    onMe: () => {
      setParts("me");
    },
  };

  const Parts01 = () => {
    return <div className={_.promo0}></div>;
  };

  const Parts02 = () => {
    return <div className={_.promo1}></div>;
  };
  const Parts03 = () => {
    return <div className={_.promo2}></div>;
  };
  const Parts04 = () => {
    return <div className={_.promo3}></div>;
  };

  const PartsViewer = () => {
    if (parts === "pu") {
      return <Parts01 />;
    }

    if (parts === "ra") {
      return <Parts02 />;
    }
    if (parts === "xel") {
      return <Parts03 />;
    }
    if (parts === "me") {
      return <Parts04 />;
    }
  };

  useEffect(() => {
    return setParts("pu");
  }, []);

  return (
    <section className={_.container}>
      <aside className={_.imageSelector}>
        <div
          className={`${_.imageCommon} ${_.header0}`}
          style={{
            filter: parts === "pu" ? "grayScale(0)" : "grayScale(1)",
          }}
          onClick={imageOnClickHandler.onPu}
        ></div>
        <div
          className={`${_.imageCommon} ${_.header1}`}
          style={{
            filter: parts === "ra" ? "grayScale(0)" : "grayScale(1)",
          }}
          onClick={imageOnClickHandler.onRa}
        ></div>
        <div
          className={`${_.imageCommon} ${_.header2}`}
          style={{
            filter: parts === "xel" ? "grayScale(0)" : "grayScale(1)",
          }}
          onClick={imageOnClickHandler.onXel}
        ></div>
        <div
          className={`${_.imageCommon} ${_.header3}`}
          style={{
            filter: parts === "me" ? "grayScale(0)" : "grayScale(1)",
          }}
          onClick={imageOnClickHandler.onMe}
        ></div>
      </aside>
      <article className={_.imageContainer}>
        <PartsViewer />
      </article>
      <article className={_.explainContainer}>
        <div style={{ marginBottom: "24px" }}>
          <span className={_.explainTitle}>제품 구성 및 사양</span>
        </div>

        <div className={_.explainPaperContainer}>
          <div className={_.explainContainerInner}>
            <ExplainOnPaper />
          </div>
        </div>
      </article>
    </section>
  );
}
