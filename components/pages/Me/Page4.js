import { useState, useEffect } from "react";
import _ from "./page4.module.css";
import Fadein from "components/Parts/FadeIn";

const Header0 = () => {
  return <div className={`${_.header0} ${_.header__image__common}`}></div>;
};

const Header00 = () => {
  return <div className={`${_.header00} ${_.header__image__common}`}></div>;
};

const Header1 = () => {
  return <div className={`${_.header1} ${_.header__image__common}`}></div>;
};

const Header11 = () => {
  return <div className={`${_.header11} ${_.header__image__common}`}></div>;
};

const Header2 = () => {
  return <div className={`${_.header2} ${_.header__image__common}`}></div>;
};

const Header22 = () => {
  return <div className={`${_.header22} ${_.header__image__common}`}></div>;
};

const Header3 = () => {
  return <div className={`${_.header3} ${_.header__image__common}`}></div>;
};

const Header33 = () => {
  return <div className={`${_.header33} ${_.header__image__common}`}></div>;
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
      <div className={_.frameTitle}>{props.title}</div>
      <div className={_.frameExp}>{props.exp}</div>
    </section>
  );
};

const LaserWave = () => {
  return (
    <div className={_.mainExplain}>
      2940nm <span className={_.subExplain}>(±1%)</span>
    </div>
  );
};

const LaserPowerRange = () => {
  return (
    <div className={_.mainExplain}>
      80~140mJ <span className={_.subExplain}>(±20)</span>
    </div>
  );
};

const LaserRepeat = () => {
  return (
    <div className={_.mainExplain}>
      3~5 seconds <span className={_.subExplain}>interval</span>
    </div>
  );
};

const ProductFeature = () => {
  return (
    <div className={_.mainExplain}>
      1) Fractional Laser
      <br />
      2) Galvanic
    </div>
  );
};

const ProductWeight = () => {
  return (
    <div className={_.mainExplain}>
      350g <span className={_.subExplain}>(Main body)</span>
      <br />
      Cradle: 110g <span className={_.subExplain}>(Cradle)</span>
    </div>
  );
};

const ProducetSize = () => {
  return (
    <div className={_.mainExplain}>
      50x57x220mm <span className={_.subExplain}>(Main body)</span>
      <br />
      98x98x85mm <span className={_.subExplain}>(Cradle)</span>
    </div>
  );
};

const ProductSpec = () => {
  return (
    <div className={_.mainExplain}>
      Built-in Rechargeable
      <br />
      11.1V 850mAh
      <br />
      Lithium-Polymer Battery
    </div>
  );
};

const ExplainOnPaper = () => {
  return (
    <section className={_.explain__container}>
      <div className={_.explain__container__inner}>
        <ExplainFrame title="제품명" exp="퓨라셀 me" />
        <ExplainFrame title="레이저 파장" exp={<LaserWave />} />
        <ExplainFrame title="레이저 레벨 범위" exp="1~2 level" />
        <ExplainFrame title="레이저 종류" exp="Er:YAG" />
        <ExplainFrame title="레이저 출력 범위" exp={<LaserPowerRange />} />
        <ExplainFrame title="레이저 반복" exp={<LaserRepeat />} />
      </div>
      <div className={_.explain__container__inner}>
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

  const [productTitleState, setProductTitleState] = useState(true);
  const [productSpecState, setProductSpecState] = useState(false);

  const ProductInfo = () => {
    return (
      <div className={_.product__common__container}>
        <div style={{ marginRight: "6rem" }}>
          <ExplainFrame title="제품명" exp="퓨라셀 me" />
          <ExplainFrame title="레이저 파장" exp={<LaserWave />} />
          <ExplainFrame title="레이저 레벨 범위" exp="1~2 level" />
        </div>
        <div>
          <ExplainFrame title="레이저 종류" exp="Er:YAG" />
          <ExplainFrame title="레이저 출력 범위" exp={<LaserPowerRange />} />
          <ExplainFrame title="레이저 반복" exp={<LaserRepeat />} />
        </div>
      </div>
    );
  };

  const ProductSpecDetail = () => {
    return (
      <div
        className={_.product__common__container}
        style={{ justifyContent: "space-between" }}
      >
        <div>
          <ExplainFrame title="기능 모드" exp={<ProductFeature />} />
          <ExplainFrame title="제품 무게" exp={<ProductWeight />} />
        </div>
        <div>
          <ExplainFrame title="제품 사이즈" exp={<ProducetSize />} />
          <ExplainFrame title="배터리 사양" exp={<ProductSpec />} />
        </div>
      </div>
    );
  };

  const ProductContainer = () => {
    return (
      <section className={_.product__container}>
        <article className={_.product__button__container}>
          <div
            onClick={(e) => {
              setProductTitleState(true);
              setProductSpecState(false);
              e.preventDefault();
            }}
            className={`${
              productTitleState
                ? _.product__button__common__state__on
                : _.product__button__common__state__off
            } ${_.product__button__common}`}
          >
            제품명/레이저
          </div>
          <div
            onClick={(e) => {
              setProductTitleState(false);
              setProductSpecState(true);
              e.preventDefault();
            }}
            className={`${
              productSpecState
                ? _.product__button__common__state__on
                : _.product__button__common__state__off
            } ${_.product__button__common}`}
          >
            기능/사양
          </div>
        </article>

        {productTitleState ? <ProductInfo /> : <ProductSpecDetail />}
      </section>
    );
  };

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
        <div className={_.product__image__container}>
          <div
            className={`${_.promo0} ${_.product__image__inner__container}`}
          ></div>
        </div>
      </Fadein>
    );
  };

  const Parts02 = () => {
    return (
      <Fadein>
        <div className={_.product__image__container}>
          <div
            className={`${_.promo1} ${_.product__image__inner__container}`}
          ></div>
        </div>
      </Fadein>
    );
  };
  const Parts03 = () => {
    return (
      <Fadein>
        <div className={_.product__image__container}>
          <div
            className={`${_.promo2} ${_.product__image__inner__container}`}
          ></div>
        </div>
      </Fadein>
    );
  };
  const Parts04 = () => {
    return (
      <Fadein>
        <div className={_.product__image__container}>
          <div
            className={`${_.promo3} ${_.product__image__inner__container}`}
          ></div>
        </div>
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
      <article className={_.image}>
        <div className={_.image__container}>
          <PartsViewer />
        </div>
      </article>
      <article className={_.explainContainer}>
        <div className={_.explainTitle__container}>
          <div className={_.explainTitle}>제품 구성 및 사양</div>
        </div>

        <div className={_.explainPaperContainer}>
          <div className={_.explainContainerInner}>
            <ExplainOnPaper />
            <ProductContainer />
          </div>
        </div>
      </article>
    </section>
  );
}
