import { CaptionIcon } from "components/Parts/Icons";
import style from "./temp.page2.parts.module.css";

const FloatingContainer = (props) => {
  return (
    <section
      className={style.floatingContainer}
      style={{ width: props.width, height: props.height, ...props.style }}
      {...props}
    >
      {props.explain}
    </section>
  );
};

const MaruPlus = () => {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10ZM5.5 11C8.53757 11 11 8.53757 11 5.5C11 2.46243 8.53757 0 5.5 0C2.46243 0 0 2.46243 0 5.5C0 8.53757 2.46243 11 5.5 11ZM3 5.5C3 5.22386 3.22386 5 3.5 5H5V3.5C5 3.22386 5.22386 3 5.5 3C5.77614 3 6 3.22386 6 3.5V5H7.5C7.77614 5 8 5.22386 8 5.5C8 5.77614 7.77614 6 7.5 6H6V7.5C6 7.77614 5.77614 8 5.5 8C5.22386 8 5 7.77614 5 7.5V6H3.5C3.22386 6 3 5.77614 3 5.5Z"
        fill="#7E818D"
      />
    </svg>
  );
};

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
    <span
      className={`${style.explainTitleCommon} ${style.explainTitleLineHeight}`}
    >
      기능성 솔루션을 바른 후 마사지하면
      <br />
      <span>높은 흡수력</span>으로 더 탄력있고 촘촘한
      <br /> 피부 관리를 도와줍니다.
    </span>
  );
};

const UltraMiddleTopExplain = () => {
  return (
    <span
      className={`${style.explainTitleCommon} ${style.explainTitleLineHeight}`}
    >
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
    <span className={style.explainTitleCommon}>
      <span
        style={{
          letterSpacing: "-0.01em",
          fontSize: "16px",
          fontWeight: "300",
          color: "#4d5058",
        }}
        className={style.explainTitleLineHeight}
      >
        차가운 쿨링효과로 피부를 진정시키고
        <br />
        모공 축소를 도와줍니다.
      </span>
      <br style={{ marginBottom: "11px" }} />
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
    <span
      className={`${style.explainTitleCommon} ${style.explainTitleLineHeight}`}
      style={{ marginTop: "8px" }}
    >
      <span style={{ fontWeight: "500" }}>피부 재생용 레이저</span>를 피부에
      조사하여,
      <br />
      5~200µm의 표피층에 1회 약 100개의 <br />
      Multi-Micro pore을 만들어&nbsp;
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
    <span className={style.explainTitleCommon}>
      <span className={style.explainTitleLineHeight}>
        <span style={{ fontWeight: "500" }}>3가지 파장의 빛</span>으로 피부
        깊숙한 곳까지
        <br />
        건강하고 탄력 있게 관리해줍니다.
      </span>
      <br style={{ marginBottom: "8px" }} />
      <span
        style={{
          fontWeight: 600,
          fontSize: "12px",
          letterSpacing: "-0.03em",
          color: "#7e818d",
          lineHeight: "140%",
        }}
      >
        <span>Red, Blue, Pink 모드 중 원하는 기능 사용으로</span>
        <br />
        <span>피부 진정과 보습・탄력, 트러블 완화에 도움을 줍니다.</span>
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
        background: props.title ? "#f8f9fa" : "transparent",
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

const LaserModeImage = ({ children }) => {
  return (
    <div className={`${style.modeImageCommon} ${style.LaserModeImage}`}>
      {children}
    </div>
  );
};

const SonicModeImage = ({ children }) => {
  return (
    <div className={`${style.modeImageCommon} ${style.SonicModeImage}`}>
      {children}
    </div>
  );
};

const GalvanicModeImage = ({ children }) => {
  return (
    <div>
      <div
        style={{ marginBottom: "13px" }}
        className={`${style.modeImageCommon} ${style.GalvanicModeImageTop}`}
      ></div>
      <div
        className={`${style.modeImageCommon} ${style.GalvanicModeImageBottom}`}
      ></div>
    </div>
  );
};

const CoolingModeImage = ({ children }) => {
  return (
    <div className={`${style.modeImageCommon} ${style.CoolingModeImage}`}>
      {children}
    </div>
  );
};
const LedModeImage = ({ children }) => {
  return (
    <div className={`${style.modeImageCommon} ${style.LedModeImage}`}>
      {children}
    </div>
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
        marginTop: "8px",
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
          paddingRight: "10px",
          paddingLeft: "8px",
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
            lineHeight: "150%",
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

export function Laser() {
  return (
    <article className={`${style.commonContainer}`}>
      <section style={{ marginTop: "18px", marginBottom: "20px" }}>
        <span className={style.laserTitle}>레이저 모드</span>
        <span className={style.laserSubTitle}>
          <span style={{ marginRight: "8px" }}>#피부 속 채널 생성</span>{" "}
          <span>#모공 관리</span>
        </span>
      </section>

      <section style={{ display: "flex" }}>
        <LaserModeImage />
        <div style={{ marginLeft: "16px" }}>
          <div style={{ display: "flex", marginBottom: "16px" }}>
            <RedButton />
            <GrayButton
              title="모공관리 (레벨:1~3)"
              sx={{ width: "148px", fontWeight: "500", fontSize: "16px" }}
            />
          </div>
          <span className={style.commonText}>
            <span>
              <span className={style.commonTextBold}>피부 재생용 레이저</span>를
              피부에 조사하여,
            </span>
            <br />
            <span>5~200µm의 표피층에 1회 약 100개의</span>
            <br />
            <span>
              Multi-Micro pore을 만들어&nbsp;
              <span className={style.commonTextBold}>화장품 등의</span>
            </span>
            <br />
            <span>
              <span className={style.commonTextBold}>약물 흡수율을 증가</span>
              시킵니다.
            </span>
          </span>
        </div>
      </section>
      <section style={{ marginTop: "75px" }}>
        <span className={style.subExplainLaserWarning}>
          안심하고 사용할 수 있는
        </span>
        <br />
        <span
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "flex-start",
          }}
        >
          <span className={style.explainLaserWarning}>레이저 안전 기능</span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <span className={style.laserWarning}>
              주의사항 &nbsp; <MaruPlus />
            </span>
          </span>
        </span>
      </section>

      <section>
        <SafeFeature
          maruColor="a"
          number="1"
          title="긴급 멈춤"
          explain={<Explain1 />}
        />

        <SafeFeature
          maruColor="a"
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
          maruColor="a"
          number="4"
          title="조사 스위치"
          explain={<Explain4 />}
        />

        <article className={style.laserButton}>
          <span className={style.laserButtonBold}>프락셔널 레이저</span>
          &nbsp;
          <span className={style.laserButtonLight}>작동 방식 보기 {">"}</span>
        </article>
      </section>
    </article>
  );
}

export function Sonic() {
  return (
    <article className={`${style.commonContainer}`}>
      <section style={{ marginTop: "18px", marginBottom: "20px" }}>
        <span className={style.laserTitle}>초음파 모드</span>

        <span className={style.laserSubTitle}>
          <span style={{ marginRight: "8px" }}>#영양 흡수</span>{" "}
          <span>#영양 공급</span>
        </span>
      </section>

      <section style={{ display: "flex" }}>
        <SonicModeImage />
        <div style={{ marginLeft: "16px" }}>
          <div style={{ display: "flex", marginBottom: "16px" }}>
            <RedButton />
            <GrayButton
              title="사용: 5분"
              sx={{ width: "75px", fontWeight: "500", fontSize: "16px" }}
            />
          </div>

          <span className={style.commonText}>
            기능성 솔루션을 바른 후 마사지하면 &nbsp;
            <span className={style.commonTextBold}>
              높은
              <br />
              흡수력
            </span>
            으로 더 탄력있고 촘촘한 피부 관리를
            <br /> 도와줍니다.
          </span>
        </div>
      </section>

      <section
        style={{
          display: "flex",
          marginTop: "78px",
          // , background: "pink"
        }}
      >
        <section style={{ position: "absolute" }}>
          <FloatingContainer
            explain={<SonicExp1 />}
            height={"166px"}
            width={"426px"}
          />
        </section>

        <section
          style={{
            position: "absolute",
            marginLeft: "149px",
            marginTop: "142px",
          }}
        >
          <FloatingContainer
            explain={<SonicExp2 />}
            height={"116px"}
            width={"425px"}
          />
        </section>
      </section>
    </article>
  );
}

export function Galvanic() {
  return (
    <article className={`${style.commonContainer}`}>
      <section style={{ marginTop: "18px", marginBottom: "20px" }}>
        <span className={style.laserTitle}>갈바닉 모드</span>
        <span className={style.laserSubTitle}>
          <span style={{ marginRight: "8px" }}>#딥 클렌징</span>{" "}
          <span>#피부 속 영양분 침투 촉진</span>
        </span>
      </section>

      <section style={{ display: "flex" }}>
        <GalvanicModeImage />

        <div style={{ marginLeft: "16px" }}>
          <div style={{ display: "flex", marginBottom: "16px" }}>
            <BlackButton />
            <GrayButton
              title="사용: 4분"
              sx={{ width: "75px", fontWeight: "500", fontSize: "16px" }}
            />
          </div>
          <span className={style.commonText}>
            같은 극끼리 밀어내는 갈바닉 기술을
            <br />
            활용하여{" "}
            <span className={style.commonTextBold}>
              이온화된 화장품의 흡수율
            </span>
            을
            <br />
            높입니다. 레이저 모드와{" "}
            <span className={style.commonTextBold}>
              함께 사용하면 피부
              <br /> 흡수율을 극대화
            </span>
            할 수 있습니다.
          </span>
        </div>
      </section>

      <section style={{ marginTop: "67px" }}>
        <section style={{ display: "flex", gap: "20px" }}>
          <FloatingContainer
            explain={<GalvanicExp1 />}
            height="150px"
            width="277px"
          />

          <FloatingContainer
            explain={<GalvanicExp2 />}
            height="116px"
            width="277px"
          />
        </section>
      </section>
    </article>
  );
}

export function Cooling() {
  return (
    <article className={`${style.commonContainer}`}>
      <section style={{ marginTop: "18px", marginBottom: "20px" }}>
        <span className={style.laserTitle}>쿨링 모드</span>
        <span className={style.laserSubTitle}>
          <span style={{ marginRight: "8px" }}>#피부 진정</span>{" "}
          <span>#모공 축소</span>
        </span>
      </section>

      <section style={{ display: "flex" }}>
        <CoolingModeImage />
        <div style={{ marginLeft: "16px" }}>
          <div style={{ display: "flex", marginBottom: "16px" }}>
            <BlackButton />
            <GrayButton
              title="사용: 3분"
              sx={{ width: "75px", fontWeight: "500", fontSize: "16px" }}
            />
          </div>
          <span className={style.commonText}>
            차가운 쿨링효과로{" "}
            <span className={style.commonTextBold}>피부를 진정</span>시키고
            <br />
            <span className={style.commonTextBold}>모공 축소</span>를
            도와줍니다.
          </span>
        </div>
      </section>

      <section style={{ marginTop: "67px" }}>
        <section style={{ position: "absolute" }}>
          <FloatingContainer
            explain={
              <CoolingExp1
                width="425px"
                height="140px"
                explain={<CoolingExp1 />}
              />
            }
          />
        </section>

        <section
          style={{
            position: "absolute",
            marginLeft: "186px",
            marginTop: "96px",
          }}
        >
          <FloatingContainer
            explain={<CoolingExp2 />}
            width="425px"
            height="82px"
          />
        </section>
      </section>
    </article>
  );
}

export function Led() {
  return (
    <article className={`${style.commonContainer}`}>
      <section style={{ marginTop: "18px", marginBottom: "20px" }}>
        <span className={style.laserTitle}>LED 모드</span>
        <span className={style.laserSubTitle}>
          <span style={{ marginRight: "8px" }}>#보습</span>{" "}
          <span>#탄력 및 트러블 진정</span>
        </span>
      </section>

      <section style={{ display: "flex" }}>
        <LedModeImage />
        <div style={{ marginLeft: "16px" }}>
          <div style={{ display: "flex", marginBottom: "16px" }}>
            <RedButton />
            <GrayButton
              title="사용: 3분"
              sx={{ width: "75px", fontWeight: "500", fontSize: "16px" }}
            />
          </div>
          <span className={style.commonText}>
            <span className={style.commonTextBold}>3가지 파장의 빛</span>으로
            피부 깊숙한 곳까지
            <br />
            건강하고 탄력 있게 관리해줍니다.
          </span>
        </div>
      </section>

      <section style={{ marginTop: "80px" }}>
        <section style={{ position: "absolute" }}>
          <FloatingContainer
            explain={<LedExp1 />}
            width={"277px"}
            height={"140px"}
          />
        </section>

        <section
          style={{
            position: "absolute",
            marginTop: "116px",
            marginLeft: "149px",
          }}
        >
          <FloatingContainer
            explain={<LedExp2 />}
            width={"425px"}
            height={"116px"}
          />
        </section>
      </section>
    </article>
  );
}

const SonicExp1 = () => {
  return (
    <span className={style.explainContainer}>
      1MHz의{" "}
      <span className={style.explainContainerBold}>강한 파장의 초음파</span>를
      이용하여
      <br /> 초당 약 <span className={style.explainContainerBold}>100만회</span>
      로 발생되는 <span className={style.explainContainerBold}>진동</span>으로
      <br />
      피부를 이완시켜{" "}
      <span className={style.explainContainerBold}>자극없이 노폐물 제거</span>와
    </span>
  );
};

const SonicExp2 = () => {
  return (
    <span className={style.explainContainer}>
      <span className={style.explainContainerBold}>기능성 솔루션</span>을 바른
      후
      <br />
      충분히 <span className={style.explainContainerBold}>흡수</span>되도록
      도움을 줍니다.
    </span>
  );
};

const GalvanicExp1 = () => {
  return (
    <span className={style.explainContainer}>
      기능성 솔루션과 함께
      <br />
      <span className={style.explainContainerBold}>음이온(-ION)</span>으로
      <br />
      <span className={style.explainContainerBold}>영양분 침투</span>에 도움
    </span>
  );
};

const GalvanicExp2 = () => {
  return (
    <span className={style.explainContainer}>
      갈바닉<span className={style.explainContainerBold}>+이온(+ION)으로</span>
      <br />
      <span className={style.explainContainerBold}>노폐물을 배출</span>
    </span>
  );
};

const CoolingExp1 = () => {
  return (
    <span className={style.explainContainer}>
      레이저, 초음파, LED 사용 후<br />
      쿨링모드 사용시{" "}
      <span className={style.explainContainerBold}>피부를 차갑게 진정시켜</span>
    </span>
  );
};

const CoolingExp2 = () => {
  return (
    <span className={style.explainContainer}>
      확장된 <span className={style.explainContainerBold}>모공 축소</span>에
      도움을 줍니다.
    </span>
  );
};
const LedExp1 = () => {
  return (
    <span className={style.explainContainer}>
      Red, Blue, Pink 모드 중<br />
      원하는 기능 사용으로
    </span>
  );
};

const LedExp2 = () => {
  return (
    <span className={style.explainContainer}>
      피부{" "}
      <span className={style.explainContainerBold}>
        진정과 보습・탄력, 트러블 완화에
      </span>
      <br /> 도움을 줍니다.
    </span>
  );
};
