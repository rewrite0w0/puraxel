// import { Swiper, SwiperSlide } from "swiper/react";
// import { ManualFractionPage2 } from "../../Parts/ManualFraction";
// import Swipers from "../../Swipers";
import { useState } from "react";
import meKr from "public/locales/kr/me.json";

import style from "./page2.module.css";

const LaserExplain = (props) => {
  return (
    <div>
      <span
        className={style.explainTitle}
        style={{
          fontSize: "24px",
          letterSpacing: "-0.02em",
          color: "#55576F",
          fontWeight: 600,
          letterSpacing: "-0.02em",
        }}
      >
        {meKr.Page2LaserTitle}
      </span>
      <br style={{ margin: "8px" }} />
      {/* <span>{meKr.Page2LaserExplain1A}</span>
      <span>{meKr.Page2LaserExplain1B}</span>
      <span>{meKr.Page2LaserExplain1C}</span> */}
      <span>
        <span className={style.explainPara}>
          {/* {meKr.Page2LaserExplain} */}한 번의 레이저로 0.02mm 이하의 얕은
          피부층에 약 100개의 작은 홀을 생성하여
        </span>
        <br />
        <span className={style.explainPara}>
          {/* {나중에 json 넣어야함} */}
          크림과 앰플의 피부흡수율을 높이줍니다.
        </span>
        <br style={{ marginBottom: "30px" }} />
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "-0.01em",
            color: "#A7ABB6",
            marginRight: "8px",
            fontWeight: "400",
            lineHeight: "140%",
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
      </span>
    </div>
  );
};

const GalvanicExplain = (props) => {
  return (
    <div>
      <span
        className={style.explainTitle}
        style={{
          fontSize: "24px",
          letterSpacing: "-0.02em",
          color: "#55576F",
          fontWeight: 600,
        }}
      >
        {meKr.Page2GalvanicTitle}
      </span>
      <br style={{ margin: "8px" }} />
      {/* <span>{meKr.Page2GalvanicExplain1A}</span>
      <span>{meKr.Page2GalvanicExplain1B}</span>
      <span>{meKr.Page2GalvanicExplain1C}</span>
      <span>{meKr.Page2GalvanicExplain1D}</span> */}
      <span className={style.explainPara}>
        {/* {meKr.Page2GalvanicExplain} */}
        <span>
          같은 극끼리 밀어내는 갈바닉 전류의 성질을 이용하여 이온화된 화장품의
          흡수율을 높입니다.
        </span>
        <br />
        <span>
          레이저 모드와 함께 사용하면 피부 흡수율을 극대화할 수 있습니다.
        </span>
      </span>
      <br
        style={{
          marginBottom: "30px",
        }}
      />
      <span>
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
      </span>
    </div>
  );
};

export default function Page2(props) {
  const [modeSelector, setModeSelector] = useState("Laser");
  const [laserSelector, setLaserSelector] = useState(true);
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
            <span className={style.leftPaperTopSecond}>
              <span className={style.leftPaperTopSecondPoint}>
                {meKr.Page2Intro2A}
              </span>
              <span>{meKr.Page2Intro2B} &nbsp;</span>
              <span className={style.leftPaperTopSecondPoint}>
                {meKr.Page2Intro2C}
              </span>
              <span>{meKr.Page2Intro2D}</span>
            </span>
          </div>

          {/* 두 번째 grid: 이미지 모음 */}
          <div className={style.leftPaperMiddle}>
            {/* 레이저 */}
            <div
              className={style.laserContainer}
              onClick={selectorLaser}
              style={{
                // background: modeCondition ? WHITEGRADIENT : DISABLECOLOR,
                filter: modeCondition ? "grayscale(0)" : "grayscale(0.7)",
              }}
            ></div>
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
            <div
              onClick={selectorGalvanic}
              className={style.galvanicContainer}
              style={{
                filter: !modeCondition ? "grayscale(0)" : "grayscale(0.7)",
              }}
            ></div>
          </div>

          {/* 세 번째 grid: 설명 */}
          <div className={style.leftPaperBottom}>
            {/* 인디케이터 */}
            <span className={style.indicator}>
              <span
                className={style.indicatorAtom}
                style={{
                  background: modeCondition
                    ? indicatorActive
                    : indicatorInactive,
                }}
              ></span>
              <span
                className={style.indicatorAtom}
                style={{
                  background: !modeCondition
                    ? indicatorActive
                    : indicatorInactive,
                }}
              ></span>
            </span>
            {/* 설명 */}
            {modeCondition ? <LaserExplain /> : <GalvanicExplain />}
          </div>
        </div>

        {/* 책갈피 grid */}
        <div>
          <div
            onClick={selectorLaser}
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
      {modeCondition ? (
        <div
          className={`${style.laserImageRightContainer} ${style.rightGridContainer}`}
        ></div>
      ) : (
        <div
          className={`${style.galvanicImageRightContainer}  ${style.rightGridContainer}`}
        ></div>
      )}
      {/* </div> */}
    </div>
  );
}
