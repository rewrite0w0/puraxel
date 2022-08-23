import { useEffect, useState } from "react";
import _ from "./page2.module.css";

import { Laser, Sonic, Galvanic, Cooling, Led } from "./Page2.parts";

const ExplainContainer = (props) => {
  return (
    <span style={{ display: "flex" }} className={_.explainContainer}>
      <span
        className={_.explainContainerNum}
        style={{
          fontSize: props.maruSize ? props.maruSize : "12px",
          marginLeft: props.marginLeft ? props.marginLeft : "12px",
          width: props.width ? props.width : "22px",
          height: props.height ? props.height : "22px",
        }}
      >
        {props.num}
      </span>
      <span
        className={_.explainContainerSpan}
        style={{
          fontSize: props.size ? props.size : "16.2909px",
          marginBottom: "16px",
        }}
      >
        {props.title}
      </span>
    </span>
  );
};

export default function Page2() {
  const [currentMode, setCurrentMode] = useState(undefined);

  useEffect(() => {
    return setCurrentMode("Laser");
  }, []);

  const INACTIVE = "#F2F3F6";
  const ACTIVE = "#FFFFFF";

  const modeHandler = {
    laser: () => {
      setCurrentMode("Laser");
    },
    sonic: () => {
      setCurrentMode("Sonic");
    },
    galvanic: () => {
      setCurrentMode("Galvanic");
    },
    cooling: () => {
      setCurrentMode("Cooling");
    },
    led: () => {
      setCurrentMode("Led");
    },
  };

  const ExplainViewer = () => {
    if (currentMode === "Laser") {
      return <Laser />;
    }

    if (currentMode === "Sonic") {
      return <Sonic />;
    }

    if (currentMode === "Galvanic") {
      return <Galvanic />;
    }

    if (currentMode === "Cooling") {
      return <Cooling />;
    }

    if (currentMode === "Led") {
      return <Led />;
    }
  };

  return (
    <article className={_.container}>
      <section className={_.leftContainer}>
        <div className={_.paperLeftContainer}>
          <span className={_.textContainer}>
            <span className={_.subTitle}>레이저 초음파 기술을 활용한</span>
            <span className={_.title}>
              FX5000의 <span className={_.titleBold}>다섯가지 기능</span>
            </span>
            <span className={_.instruction}>궁금한 기능을 클릭해보세요</span>
          </span>
          {/*  */}
          <section className={_.imageContainer}>
            {/*  */}
            <div className={_.imageContainerLeft}>
              <div
                className={_.leftImageCommon}
                onClick={modeHandler.laser}
                style={{
                  background: currentMode === "Laser" ? ACTIVE : INACTIVE,
                }}
              >
                <div className={`${_.imageLaser}`}>
                  <ExplainContainer
                    num={"1"}
                    title={"레이저"}
                    marginLeft={"20px"}
                    maruSize={"14px"}
                    size={"24px"}
                    height={"28px"}
                    width={"28px"}
                  />
                </div>
              </div>
            </div>

            <div className={_.imageContainerRight}>
              <div
                className={`${_.rightImageCommon}`}
                onClick={modeHandler.sonic}
                style={{
                  background: currentMode === "Sonic" ? ACTIVE : INACTIVE,
                }}
              >
                <div className={`${_.imageCommon}`}>
                  <div className={_.imageSonic}>
                    <ExplainContainer num={"2"} title={"초음파"} />
                  </div>
                </div>
              </div>

              <div
                className={`${_.rightImageCommon}`}
                onClick={modeHandler.galvanic}
                style={{
                  background: currentMode === "Galvanic" ? ACTIVE : INACTIVE,
                }}
              >
                <div className={`${_.imageCommon}`}>
                  <div className={_.imageGalvanic}>
                    <ExplainContainer num={"3"} title={"갈바닉"} />
                  </div>
                </div>
              </div>

              <div
                className={`${_.rightImageCommon}`}
                onClick={modeHandler.cooling}
                style={{
                  background: currentMode === "Cooling" ? ACTIVE : INACTIVE,
                }}
              >
                <div className={`${_.imageCommon}`}>
                  <div className={_.imageCooling}>
                    <ExplainContainer num={"4"} title={"쿨링"} />
                  </div>
                </div>
              </div>

              <div
                className={`${_.rightImageCommon}`}
                // 여기서 상태관리 잡은거 백그라운드 컬러 주면됨
                style={{
                  background: currentMode === "Led" ? ACTIVE : INACTIVE,
                }}
                onClick={modeHandler.led}
              >
                <div className={`${_.imageCommon}`}>
                  <div className={_.imageLED}>
                    <ExplainContainer num={"5"} title={"LED"} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className={_.rightContainer}>
        {/* <Laser /> */}
        <ExplainViewer />
      </section>
    </article>
  );
}
