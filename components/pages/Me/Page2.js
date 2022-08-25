import { useState } from "react";

import { useSpring, animated } from "react-spring";
import meKr from "public/locales/kr/me.json";

import style from "./page2.module.css";

const LaserExplain = () => {
  const styles = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0.25 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={styles}>
      <div className={`${style.explainTitle} ${style.explain__title__sub}`}>
        {meKr.Page2LaserTitle}
      </div>

      <div className={`${style.explainPara} ${style.explain__para_sub}`}>
        <div>
          한 번의 레이저로 0.02mm 이하의 얕은 피부층에 약 100개의 작은 홀을
          생성하여
        </div>

        <div className={style.explainPara}>
          크림과 앰플의 피부흡수율을 높이줍니다.
        </div>
      </div>

      <div>
        <span className={style.sub__explain__para}>
          {meKr.Page2LaserTechExplain1A}
        </span>
        <span className={style.sub__explain__para__bold}>
          {meKr.Page2LaserTechExplain1B}
        </span>
      </div>
    </animated.div>
  );
};

const GalvanicExplain = () => {
  const styles = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0.25 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={styles}>
      <div className={`${style.explainTitle} ${style.explain__title__sub}`}>
        {meKr.Page2GalvanicTitle}
      </div>

      <div className={`${style.explainPara} ${style.explain__para_sub}`}>
        <div>
          같은 극끼리 밀어내는 갈바닉 전류의 성질을 이용하여 이온화된 화장품의
          흡수율을 높입니다.
        </div>

        <div>
          레이저 모드와 함께 사용하면 피부 흡수율을 극대화할 수 있습니다.
        </div>
      </div>

      <div>
        <span className={style.sub__explain__para__bold}>
          {meKr.Page2GalvanicTechExplain1A}
        </span>
        &nbsp;
        <span
          className={`${style.sub__explain__para} ${style.sub__explain__para__margin__right}`}
        >
          {meKr.Page2GalvanicTechExplain1B}
        </span>
        <span className={style.sub__explain__para__bold}>
          {meKr.Page2GalvanicTechExplain2A}
        </span>
        &nbsp;
        <span className={style.sub__explain__para}>
          {meKr.Page2GalvanicTechExplain2B}
        </span>
      </div>
    </animated.div>
  );
};

const LaserImage = () => {
  const styles = useSpring({
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

export default function Page2() {
  const [modeSelector, setModeSelector] = useState("Laser");

  const selectorLaser = () => {
    return setModeSelector("Laser");
  };

  const selectorGalvanic = () => {
    return setModeSelector("Galvanic");
  };
  const modeCondition = modeSelector === "Laser";

  const indicatorActive = "#A590FA";
  const indicatorInactive = "#DFE1E8";

  return (
    <div className={style.page2Container}>
      {/* 왼쪽 grid */}
      <div className={style.leftGridContainer}>
        <div className={style.leftPaper}>
          {/* 첫 번째 grid: 제목/소개*/}
          <div className={style.leftPaperTop}>
            <span className={style.leftPaperTopFirst}>하나의 기기로</span>
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
            onClick={() => {
              location.href = "/tech";
            }}
            className={style.bookmark}
            style={{
              marginTop: "14px",
            }}
          >
            <span className={style.bookmarkParaContainer}>
              <span className={style.bookmarkUpperPara}>
                {meKr.Page2BookMarkLaser}
              </span>
              <span className={style.bookmarkLowerPara}>
                작동 방식 보기 {">"}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* 오른쪽 grid */}

      {modeCondition ? <LaserImage /> : <GalvanicImage />}
    </div>
  );
}
