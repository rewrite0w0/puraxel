import { useEffect, useState } from "react";
import style from "./page2.parts.module.css";
import { Popover, Typography } from "@mui/material";
import Fadein from "components/Parts/FadeIn";

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

const MaruMinus = () => {
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
        d="M10 5.5C10 7.98528 7.98528 10 5.5 10C3.01472 10 1 7.98528 1 5.5C1 3.01472 3.01472 1 5.5 1C7.98528 1 10 3.01472 10 5.5ZM11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0C8.53757 0 11 2.46243 11 5.5ZM3.5 5C3.22386 5 3 5.22386 3 5.5C3 5.77614 3.22386 6 3.5 6H7.5C7.77614 6 8 5.77614 8 5.5C8 5.22386 7.77614 5 7.5 5H3.5Z"
        fill="#7E818D"
      />
    </svg>
  );
};

const RedButton = () => {
  return (
    <span className={`${style.optionButtonCommon} ${style.parts__red__button}`}>
      기본 기능
    </span>
  );
};

const BlackButton = () => {
  return (
    <span
      className={`${style.optionButtonCommon} ${style.parts__black__button}`}
    >
      옵션 기능
    </span>
  );
};

const GrayButton = (props) => {
  return (
    <span
      className={`${style.optionButtonCommon} ${style.parts__gray__button}`}
      style={{
        ...props.sx,
      }}
    >
      {props.title}
    </span>
  );
};

const LaserModeImage = () => {
  return (
    <div className={`${style.modeImageCommon} ${style.LaserModeImage}`}></div>
  );
};

const SonicModeImage = () => {
  return (
    <div className={`${style.modeImageCommon} ${style.SonicModeImage}`}></div>
  );
};

const GalvanicModeImage = () => {
  return (
    <div>
      <div
        className={`${style.modeImageCommon} ${style.GalvanicModeImageTop}`}
      ></div>
      <div
        className={`${style.modeImageCommon} ${style.GalvanicModeImageBottom}`}
      ></div>
    </div>
  );
};

const CoolingModeImage = () => {
  return (
    <div className={`${style.modeImageCommon} ${style.CoolingModeImage}`}></div>
  );
};
const LedModeImage = () => {
  return (
    <div className={`${style.modeImageCommon} ${style.LedModeImage}`}></div>
  );
};

const Explain1 = () => {
  return (
    <span>
      제품을 놓을 경우, 센서에 의해 &nbsp;
      <span className={style.explain__bold}>즉시 동작이 멈춥니다.</span>
    </span>
  );
};

const Explain2 = () => {
  return (
    <span>
      <span className={style.explain__bold}>레이저 헤드가 피부에 닿아야만</span>
      작동 합니다.
    </span>
  );
};

const Explain3 = () => {
  return (
    <span>
      적외선 센서에 의해&nbsp;
      <span className={style.explain__bold}>손잡이 파지 시에만 작동</span>
      합니다.
    </span>
  );
};

const Explain4 = () => {
  return (
    <span>
      조사&nbsp;
      <span className={style.explain__bold}>버튼을 누를 때만 레이저 조사</span>
      됩니다.
    </span>
  );
};

const SafeFeature = (props) => {
  return (
    <article className={style.safefeature__container}>
      <span className={style.safefeature__inner__container}>
        <span className={style.safefeature__number}>{props.number}</span>
        <span className={style.safefeature__title}>{props.title}</span>
      </span>
      <div className={style.safefeature__hr__container}>
        <hr className={style.safefeature__hr} />
      </div>
      <span className={style.safefeature__explain}>
        &nbsp; &nbsp;{props.explain}
      </span>
    </article>
  );
};

export function Laser() {
  const [maruStatus, setMaruStatus] = useState(undefined);

  const [popAnchor, setPopAnchor] = useState(undefined);

  const handlePopOpen = (e) => {
    setMaruStatus(false);
    setPopAnchor(e.currentTarget);
  };

  const handlePopClose = () => {
    setMaruStatus(true);
    setPopAnchor(false);
  };

  const open = Boolean(popAnchor);

  useEffect(() => {
    return setMaruStatus(true);
  }, []);

  return (
    <Fadein>
      <article className={`${style.commonContainer}`}>
        <section className={`${style.margin__top__bottom}`}>
          <span className={style.laserTitle}>레이저 모드</span>
          <span className={style.laserSubTitle}>
            <span className={style.margin__right}>#피부 속 채널 생성</span>
            <span>#모공 관리</span>
          </span>
        </section>

        <section className={style.flex__container}>
          <LaserModeImage />
          <div className={style.margin__left}>
            <div className={style.button__container}>
              <RedButton />
              <GrayButton
                title="모공관리 (레벨:1~3)"
                sx={{ width: "14.8rem", fontWeight: "500", fontSize: "1.6rem" }}
              />
            </div>
            <span className={style.commonText}>
              <span>
                <span className={style.commonTextBold}>프락셔널 레이저</span>를
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
        <section className={style.margin__top}>
          <span className={style.subExplainLaserWarning}>
            안심하고 사용할 수 있는
          </span>
          <br />
          <span className={style.laser__explain__title}>
            <span className={style.explainLaserWarning}>레이저 안전 기능</span>
            <span
              className={style.laser__warning__container}
              onClick={() => setMaruStatus(!maruStatus)}
            >
              <span
                className={style.laserWarning}
                onMouseEnter={handlePopOpen}
                onMouseLeave={handlePopClose}
              >
                주의사항 &nbsp;
                {maruStatus === true ? <MaruPlus /> : <MaruMinus />}
                <Popover
                  open={open}
                  anchorEl={popAnchor}
                  disableRestoreFocus
                  onClose={handlePopClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                >
                  <Typography className={style.laser__warning__para}>
                    본 장비는 눈에 보이지 않는 레이저를 사용하고 있어 눈에 직접
                    또는 반사되는 레이저 조사 시 위험합니다.
                    <br />
                    반드시 보안경 착용 후 사용하며 절대 직·간접적으로 보지
                    말아야 합니다.
                  </Typography>
                </Popover>
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

          <article
            className={style.laserButton}
            onClick={() => {
              location.href = "/tech";
            }}
          >
            <span className={style.laserButtonBold}>프락셔널 레이저</span>
            &nbsp;
            <span className={style.laserButtonLight}>작동 방식 보기 {">"}</span>
          </article>
        </section>
      </article>
    </Fadein>
  );
}

export function Sonic() {
  return (
    <Fadein>
      <article className={`${style.commonContainer}`}>
        <section className={style.margin__top__bottom}>
          <span className={style.laserTitle}>초음파 모드</span>

          <span className={style.laserSubTitle}>
            <span className={style.margin__right}>#영양 흡수</span>
            <span>#영양 공급</span>
          </span>
        </section>

        <section className={style.flex__container}>
          <SonicModeImage />
          <div className={style.margin__left}>
            <div className={style.button__container}>
              <RedButton />
              <GrayButton
                title="사용: 5분"
                sx={{ width: "7.5rem", fontWeight: "500" }}
              />
            </div>

            <span className={style.commonText}>
              기능성 솔루션을 바른 후 마사지하면
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

        <section className={style.sonic__comment__container}>
          <section className={style.absolute__container}>
            <FloatingContainer explain={<SonicExp1 />} />
          </section>

          <section className={style.sonic__comment__container__inner__bot}>
            <FloatingContainer explain={<SonicExp2 />} />
          </section>
        </section>
      </article>
    </Fadein>
  );
}

export function Galvanic() {
  return (
    <Fadein>
      <article className={`${style.commonContainer}`}>
        <section className={style.margin__top__bottom}>
          <span className={style.laserTitle}>갈바닉 모드</span>
          <span className={style.laserSubTitle}>
            <span className={style.margin__right}>#딥 클렌징</span>{" "}
            <span>#피부 속 영양분 침투 촉진</span>
          </span>
        </section>

        <section className={style.flex__container}>
          <GalvanicModeImage />

          <div className={style.margin__left}>
            <div className={style.button__container}>
              <BlackButton />
              <GrayButton
                title="사용: 4분"
                sx={{ width: "7.5rem", fontWeight: "500", fontSize: "1.6rem" }}
              />
            </div>
            <span className={style.commonText}>
              같은 극끼리 밀어내는 갈바닉 기술을
              <br />
              활용하여
              <span className={style.commonTextBold}>
                이온화된 화장품의 흡수율
              </span>
              을
              <br />
              높입니다. 레이저 모드와
              <span className={style.commonTextBold}>
                함께 사용하면 피부
                <br /> 흡수율을 높일 수 있습니다.
              </span>
            </span>
          </div>
        </section>

        <section className={style.galvanic__comment__container}>
          <section className={style.galvanic__flex__container}>
            <FloatingContainer explain={<GalvanicExp1 />} />

            <FloatingContainer explain={<GalvanicExp2 />} />
          </section>
        </section>
      </article>
    </Fadein>
  );
}

export function Cooling() {
  return (
    <Fadein>
      <article className={`${style.commonContainer}`}>
        <section className={style.margin__top__bottom}>
          <span className={style.laserTitle}>쿨링 모드</span>
          <span className={style.laserSubTitle}>
            <span className={style.margin__right}>#피부 진정</span>{" "}
            <span>#모공 축소</span>
          </span>
        </section>

        <section className={style.flex__container}>
          <CoolingModeImage />
          <div className={style.margin__left}>
            <div className={style.button__container}>
              <BlackButton />
              <GrayButton
                title="사용: 3분"
                sx={{ width: "7.5rem", fontWeight: "500", fontSize: "1.6rem" }}
              />
            </div>
            <span className={style.commonText}>
              차가운 쿨링효과로{" "}
              <span className={style.commonTextBold}>피부를 진정</span>시키고
              <br />
              <span className={style.commonTextBold}>모공관리</span>를
              도와줍니다.
            </span>
          </div>
        </section>

        <section className={style.cooling__comment__container}>
          <section className={style.absolute__container}>
            <FloatingContainer explain={<CoolingExp1 />} />
          </section>

          <section className={style.cooling__comment__container__inner__bot}>
            <FloatingContainer explain={<CoolingExp2 />} />
          </section>
        </section>
      </article>
    </Fadein>
  );
}

export function Led() {
  return (
    <Fadein>
      <article className={`${style.commonContainer}`}>
        <section className={style.margin__top__bottom}>
          <span className={style.laserTitle}>LED 모드</span>
          <span className={style.laserSubTitle}>
            <span className={style.margin__right}>#보습</span>{" "}
            <span>#탄력 및 트러블 진정</span>
          </span>
        </section>

        <section className={style.flex__container}>
          <LedModeImage />
          <div className={style.margin__left}>
            <div className={style.button__container}>
              <RedButton />
              <GrayButton
                title="사용: 3분"
                sx={{ width: "7.5rem", fontWeight: "500", fontSize: "1.6rem" }}
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

        <section className={style.led__comment__container}>
          <section className={style.absolute__container}>
            <FloatingContainer explain={<LedExp1 />} />
          </section>

          <section className={style.led__comment__container__inner__bot}>
            <FloatingContainer explain={<LedExp2 />} />
          </section>
        </section>
      </article>
    </Fadein>
  );
}

const SonicExp1 = () => {
  return (
    <span className={style.explainContainer}>
      1MHz의&nbsp;
      <span className={style.explainContainerBold}>강한 파장의 초음파</span>를
      이용하여
      <br /> 초당 약 <span className={style.explainContainerBold}>100만회</span>
      로 발생되는 <span className={style.explainContainerBold}>진동</span>으로
      <br />
      피부를 이완시켜
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
      쿨링모드 사용시
      <span className={style.explainContainerBold}>피부를 차갑게 진정시켜</span>
    </span>
  );
};

const CoolingExp2 = () => {
  return (
    <span className={style.explainContainer}>
      확장된 <span className={style.explainContainerBold}>모공관리</span>에
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
      피부&nbsp;
      <span className={style.explainContainerBold}>
        진정과 보습・탄력, 트러블 완화에
      </span>
      <br /> 도움을 줍니다.
    </span>
  );
};
