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
        <div>피부층에 약 100개의 작은 홀을 생성하여</div>

        <div className={style.explainPara}>
          크림과 앰플의 피부흡수율을 높여줍니다.
          <br />
          (5~10분 사용시 약 5,000개 이상의 홀 생성)
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
          갈바닉은 같은 극끼리 밀어내고, 반대 극끼리는 당기는 성질의 갈바닉
          전류를 활용하여
          <br className={style.galavnic__br} />
          화장품 및 앰플 등의 유효성분을 이온화시켜 피부 깊숙이 침투시킵니다.
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
        <br className={style.galavanic__br} />
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

const HeadTips = () => {
  return <div className={style.head__tips}></div>;
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

  const LeftPaperContainer = () => {
    return (
      <div className={style.leftGridContainer}>
        <div className={style.leftPaper}>
          {/* 첫 번째 grid: 제목/소개*/}
          <div className={style.leftPaperTop}>
            <div className={style.leftPaperTopFirst}>하나의 기기로</div>
            <div className={style.leftPaperTopSecond}>
              <div className={style.leftPaperTopSecondPoint}>
                {meKr.Page2Intro2A}
              </div>
              <div>{meKr.Page2Intro2B} &nbsp;</div>
              <div className={style.leftPaperTopSecondPoint}>
                {meKr.Page2Intro2C}
              </div>
              <div>{meKr.Page2Intro2D}</div>
            </div>
          </div>

          {/* 두 번째 grid: 이미지 모음 */}
          <div className={style.leftPaperMiddle}>
            {/* 레이저 */}
            <div className={style.laserContainer} onClick={selectorLaser}>
              {modeCondition ? <LaserToggleActive /> : <LaserToggleInActive />}
            </div>
            {/* 중앙 */}
            <div className={style.paper__image__container}>
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
        <div className={style.bookmark__container}>
          <div
            onClick={() => {
              location.href = "/tech";
            }}
            className={style.bookmark}
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
    );
  };

  return (
    <section className={style.page2Container}>
      {/* 왼쪽 grid */}
      <LeftPaperContainer />
      {/* 오른쪽 grid */}

      {modeCondition ? <LaserImage /> : <GalvanicImage />}

      <HeadTips />
    </section>
  );
}
