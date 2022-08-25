import Fadein from "components/Parts/FadeIn";
import { useState, useEffect } from "react";
import _ from "./page5.module.css";

const Header0 = () => {
  return <div className={_.header0}></div>;
};

const Header00 = () => {
  return <div className={_.header00}></div>;
};

const Header1 = () => {
  return <div className={_.header1}></div>;
};

const Header11 = () => {
  return <div className={_.header11}></div>;
};

const Header2 = () => {
  return <div className={_.header2}></div>;
};

const Header22 = () => {
  return <div className={_.header22}></div>;
};

const Header3 = () => {
  return <div className={_.header3}></div>;
};

const Header33 = () => {
  return <div className={_.header33}></div>;
};

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
      <span className={_.frameTitle}>{props.title}</span>
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
    <span className={_.product__etc__container}>
      <GrayButton title="제품 본체" width="7.6rem" />
      <GrayButton title="충전 크래들" width="8.8rem" />
      <GrayButton title="어댑터" width="6.1rem" />
      <GrayButton title="보안경(시술자용, 고객용)" width="16.1rem" />
      <GrayButton title="레이저 헤드팁(원형, 일자, 네모)" width="19.5rem" />
      <GrayButton title="초음파 헤드" width="8.8rem" />
      <GrayButton title="배터리(충전용) *2" width="12.4rem" />
      <GrayButton title="사용 설명서" width="8.8rem" />
      <GrayButton title="퀵 가이드" width="7.6rem" />
    </span>
  );
};

const ExplainOnPaper = () => {
  return (
    <section className={_.explain__on__paper__container}>
      <div className={_.explain__on__paper__container__inner}>
        <ExplainFrame title="제품명" exp="퓨라셀 fx-5000" />
        <ExplainFrame title="레이저 종류" exp="Er:YAG" />
        <ExplainFrame title="레이저 등급" exp="1등급(class 1)" />
        <ExplainFrame title="레이저 레벨 범위" exp="1~3 level" />
        <ExplainFrame title="기능 모드" exp={<ExplainFeatureMode />} />
      </div>
      <div className={_.explain__on__paper__container__inner}>
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
    return (
      <Fadein>
        <div className={_.promo0}></div>
      </Fadein>
    );
  };

  const Parts02 = () => {
    return (
      <Fadein>
        <div className={_.promo1}></div>
      </Fadein>
    );
  };
  const Parts03 = () => {
    return (
      <Fadein>
        <div className={_.promo2}></div>
      </Fadein>
    );
  };
  const Parts04 = () => {
    return (
      <Fadein>
        <div className={_.promo3}></div>
      </Fadein>
    );
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
        <div className={_.imageCommon} onClick={imageOnClickHandler.onPu}>
          {parts === "pu" ? <Header0 /> : <Header00 />}
        </div>
        <div className={_.imageCommon} onClick={imageOnClickHandler.onRa}>
          {parts === "ra" ? <Header1 /> : <Header11 />}
        </div>
        <div className={_.imageCommon} onClick={imageOnClickHandler.onXel}>
          {parts === "xel" ? <Header2 /> : <Header22 />}
        </div>
        <div className={_.imageCommon} onClick={imageOnClickHandler.onMe}>
          {parts === "me" ? <Header3 /> : <Header33 />}
        </div>
      </aside>
      <article className={_.imageContainer}>
        <div
          style={{
            width: "800px",
            height: "800px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PartsViewer />
        </div>
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
