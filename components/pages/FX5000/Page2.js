import { useEffect, useState } from "react";
import _ from "./page2.module.css";

import { Laser, Sonic, Galvanic, Cooling, Led } from "./Page2.parts";

const ExplainContainer = (props) => {
  return (
    <span className={_.explainContainer}>
      <span
        className={_.explainContainerNum}
        style={{
          fontSize: props.maruSize ? props.maruSize : "1.2rem",
          marginLeft: props.marginLeft ? props.marginLeft : "1.2rem",
          width: props.width ? props.width : "2.2rem",
          height: props.height ? props.height : "2.2rem",
        }}
      >
        {props.num}
      </span>
      <span
        className={_.explainContainerSpan}
        style={{
          marginBottom: "1.6rem",
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
            <span className={_.subTitle}>FX-5000 전문가용 기기로서</span>
            <span className={_.title}>
              <span className={_.titleBold}>다섯가지 기능</span>을 제공합니다.
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
                    marginLeft={"2rem"}
                    maruSize={"1.4rem"}
                    size={"2.4rem"}
                    height={"2.8rem"}
                    width={"2.8rem"}
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
                  <div className={`${_.imageSonic} ${_.image__common__spec}`}>
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
                  <div
                    className={`${_.imageGalvanic} ${_.image__common__spec}`}
                  >
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
                  <div className={`${_.imageCooling} ${_.image__common__spec}`}>
                    <ExplainContainer num={"4"} title={"쿨링"} />
                  </div>
                </div>
              </div>

              <div
                className={`${_.rightImageCommon}`}
                style={{
                  background: currentMode === "Led" ? ACTIVE : INACTIVE,
                }}
                onClick={modeHandler.led}
              >
                <div className={`${_.imageCommon}`}>
                  <div className={`${_.imageLED} ${_.image__common__spec}`}>
                    <ExplainContainer num={"5"} title={"LED"} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className={_.rightContainer}>
        <ExplainViewer />
      </section>
    </article>
  );
}
