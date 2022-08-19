// import { Swiper, SwiperSlide } from "swiper/react";
// import { ManualFractionPage2 } from "../../Parts/ManualFraction";
// import Swipers from "../../Swipers";
import { useState } from "react";

import { useSpring, animated, useTransition } from "react-spring";
import meKr from "public/locales/kr/me.json";

import style from "./page2.module.css";

const LaserExplain = (props) => {
  const styles = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0.25 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={styles}>
      <div
        className={style.explainTitle}
        style={{
          fontSize: "24px",
          letterSpacing: "-0.02em",
          color: "#55576F",
          fontWeight: "600",
          letterSpacing: "-0.02em",
          lineHeight: "132%",
          marginBottom: "8px",
        }}
      >
        {meKr.Page2LaserTitle}
      </div>

      {/* <span>{meKr.Page2LaserExplain1A}</span>
      <span>{meKr.Page2LaserExplain1B}</span>
      <span>{meKr.Page2LaserExplain1C}</span> */}

      <div className={style.explainPara} style={{ marginBottom: "30px" }}>
        <div>
          {/* {meKr.Page2LaserExplain} */}한 번의 레이저로 0.02mm 이하의 얕은
          피부층에 약 100개의 작은 홀을 생성하여
        </div>

        <div className={style.explainPara}>
          {/* {나중에 json 넣어야함} */}
          크림과 앰플의 피부흡수율을 높이줍니다.
        </div>
      </div>

      <div>
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "-0.01em",
            color: "#A7ABB6",
            marginRight: "8px",
            fontWeight: "400",
            lineHeight: "140%",
            marginRight: "8px",
          }}
        >
          {meKr.Page2LaserTechExplain1A}
        </span>
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "-0.01em",
            color: "#7E818D",
            fontWeight: "600",
            lineHeight: "140%",
          }}
        >
          {meKr.Page2LaserTechExplain1B}
        </span>
      </div>
    </animated.div>
  );
};

const GalvanicExplain = (props) => {
  const styles = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0.25 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={styles}>
      <div
        className={style.explainTitle}
        style={{
          fontSize: "24px",
          letterSpacing: "-0.02em",
          color: "#55576F",
          fontWeight: 600,
          marginBottom: "8px",
        }}
      >
        {meKr.Page2GalvanicTitle}
      </div>

      {/* <span>{meKr.Page2GalvanicExplain1A}</span>
      <span>{meKr.Page2GalvanicExplain1B}</span>
      <span>{meKr.Page2GalvanicExplain1C}</span>
      <span>{meKr.Page2GalvanicExplain1D}</span> */}

      <div
        className={style.explainPara}
        style={{
          marginBottom: "30px",
        }}
      >
        {/* {meKr.Page2GalvanicExplain} */}
        <div>
          같은 극끼리 밀어내는 갈바닉 전류의 성질을 이용하여 이온화된 화장품의
          흡수율을 높입니다.
        </div>

        <div>
          레이저 모드와 함께 사용하면 피부 흡수율을 극대화할 수 있습니다.
        </div>
      </div>

      <div>
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "-0.01em",
            color: "#4D5D58",
            fontWeight: 600,
            lineHeight: "150%",
            marginRight: "8px",
          }}
        >
          {meKr.Page2GalvanicTechExplain1A}
        </span>
        &nbsp;
        <span
          style={{
            marginRight: "81px",
            fontSize: "12px",
            letterSpacing: "-0.01em",
            color: "#A7ABB6",
            fontWeight: 300,
            lineHeight: "150%",
          }}
        >
          {meKr.Page2GalvanicTechExplain1B}
        </span>
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "-0.01em",
            color: "#4D5D58",
            fontWeight: 600,
            lineHeight: "150%",
            marginRight: "8px",
          }}
        >
          {meKr.Page2GalvanicTechExplain2A}
        </span>
        &nbsp;
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "-0.01em",
            color: "#A7ABB6",
            fontWeight: 300,
            lineHeight: "150%",
          }}
        >
          {meKr.Page2GalvanicTechExplain2B}
        </span>
      </div>
    </animated.div>
  );
};

const LaserImage = () => {
  const styles = useSpring({
    // to: [{ opacity: 1 }],
    to: async (next, cancel) => {
      await next({ opacity: 0.25, scale: 1 });
      await next({ opacity: 0.5, scale: 1 });
      await next({ opacity: 0.75, scale: 1 });
      await next({ opacity: 1, scale: 1 });
    },
    from: { opacity: 0 },
    config: { duration: 500 },
  });
  return (
    <animated.div
      className={`${style.laserImageRightContainer} ${style.rightGridContainer}`}
      style={styles}
    ></animated.div>
  );
};

const GalvanicImage = () => {
  const styles = useSpring({
    // to: [{ opacity: 1, scale: 1 }],
    to: async (next, cancel) => {
      await next({ opacity: 0.25, scale: 1 });
      await next({ opacity: 0.5, scale: 1 });
      await next({ opacity: 0.75, scale: 1 });
      await next({ opacity: 1, scale: 1 });
    },
    from: { opacity: 0 },
    config: { duration: 500 },
  });
  return (
    <animated.div
      className={`${style.galvanicImageRightContainer}  ${style.rightGridContainer}`}
      style={styles}
    ></animated.div>
  );
};

const LaserToggleActive = () => {
  return (
    <div
      className={`${style.laserImageContainer} ${style.imageContainer} ${style.laserImage}`}
    />
  );
};

const LaserToggleInActive = () => {
  return (
    <div
      className={`${style.laserImageContainer} ${style.imageContainer} ${style.laserInactiveImage}`}
    />
  );
};

const GalvanicToggleActive = () => {
  return (
    <div
      className={`${style.galvanicImageContainer} ${style.imageContainer} ${style.galvanicImage}`}
    />
  );
};

const GalvanicToggleInActive = () => {
  return (
    <div
      className={`${style.galvanicImageContainer} ${style.imageContainer} ${style.galvanicInactiveImage}`}
    />
  );
};

export default function Page2(props) {
  const [modeSelector, setModeSelector] = useState("Laser");
  const [laserSelector, setLaserSelector] = useState(true);

  const styles = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0 },
    delay: 500,
  });

  // console.log(modeSelector);

  // const handlerLaserSelectorOnClick = () => {
  //   laserSelector ? setLaserSelector(false) : setLaserSelector(true);
  //   !modeCondition ? setModeSelector("Laser") : setModeSelector("Galvanic");
  // };

  const selectorLaser = () => {
    return setModeSelector("Laser");
  };

  const selectorGalvanic = () => {
    return setModeSelector("Galvanic");
  };
  const modeCondition = modeSelector === "Laser";
  // const laserCondition = laserSelector === true;

  const DISABLECOLOR = "#F2F3F6";

  const indicatorActive = "#A590FA";
  const indicatorInactive = "#DFE1E8";

  return (
    <div className={style.page2Container}>
      {/* 왼쪽 grid */}
      <div className={style.leftGridContainer}>
        <div className={style.leftPaper}>
          {/* 첫 번째 grid: 제목/소개*/}
          <div className={style.leftPaperTop}>
            <span className={style.leftPaperTopFirst}>{meKr.Page2Intro1}</span>
            <br />
            <div className={style.leftPaperTopSecond}>
              <span className={style.leftPaperTopSecondPoint}>
                {meKr.Page2Intro2A}
              </span>
              <span>{meKr.Page2Intro2B} &nbsp;</span>
              <span className={style.leftPaperTopSecondPoint}>
                {meKr.Page2Intro2C}
              </span>
              <span>{meKr.Page2Intro2D}</span>
            </div>
          </div>

          {/* 두 번째 grid: 이미지 모음 */}
          <div className={style.leftPaperMiddle}>
            {/* 레이저 */}
            <div className={style.laserContainer} onClick={selectorLaser}>
              {modeCondition ? <LaserToggleActive /> : <LaserToggleInActive />}
            </div>
            {/* 중앙 */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className={style.plusImage}></div>
            </div>
            {/* 갈바닉 */}
            <div onClick={selectorGalvanic} className={style.galvanicContainer}>
              {!modeCondition ? (
                <GalvanicToggleActive />
              ) : (
                <GalvanicToggleInActive />
              )}
            </div>
          </div>

          {/* 세 번째 grid: 설명 */}
          <div className={style.leftPaperBottom}>
            {/* 인디케이터 */}
            <div className={style.indicator}>
              <div
                className={style.indicatorAtom}
                style={{
                  background: modeCondition
                    ? indicatorActive
                    : indicatorInactive,
                }}
              ></div>
              <div
                className={style.indicatorAtom}
                style={{
                  background: !modeCondition
                    ? indicatorActive
                    : indicatorInactive,
                }}
              ></div>
            </div>
            {/* 설명 */}
            {modeCondition ? <LaserExplain /> : <GalvanicExplain />}
          </div>
        </div>

        {/* 책갈피 grid */}
        <div>
          <div
            // onClick={selectorLaser}
            onClick={() => {
              location.href = "/tech";
            }}
            className={style.bookmark}
            style={{
              // background: modeCondition ? "white" : DISABLECOLOR,
              marginTop: "14px",
              // marginBottom: "8px",
            }}
          >
            <span className={style.bookmarkParaContainer}>
              <span className={style.bookmarkUpperPara}>
                {meKr.Page2BookMarkLaser}
              </span>
              <span className={style.bookmarkLowerPara}>
                {/* {meKr.Page2BookMarkDetail} */}
                작동 방식 보기 {">"}
              </span>
            </span>
          </div>
          {/* <div
            onClick={selectorGalvanic}
            className={style.bookmark}
            style={{
              background: !modeCondition ? "white" : DISABLECOLOR,
            }}
          >
            <div className={style.bookmarkParaContainer}>
              <span className={style.bookmarkUpperpara}>
                {meKr.Page2BookMarkGalvanic}
              </span>
              <br />
              <span className={style.bookmarkLowerPara}>
                {meKr.Page2BookMarkDetail}
              </span>
            </div>
          </div> */}
        </div>
      </div>

      {/* 오른쪽 grid */}

      {/* <div className={style.rightGridContainer}> */}
      {modeCondition ? <LaserImage /> : <GalvanicImage />}
      {/* </div> */}
    </div>
  );
}
