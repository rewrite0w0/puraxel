import { useState, useEffect } from "react";
import _ from "./temp.page5.module.css";

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

const LaserWave = () => {
  return (
    <span className={_.mainExplain}>
      2940nm<span className={_.subExplain}>(±1%)</span>
    </span>
  );
};

const LaserPowerRange = () => {
  return (
    <span className={_.mainExplain}>
      80~140mJ <span className={_.subExplain}>(±20)</span>
    </span>
  );
};

const LaserRepeat = () => {
  return (
    <span className={_.mainExplain}>
      3~5 seconds <span className={_.subExplain}>interval</span>
    </span>
  );
};

const ProductFeature = () => {
  return (
    <span className={_.mainExplain}>
      1) Fractional Laser
      <br />
      2) Galvanic
    </span>
  );
};

const ProductWeight = () => {
  return (
    <span className={_.mainExplain}>
      350g <span className={_.subExplain}>(Main body)</span>
      <br />
      Cradle: 110g <span className={_.subExplain}>(Cradle)</span>
    </span>
  );
};

const ProducetSize = () => {
  return (
    <span className={_.mainExplain}>
      50x57x220mm <span className={_.subExplain}>(Main body)</span>
      <br />
      98x98x85mm <span className={_.subExplain}>(Cradle)</span>
    </span>
  );
};

const ProductSpec = () => {
  return (
    <span className={_.mainExplain}>
      Built-in Rechargeable
      <br />
      11.1V 850mAh
      <br />
      Lithium-Polymer Battery
    </span>
  );
};

const ExplainOnPaper = () => {
  return (
    <section style={{ display: "flex", width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
          justifyContent: "flex-start",
          // background: "red",
          width: "50%",
        }}
      >
        <ExplainFrame title="제품명" exp="퓨라셀 me" />
        <ExplainFrame title="레이저 파장" exp={<LaserWave />} />
        <ExplainFrame title="레이저 레벨 범위" exp="1~2 level" />
        <ExplainFrame title="레이저 종류" exp="Er:YAG" />
        <ExplainFrame title="레이저 출력 범위" exp={<LaserPowerRange />} />
        <ExplainFrame title="레이저 반복" exp={<LaserRepeat />} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
          justifyContent: "flex-start",
          // background: "blue",
          width: "50%",
        }}
      >
        <ExplainFrame title="기능 모드" exp={<ProductFeature />} />
        <ExplainFrame title="제품 무게" exp={<ProductWeight />} />
        <ExplainFrame title="제품 사이즈" exp={<ProducetSize />} />
        <ExplainFrame title="배터리 사양" exp={<ProductSpec />} />
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
