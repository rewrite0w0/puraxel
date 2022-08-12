import style from "./page3.module.css";

const ExplainContainer = (props) => {
  return (
    <section className={style.explainContainer}>
      {props.image}
      <br />
      {props.explain}
    </section>
  );
};

const Image1 = () => {
  return <div className={style.image1}></div>;
};

const Exp1 = () => {
  return (
    <span className={style.expBox}>
      퓨라셀 레이저 침투 깊이{" "}
      <span style={{ fontWeight: 500 }}>0.06~0.2mm</span>
    </span>
  );
};

const Image2 = () => {
  return <div className={style.image2}></div>;
};

const Exp2 = () => {
  return (
    <span className={style.expBox}>
      1회 약 <span style={{ fontWeight: 500 }}>100개의 미세한 마이크로홀</span>{" "}
      생성
    </span>
  );
};

const Image3 = () => {
  return <div className={style.image3}></div>;
};

const Exp3 = () => {
  return (
    <span className={style.expBox}>
      생성된 마이크로홀을 통해{" "}
      <span style={{ fontWeight: 500 }}>유효성분을 피부 속으로 전달</span>
    </span>
  );
};

const Image4 = () => {
  return <div className={style.image4}></div>;
};

const Exp4 = () => {
  return (
    <span className={style.expBox}>
      화장품의 <span style={{ fontWeight: 500 }}>흡수율을 향상</span>시켜{" "}
      <span style={{ fontWeight: 500 }}>효능 극대화</span>
    </span>
  );
};

const Step = (props) => {
  return (
    <section style={{ display: "flex", marginBottom: "8px" }}>
      <section className={style.step}>
        <span style={{ fontWeight: 600, fontSize: "12px" }}>
          STEP
          <br />
        </span>

        <span style={{ fontWeight: 800, fontSize: "16px" }}>{props.step}</span>
      </section>
      <section className={style.title}>
        <span style={{ color: "#55576f", fontSize: "18px" }}>
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
    <section className={style.StepContainer}>
      <Step step={1} title="레이저 조사" subtitle="2940mm Er.YAG" />
      <ExplainContainer image={<Image1 />} explain={<Exp1 />} />
    </section>
  );
};

const Step2 = () => {
  return (
    <section className={style.StepContainer}>
      <Step step={2} title="채널 생성" subtitle="Micro hole" />
      <ExplainContainer image={<Image2 />} explain={<Exp2 />} />
    </section>
  );
};

const Step3 = () => {
  return (
    <section className={style.StepContainer}>
      <Step step={3} title="유효 성분 전달" subtitle="Delivery" />
      <ExplainContainer image={<Image3 />} explain={<Exp3 />} />
    </section>
  );
};

const Step4 = () => {
  return (
    <section className={style.StepContainer}>
      <Step step={4} title="피부 속 앰플 흡수" subtitle="Absorption" />
      <ExplainContainer image={<Image4 />} explain={<Exp4 />} />
    </section>
  );
};

export default function Page3() {
  return (
    <section className={style.container}>
      <div className={style.leftContainer}>
        <div style={{ marginBottom: "71px" }}>
          <span style={{ fontSize: "32px", color: "#a7abb6" }}>
            프락셔널 레이저 & 갈바닉
          </span>
          <br />
          <span style={{ fontSize: "48px", color: "#55576f" }}>작용원리</span>
        </div>
        <div className={style.leftContainerBot}>
          <div>
            <Step1 />
          </div>
          <div>
            <Step2 />
          </div>
          <div>
            <Step3 />
          </div>
          <div>
            <Step4 />
          </div>
        </div>
      </div>
      <div className={style.rightImageContainer}></div>
    </section>
  );
}
