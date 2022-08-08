import { CaptionIcon } from "components/Parts/Icons";
import style from "./page2Parts.module.css";

const LaserModeImageTop = () => {
  return (
    <div
      className={`${style.modeImageCommon} ${style.LaserModeImageTop}`}
    ></div>
  );
};

const LaserModeImageBottom = () => {
  return (
    <div
      className={`${style.modeImageCommon} ${style.LaserModeImageBottom}`}
    ></div>
  );
};

const UltraModeImagetop = () => {
  return (
    <div
      className={`${style.modeImageCommon} ${style.UltraModeImagetop}`}
    ></div>
  );
};

const UltraModeImageUpperMiddle = () => {
  return (
    <div
      className={`${style.modeImageCommon} ${style.UltraModeImageUpperMiddle}`}
    ></div>
  );
};
const UltraModeImageLowerMiddle = () => {
  return (
    <div
      className={`${style.modeImageCommon} ${style.UltraModeImageLowerMiddle}`}
    ></div>
  );
};
const UltraModeImageBottom = () => {
  return (
    <div
      className={`${style.modeImageCommon} ${style.UltraModeImageBottom}`}
    ></div>
  );
};

const ExplainContainer = (props) => {
  return (
    <section
      style={{
        display: "flex",
        boxSizing: "border-box",
        width: "594px",
        height: "164px",
        background: "rgba(255, 255, 255, 0.5)",
        /* grayscale/02 */
        border: "1px solid #F2F3F7",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          width: "264px",
          height: "148px",
          borderRadius: "4px",
        }}
      >
        {props.image}
      </div>
      <div>2</div>
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

export default function Page2Parts() {
  return (
    <article style={{ display: "flex", flexDirection: "column" }}>
      <ExplainContainer />
      {/* <Z /> */}

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
