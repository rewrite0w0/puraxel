import { Box, Paper } from "@mui/material";
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
        style={{ fontSize: "24px", letterSpacing: "-0.02em", color: "#55576F" }}
      >
        {meKr.Page2LaserTitle}
      </span>
      <br style={{ margin: "8px" }} />
      {/* <span>{meKr.Page2LaserExplain1A}</span>
      <span>{meKr.Page2LaserExplain1B}</span>
      <span>{meKr.Page2LaserExplain1C}</span> */}
      <span>
        <span
          className={style.explainPara}
          style={{
            fontSize: "14px",
            letterSpacing: "-0.01em",
            color: "#7E818D",
          }}
        >
          {/* {meKr.Page2LaserExplain} */}한 번의 레이저로 0.02mm 이하의 얕은
          피부층에 약 100개의 작은 홀을 생성하여
        </span>
        <br />
        <span
          style={{
            fontSize: "14px",
            letterSpacing: "-0.01em",
            color: "#7E818D",
          }}
        >
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
          }}
        >
          {meKr.Page2LaserTechExplain1A}
        </span>
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "-0.01em",
            color: "#7E818D",
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
        style={{ fontSize: "24px", letterSpacing: "-0.02em", color: "#55576F" }}
      >
        {meKr.Page2GalvanicTitle}
      </span>
      <br style={{ margin: "8px" }} />
      {/* <span>{meKr.Page2GalvanicExplain1A}</span>
      <span>{meKr.Page2GalvanicExplain1B}</span>
      <span>{meKr.Page2GalvanicExplain1C}</span>
      <span>{meKr.Page2GalvanicExplain1D}</span> */}
      <span
        className={style.explainPara}
        style={{ fontSize: "14px", letterSpacing: "-0.01em", color: "#7E818D" }}
      >
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
    <Box className={style.page2Container}>
      {/* 왼쪽 grid */}
      <Box className={style.leftGridContainer}>
        <Paper className={style.leftPaper}>
          {/* 첫 번째 grid: 제목/소개*/}
          <Box className={style.leftPaperTop}>
            <span className={style.leftPaperTopFirst}>{meKr.Page2Intro1}</span>
            <br />
            <span className={style.leftPaperTopSecond}>
              <span className={style.leftPaperTopSecondPoint}>
                {meKr.Page2Intro2A}
              </span>
              <span>{meKr.Page2Intro2B}</span>
              <span className={style.leftPaperTopSecondPoint}>
                {meKr.Page2Intro2C}
              </span>
              <span>{meKr.Page2Intro2D}</span>
            </span>
          </Box>

          {/* 두 번째 grid: 이미지 모음 */}
          <Box className={style.leftPaperMiddle}>
            {/* 레이저 */}
            <Box
              className={style.laserContainer}
              onClick={selectorLaser}
              sx={{
                // background: modeCondition ? WHITEGRADIENT : DISABLECOLOR,
                filter: modeCondition ? "grayscale(0)" : "grayscale(0.7)",
              }}
            ></Box>
            {/* 중앙 */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className={style.plusImage}></Box>
            </Box>
            {/* 갈바닉 */}
            <Box
              onClick={selectorGalvanic}
              className={style.galvanicContainer}
              sx={{
                filter: !modeCondition ? "grayscale(0)" : "grayscale(0.7)",
              }}
            ></Box>
          </Box>

          {/* 세 번째 grid: 설명 */}
          <Box className={style.leftPaperBottom}>
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
          </Box>
        </Paper>

        {/* 책갈피 grid */}
        <Box>
          <Paper
            onClick={selectorLaser}
            className={style.bookmark}
            sx={{
              background: modeCondition ? "white" : DISABLECOLOR,
              marginTop: "50px",
              marginBottom: "8px",
            }}
          >
            <div className={style.bookmarkParaContainer}>
              <span
                className={style.bookmarkUpperpara}
                style={{
                  fontSize: "14px",
                  letterSpacing: "-0.01em",
                }}
              >
                {meKr.Page2BookMarkLaser}
              </span>
              <br />
              <span className={style.bookmarkLowerPara}>
                {meKr.Page2BookMarkDetail}
              </span>
            </div>
          </Paper>
          <Paper
            onClick={selectorGalvanic}
            className={style.bookmark}
            sx={{
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
          </Paper>
        </Box>
      </Box>

      {/* 오른쪽 grid */}

      {/* <Box className={style.rightGridContainer}> */}
      {/* {modeCondition ? (
        <Box
          className={`${style.laserImageRightContainer} ${style.rightGridContainer}`}
        ></Box>
      ) : (
        <Box
          className={`${style.galvanicImageRightContainer}  ${style.rightGridContainer}`}
        ></Box>
      )} */}
      <section style={{ display: "flex", flexDirection: "column" }}>
        {/*  */}
        <article className={style.explainContainer}>
          <section className={style.tempimage}>이미지자리</section>
          <section>
            <div className={style.explainContainerTitle}>
              <span>버</span>
              <span>튼</span>
            </div>
            <div>{props.qwer}</div>
          </section>
        </article>
        {/*  */}
        <article className={style.explainContainerDouble}>
          <div className={style.tempimage}>이미지자리</div>
          <section>
            <div className={style.explainContainerTitle}>
              <span>버</span>
              <span>튼</span>
            </div>
            <div>{props.qwer}</div>
          </section>
        </article>
        {/*  */}
        <article className={style.explainContainer}>
          <section className={style.tempimage}>이미지자리</section>
          <section>
            <div className={style.explainContainerTitle}>
              <span>버</span>
              <span>튼</span>
            </div>
            <div>{props.qwer}</div>
          </section>
        </article>
      </section>
      {/* </Box> */}
    </Box>
  );
}

const ExplainContainer = (props) => {
  return (
    <article className={style.explainContainer}>
      <section className={style.tempImage}></section>
      <section>
        <div className={style.explainContainerTitle}>
          <span>버</span>
          <span>튼</span>
        </div>
        <div>{props.qwer}</div>
      </section>
    </article>
  );
};

const ExplainContainerDouble = (props) => {
  return (
    <article className={style.explainContainerDouble}>
      <section>1</section>
      <section>
        <div>
          <span>1</span>
          <span>2</span>
        </div>
        <div>1</div>
      </section>
    </article>
  );
};
