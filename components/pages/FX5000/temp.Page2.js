import { useEffect, useState } from "react";
import _ from "./temp.page2.module.css";

const LaserMode = () => {
  return <section>1234</section>;
};

const SonicMode = () => {
  return <section>1234</section>;
};
const GalvanicMode = () => {
  return <section>1234</section>;
};

const CoolingMode = () => {
  return <section>1234</section>;
};

const LedMode = () => {
  return <section>1234</section>;
};

export default function Page2() {
  const [currentMode, setCurrentMode] = useState(undefined);

  useEffect(() => {
    return setCurrentMode("Laser");
  }, []);

  const INACTIVE = "#F2F3F6";
  const ACTIVE = "#FFFFFF";

  return (
    <article className={_.container}>
      <section className={_.leftContainer}>
        <div className={_.paperLeftContainer}>
          <span className={_.textContainer}>
            <span className={_.subTitle}>레이저 초음파 기술을 활용한</span>
            <br />
            <span className={_.title}>
              퓨라셀의 <span className={_.titleBold}>다섯가지 기능</span>
            </span>
            <br style={{ marginTop: "12px" }} />
            <span className={_.instruction}>궁금한 기능을 클릭해보세요?</span>
            <br />
          </span>
          {/*  */}
          <section className={_.imageContainer}>
            <div className={_.imageContainerLeft}>
              <div className={`${_.imageLaser}`}>
                <div></div>
              </div>
            </div>
            <div className={_.imageContainerRight}>
              <div className={`${_.rightImageCommon}`}>
                <div className={`${_.imageSonic}  ${_.imageCommon}`}>1</div>
              </div>
              <div className={`${_.rightImageCommon}`}>
                <div className={`${_.imageGalvanic}  ${_.imageCommon}`}>1</div>
              </div>

              <div className={`${_.rightImageCommon}`}>
                <div className={`${_.imageCooling}  ${_.imageCommon}`}>1</div>
              </div>
              <div
                className={`${_.rightImageCommon}`}
                // 여기서 상태관리 잡은거 백그라운드 컬러 주면됨
              >
                <div className={`${_.imageLED} ${_.imageCommon}`}>1</div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className={_.rightContainer}></section>
    </article>
  );
}
