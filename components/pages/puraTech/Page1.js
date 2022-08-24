import _ from "./page1.module.css";

const ExplainContainer = (props) => {
  return (
    <section className={_.explainContainer}>
      {props.image}
      <br />
      {props.explain}
    </section>
  );
};

const Image1 = () => {
  return <div className={_.image1}></div>;
};

const Exp1 = () => {
  return (
    <span className={_.expBox}>
      퓨라셀 레이저 침투 깊이{" "}
      <span style={{ fontWeight: 500 }}>0.06~0.2mm</span>
    </span>
  );
};

const Image2 = () => {
  return <div className={_.image2}></div>;
};

const Exp2 = () => {
  return (
    <span className={_.expBox}>
      1회 약 <span style={{ fontWeight: 500 }}>100개의 미세한 마이크로홀</span>{" "}
      생성
    </span>
  );
};

const Image3 = () => {
  return <div className={_.image3}></div>;
};

const Exp3 = () => {
  return (
    <span className={_.expBox}>
      생성된 마이크로홀을 통해{" "}
      <span style={{ fontWeight: 500 }}>유효성분을 피부 속으로 전달</span>
    </span>
  );
};

const Image4 = () => {
  return <div className={_.image4}></div>;
};

const Exp4 = () => {
  return (
    <span className={_.expBox}>
      화장품의 <span style={{ fontWeight: 500 }}>흡수율을 향상</span>시켜{" "}
      <span style={{ fontWeight: 500 }}>효능 극대화</span>
    </span>
  );
};

const Step = (props) => {
  return (
    <section style={{ display: "flex", marginBottom: "8px" }}>
      <section className={_.step}>
        <span style={{ fontWeight: 600, fontSize: "12px" }}>
          STEP
          <br />
        </span>

        <span style={{ fontWeight: 800, fontSize: "16px" }}>{props.step}</span>
      </section>
      <section className={_.title}>
        <span
          style={{ color: "#55576f", fontSize: "18px", marginRight: "8px" }}
        >
          {props.title}
        </span>
        &nbsp;
        <span style={{ color: "#a292a3", fontSize: "14px" }}>
          {props.subtitle}
        </span>
      </section>
    </section>
  );
};

const Step1 = () => {
  return (
    <section className={_.StepContainer}>
      <Step step={1} title="레이저 조사" subtitle="2940mm Er.YAG" />
      <ExplainContainer image={<Image1 />} explain={<Exp1 />} />
    </section>
  );
};

const Step2 = () => {
  return (
    <section className={_.StepContainer}>
      <Step step={2} title="채널 생성" subtitle="Micro hole" />
      <ExplainContainer image={<Image2 />} explain={<Exp2 />} />
    </section>
  );
};

const Step3 = () => {
  return (
    <section className={_.StepContainer}>
      <Step step={3} title="유효 성분 전달" subtitle="Delivery" />
      <ExplainContainer image={<Image3 />} explain={<Exp3 />} />
    </section>
  );
};

const Step4 = () => {
  return (
    <section className={_.StepContainer}>
      <Step step={4} title="피부 속 앰플 흡수" subtitle="Absorption" />
      <ExplainContainer image={<Image4 />} explain={<Exp4 />} />
    </section>
  );
};

const PuraxelTitle = () => {
  return (
    <article className={`${_.inner__container} ${_.inner__container__left}`}>
      <div className={_.puraxel__title__sub}>프라셔널 레이저</div>
      <div className={_.puraxel__title__main}>퓨라셀의 기술</div>
      <div className={_.puraxel__title__image}></div>
    </article>
  );
};

const PuraxelExplain = () => {
  return (
    <article className={`${_.inner__container} ${_.inner__container__right}`}>
      <div
        className={`${_.puraxel__explain__container} ${_.puraxel__explain__container__upper}`}
      >
        <div className={_.puraxel__explain__title}>
          <span>
            프라셔널 레이저&nbsp;
            <span className={_.puraxel__explain__title__bold}>원리</span>
          </span>
        </div>

        <div
          className={`${_.puraxel__explain__float__container} ${_.puraxel__explain__float__container__upper}`}
        >
          <span
            className={_.puraxel__explain__para}
            style={{ alignItems: "flex-end" }}
          >
            레이저 빔이 Array Lens를 통과하며, 피부에 약 100개의 미세한
            구멍(마이크로 홀)을
            <br />
            생성합니다. 이 때, 생성되는 마이크로 홀은 피부의 약 0.2mm 이하의
            표피 조직에 위치하게
            <br /> 되며, 이 미세한 홀들을 통해
            <span className={_.puraxel__explain__para__bold}>
              기능성 화장품 등의 영양 물질 흡수율을 높일 수 있습니다.
            </span>
          </span>
        </div>

        <div
          className={`${_.puraxel__explain__float__container} ${_.puraxel__explain__float__container__lower}`}
        >
          <span className={_.puraxel__explain__para}>
            퓨라셀은 2940nm 파장 대의&nbsp;
            <span className={_.puraxel__explain__para__bold}>
              Er:Yag 레이저를 사용
            </span>
            합니다. Er:Yag는 표피의 수분에 대부분
            <br />
            흡수되는 성질을 갖고 있으며, 열손상이 적어 천공 깊이의 조절이 가능한
            장점이 있습니다.
          </span>
        </div>
      </div>

      <div className={_.puraxel__explain__step__container}>
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
      </div>
    </article>
  );
};

export default function Page3() {
  return (
    <section className={_.container}>
      <PuraxelTitle />
      <PuraxelExplain />
    </section>
  );
}
