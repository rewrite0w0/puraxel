import { CaptionIcon } from "components/Parts/Icons";
import style from "./page2Parts.module.css";

const ExplainContainerRightSide = (props) => {
  return (
    <section
      style={{
        marginLeft: "8px",
        marginRight: "8px",
        marginTop: "8px",
        display: "flex",
        flexDirection: "column",
        alignSelf: "flex-start",
        ...props.sx,
      }}
    >
      {props.title}
      {props.content}
    </section>
  );
};

const UltraTopExplain = () => {
  return (
    <span className={style.explainTitleCommon} style={{ marginTop: "8px" }}>
      기능성 솔루션을 바른 후 마사지하면
      <br />
      <span>높은 흡수력</span>으로 더 탄력있고 촘촘한
      <br /> 피부 관리를 도와줍니다.
    </span>
  );
};

const UltraMiddleTopExplain = () => {
  return (
    <span className={style.explainTitleCommon} style={{ marginTop: "8px" }}>
      같은 극끼리 밀어내는 갈바닉 기술을 활용하여
      <br />
      이온화된 화장품의 흡수율을 높입니다.
      <br />
      레이저 모드와 함께 사용하면 피부 흡수율을
      <br />
      극대화할 수 있습니다.
    </span>
  );
};

const UltraMiddleBottomExplain = () => {
  return (
    <span
      className={style.explainTitleCommon}
      style={{
        marginTop: "8px",
        letterSpacing: "-0.03em",
        fontSize: "12px",
        fontWeight: "600",
        color: "#7e818d",
      }}
    >
      갈바닉+이온(+ION)으로
      <br />
      노폐물을 배출
      <br />
      <br />
      기능성 솔루션과 함께
      <br />
      음이온(-ION)으로 영양분 침투에 도움
    </span>
  );
};

const UltraBottomExplain = () => {
  return (
    <span className={style.explainTitleCommon} style={{ marginTop: "8px" }}>
      <span
        style={{
          letterSpacing: "-0.01em",
          fontSize: "16px",
          fontWeight: "300",
          color: "#4d5058",
        }}
      >
        차가운 쿨링효과로 피부를 진정시키고
        <br />
        모공 축소를 도와줍니다.
      </span>
      <br />
      <span
        style={{
          letterSpacing: "-0.03em",
          fontSize: "12px",
          fontWeight: "600",
          color: "#7e818d",
        }}
      >
        레이저, 초음파, LED 사용 후 쿨링모드 사용시
        <br />
        피부를 차갑게 진정 시켜, 확장된 모공 축소에 도움을 줍니다.
      </span>
    </span>
  );
};

const LaserExplainInLaser = (props) => {
  return (
    <span className={style.explainTitleCommon} style={{ marginTop: "8px" }}>
      <span style={{ fontWeight: "500" }}>피부 재생용 레이저</span>를 피부에
      조사하여,
      <br />
      5~200µm의 표피층에 1회 약 100개의 <br />
      Multi-Micro pore을 만들어
      <span style={{ fontWeight: "500" }}>
        화장품 등의
        <br />
        약물 흡수율을 증가
      </span>
      시킵니다.
    </span>
  );
};

const LedExplainInLaser = (props) => {
  return (
    <span className={style.explainTitleCommon} style={{ marginTop: "8px" }}>
      <span>
        <span style={{ fontWeight: "500" }}>3가지 파장의 빛</span>으로 피부
        깊숙한 곳까지
        <br />
        건강하고 탄력 있게 관리해줍니다.
      </span>
      <br />
      <span
        style={{
          fontWeight: 600,
          fontSize: "12px",
          letterSpacing: "-0.03em",
          color: "#7e818d",
        }}
      >
        Red, Blue, Pink 모드 중 원하는 기능 사용
        <br />
        으로 피부 진정과 보습・탄력, 트러블 완화에 도움을 줍니다.
      </span>
    </span>
  );
};

const ExplainContainerTitle = (props) => {
  return (
    <div
      style={{
        display: "flex",
        // height: "43px",
        background: "#f8f9fa",
        // background: "pink",
        borderRadius: "4px",
        padding: "8px 12px",
        width: "fit-content",
        alignItems: "flex-end",
        ...props.sx,
      }}
    >
      <span
        style={{
          color: "#55576f",
          fontSize: "18px",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          marginRight: "8px",
        }}
      >
        {props.title}
      </span>

      <span
        style={{
          color: "#A292A3",
          fontSize: "14px",
          fontWeight: 700,
          letterSpacing: "-0.01em",
        }}
      >
        {props.subTitle}
      </span>
    </div>
  );
};

const RedButton = () => {
  return (
    <span
      className={`${style.optionButtonCommon}`}
      style={{
        background: "#DD7A8C",
        color: "#fff",
      }}
    >
      기본 기능
    </span>
  );
};

const BlackButton = () => {
  return (
    <span
      className={`${style.optionButtonCommon}`}
      style={{
        background: "#7e818d",
        color: "#fff",
      }}
    >
      옵션 기능
    </span>
  );
};

const GrayButton = (props) => {
  return (
    <span
      className={`${style.optionButtonCommon}`}
      style={{
        color: "#4d5058",
        background: "#f2f3f7",
        ...props.sx,
        marginRight: "8px",
      }}
    >
      {props.title}
    </span>
  );
};

const LaserModeImageTop = ({ children }) => {
  return (
    <div className={`${style.modeImageCommon} ${style.LaserModeImageTop}`}>
      {children}
    </div>
  );
};

const LaserModeImageBottom = ({ children }) => {
  return (
    <div className={`${style.modeImageCommon} ${style.LaserModeImageBottom}`}>
      {children}
    </div>
  );
};

const UltraModeImagetop = ({ children }) => {
  return (
    <div className={`${style.modeImageCommon} ${style.UltraModeImagetop}`}>
      {children}
    </div>
  );
};

const UltraModeImageUpperMiddle = ({ children }) => {
  return (
    <div
      className={`${style.modeImageCommon} ${style.UltraModeImageUpperMiddle}`}
    >
      {children}
    </div>
  );
};
const UltraModeImageLowerMiddle = ({ children }) => {
  return (
    <div
      className={`${style.modeImageCommon} ${style.UltraModeImageLowerMiddle}`}
    >
      {children}
    </div>
  );
};
const UltraModeImageBottom = ({ children }) => {
  return (
    <div className={`${style.modeImageCommon} ${style.UltraModeImageBottom}`}>
      {children}
    </div>
  );
};

const ExplainContainerDouble = () => {
  return (
    <section
      style={{
        display: "flex",
        boxSizing: "border-box",
        width: "594px",
        height: "320px",
        background: "rgba(255, 255, 255, 0.5)",
        border: "1px solid #F2F3F7",
        borderRadius: "4px",
        alignItems: "center",
        marginTop: "8px",
        marginBottom: "8px",
        // paddingLeft: "8px",
        flexDirection: "column",
        // paddingRight: "8px",
      }}
    >
      <div style={{ display: "flex", alignSelf: "flex-start" }}>
        <UltraModeImageUpperMiddle>
          <BlackButton />
          <GrayButton title="사용: 4분" sx={{ width: "60px" }} />
        </UltraModeImageUpperMiddle>
        <ExplainContainerRightSide
          title={
            <ExplainContainerTitle
              width="267px"
              title="갈바닉"
              subTitle="딥 클렌징, 피부속 영양분 침투 촉진"
            />
          }
          content={<UltraMiddleTopExplain />}
        ></ExplainContainerRightSide>
      </div>

      <div
        style={{ display: "flex", alignSelf: "flex-start", marginTop: "8px" }}
      >
        <UltraModeImageLowerMiddle />
        <ExplainContainerRightSide
          sx={{ marginTop: "45px" }}
          title={<ExplainContainerTitle />}
          content={<UltraMiddleBottomExplain />}
        ></ExplainContainerRightSide>
      </div>
    </section>
  );
};

const ExplainContainer = ({ children }) => {
  return (
    <section
      style={{
        display: "flex",
        boxSizing: "border-box",
        width: "594px",
        height: "164px",
        background: "rgba(255, 255, 255, 0.5)",
        border: "1px solid #F2F3F7",
        borderRadius: "4px",
        alignItems: "center",
        marginTop: "8px",
        marginBottom: "8px",
        // paddingLeft: "8px",
        flexDirection: "row",
        // paddingRight: "8px",
      }}
    >
      {children}
    </section>
  );
};

const Caption = () => {
  return (
    <section
      style={{
        display: "flex",
        width: "558px",
        height: "58px",
        borderRadius: "4px",
        background: "rgba(255,255,255,0.5)",
        // justifyContent: "center",
        // alignItems: "center",
        marginTop: "8px",
      }}
    >
      <span
        style={{
          width: "40px",
          heigth: "17px",
          width: "40px",
          height: "17px",
          display: "flex",
          alignItems: "flex-start",
          marginTop: "12px",
          marginLeft: "20px",
        }}
      >
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "-5px",
          }}
        >
          <CaptionIcon />
        </span>
        <span
          style={{
            fontWeight: 600,
            letterSpacing: "-0.03rem",
            fontSize: "12px",
            color: "#7e818d",
          }}
        >
          주의
        </span>
      </span>
      <span
        style={{
          fontWeight: 400,
          letterSpacing: "-0.02rem",
          fontSize: "12px",
          color: "#7e818d",
          marginLeft: "8px",
          marginTop: "12px",
          marginRight: "20px",
        }}
      >
        본 장비는 눈에 보이지 않는 레이저를 사용하고 있어 눈에 직접 또는
        반사되는 레이저 조사 시 위험합니다. 반드시 보안경 착용 후 사용하며 절대
        직·간접적으로 보지 말아야 합니다.
      </span>
    </section>
  );
};

const Explain1 = () => {
  return (
    <span>
      응급 시 제품을 놓을 경우, 센서에 의해 &nbsp;
      <span style={{ fontWeight: "700" }}>즉시 동작이 멈춥니다.</span>
    </span>
  );
};

const Explain2 = () => {
  return (
    <span>
      접촉 센서에 의해&nbsp;{" "}
      <span style={{ fontWeight: "700" }}>
        레이저 헤드가 피부에 닿아야만 작동
      </span>
      합니다.
    </span>
  );
};

const Explain3 = () => {
  return (
    <span>
      적외선 센서에 의해&nbsp;
      <span style={{ fontWeight: "700" }}>손잡이 파지 시에만 작동</span>합니다.
    </span>
  );
};

const Explain4 = () => {
  return (
    <span>
      조사&nbsp;
      <span style={{ fontWeight: "700" }}>버튼을 누를 때만 레이저 조사</span>
      됩니다.
    </span>
  );
};

const SafeFeature = (props) => {
  return (
    <article
      style={{
        display: "flex",
        width: "594px",
        height: "60px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 100%)",
        // background:
        //   "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6), #ffffff",
        border: "1px solid #f8f9fa",
        borderRadius: "4px",
        // marginBottom: "16px",
        marginTop: "16px",
      }}
    >
      <span
        style={{
          width: "136px",
          background:
            "linear-gradient(90deg, rgba(248,249,250,0) 0%, #f8f9fa 100%)",

          // linear-gradient(90deg, rgba(248, 249, 250, 0) 0%, #F8F9FA 100%);
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            background: props.maruColor ? "#CA797E" : "#b298ad",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "10px",
            fontWeight: "700",
            // margin: "8px",
            marginLeft: "8px",
            marginRight: "8px",
          }}
        >
          {props.number}
        </span>
        <span
          style={{
            color: "#55576f",
            fontWeight: "700",
            fontSize: "16px",
            letterSpacing: "-0.01em",
          }}
        >
          {props.title}
        </span>
      </span>
      <span
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          color: "#4d5058",
          fontSize: "16px",
          letterSpacing: "-0.01rem",
          fontWeight: "500",
          background: "#fff",
        }}
      >
        &nbsp; &nbsp;{props.explain}
      </span>
    </article>
  );
};

export function LaserModeParts() {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "175px",
        marginLeft: "80px",
      }}
    >
      <ExplainContainer>
        <LaserModeImageTop>
          <RedButton />
          <GrayButton title="모공관리 (레벨: 1~3)" sx={{ width: "115px" }} />
        </LaserModeImageTop>
        <ExplainContainerRightSide
          title={
            <ExplainContainerTitle
              width="231px"
              title="레이저"
              subTitle="피부 속 채널 생성, 모공 관리"
            />
          }
          content={<LaserExplainInLaser />}
        ></ExplainContainerRightSide>
      </ExplainContainer>

      <ExplainContainer>
        <LaserModeImageBottom>
          <BlackButton />
          <GrayButton title="사용: 3분" sx={{ width: "60px" }} />
        </LaserModeImageBottom>
        <ExplainContainerRightSide
          title={
            <ExplainContainerTitle
              width="207px"
              title="LED"
              subTitle="보습・탄력 및 트러블 진정"
            />
          }
          content={<LedExplainInLaser />}
        ></ExplainContainerRightSide>
        {/* <LedExplainInLaser /> */}
      </ExplainContainer>

      <section style={{ marginTop: "18px" }}>
        <span
          style={{
            letterSpacing: "-0.01rem",
            fontSize: "14px",
            fontWeight: 500,
            color: "#55576f",
          }}
        >
          레이저 모드
        </span>
        <br style={{ marginBottom: "8px" }} />
        <span
          style={{
            letterSpacing: "-0.01rem",
            fontSize: "24px",
            fontWeight: 700,
            color: "#55576f",
            marginBottom: "8px",
          }}
        >
          안전 기능
        </span>
      </section>

      <SafeFeature
        maruColor="a"
        number="1"
        title="긴급 멈춤"
        explain={<Explain1 />}
      />

      <SafeFeature
        // maruColor="a"
        number="2"
        title="접속 센서"
        explain={<Explain2 />}
      />

      <SafeFeature
        maruColor="a"
        number="3"
        title="그립 센서"
        explain={<Explain3 />}
      />

      <SafeFeature
        // maruColor="a"
        number="4"
        title="조사 스위치"
        explain={<Explain4 />}
      />

      <Caption />
      {/* <section>접속 센서</section>
      <section>그립 센서</section>
      <section>조사 스위치</section>
      <section
        style={{
          borderRadius: "4px",
          background: "rgba(255,255,255,0.5)",
          width: "558px",
          heigth: "58px",
        }}
      >
        <span>! 주의</span>
        <span>
          본 장비는 눈에 보이지 않는 레이저를 사용하고 있어 눈에 직접 또는
          반사되는 레이저 조사 시 위험합니다. 반드시 보안경 착용 후 사용하며
          절대 직·간접적으로 보지 말아야 합니다.
        </span>
      </section> */}
    </article>
  );
}

export function UltraModeParts() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "175px",
        marginLeft: "80px",
      }}
    >
      <ExplainContainer>
        <UltraModeImagetop>
          <RedButton />
          <GrayButton title="사용: 5분" sx={{ width: "60px" }} />
        </UltraModeImagetop>
        <ExplainContainerRightSide
          title={
            <ExplainContainerTitle
              width="167px"
              title="초음파"
              subTitle="영양 흡수・공급"
            />
          }
          content={<UltraTopExplain />}
        ></ExplainContainerRightSide>
      </ExplainContainer>
      {/*  */}

      <ExplainContainerDouble />
      {/* <ExplainContainerDouble>
        <UltraModeImageUpperMiddle>
          <BlackButton />
          <GrayButton title="사용: 4분" sx={{ width: "60px" }} />
        </UltraModeImageUpperMiddle>
        <ExplainContainerRightSide
          title={
            <ExplainContainerTitle
              width="267px"
              title="갈바닉"
              subTitle="딥 클렌징, 피부속 영양분 침투 촉진"
            />
          }
          content={<UltraMiddleTopExplain />}
        ></ExplainContainerRightSide>

        <UltraModeImageLowerMiddle />
        <ExplainContainerRightSide
          title={<ExplainContainerTitle />}
          content={<UltraMiddleBottomExplain />}
        ></ExplainContainerRightSide>
      </ExplainContainerDouble> */}

      {/* <ExplainContainer>
        <UltraModeImageUpperMiddle>
          <BlackButton />
          <GrayButton title="사용: 4분" sx={{ width: "60px" }} />
        </UltraModeImageUpperMiddle>
        <ExplainContainerRightSide
          title={
            <ExplainContainerTitle
              width="267px"
              title="갈바닉"
              subTitle="딥 클렌징, 피부속 영양분 침투 촉진"
            />
          }
          content={<UltraMiddleTopExplain />}
        ></ExplainContainerRightSide>
      </ExplainContainer> */}
      {/*  */}
      {/* <ExplainContainer>
        <UltraModeImageLowerMiddle />
        <ExplainContainerRightSide
          title={<ExplainContainerTitle />}
          content={<UltraMiddleBottomExplain />}
        ></ExplainContainerRightSide>
      </ExplainContainer> */}
      {/*  */}
      <ExplainContainer
        style={{ marginTop: "-10px", borderTop: "transparent" }}
      >
        <UltraModeImageBottom>
          <BlackButton />
          <GrayButton title="사용: 3분" sx={{ width: "60px" }} />
        </UltraModeImageBottom>
        <ExplainContainerRightSide
          title={
            <ExplainContainerTitle
              width="112px"
              title="쿨링"
              subTitle="피부진정・모공 축소"
            />
          }
          content={<UltraBottomExplain />}
        ></ExplainContainerRightSide>
      </ExplainContainer>
    </section>
  );
}
