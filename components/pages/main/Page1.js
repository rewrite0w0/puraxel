import { useState } from "react";
import { useTrail, Trail, animated } from "react-spring";
import style from "./page1.module.css";

export default function Page1() {
  const [currentPage, setCurrentPage] = useState("me");
  // me, fx, hair

  const onHoverHandler = {
    meIn: () => {
      setCurrentPage("me");
    },
    fx: () => {
      setCurrentPage("fx");
    },
    hair: () => {
      setCurrentPage("hair");
    },
  };

  return (
    <section
      style={{
        marginRight: "228px",
        marginLeft: "228px",
        marginTop: "160px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className={style.title}>피부, 홀로 빛나다</span>
          <div style={{ display: "flex" }}>
            <span className={style.titleExplain}>
              <span>
                <span style={{ fontWeight: 500 }}>프락셔널 레이저</span>로
                생성되는
              </span>
              <br />
              <span>
                5000개의 <span style={{ fontWeight: 500 }}>마이크로 홀</span>
              </span>
            </span>

            <span className={style.titleExplain} style={{ marginLeft: "64px" }}>
              <span>레이저, 시작부터 프로페셔널</span>
              <br />
              <span style={{ fontWeight: 500 }}>
                홈 레이저 뷰티 케어의 시작
              </span>
            </span>
          </div>
        </div>
        <div>
          <div className={style.logo}></div>
        </div>
      </div>
      <div className={style.bottom}>
        {/* <MeContainer /> */}
        {/* <Test1 />
        <Test2 />
        <Test3 /> */}
      </div>
    </section>
  );
}

const MeContainer = () => {
  return (
    <section
      className={`${style.bottomCommonLayout} ${style.meContainer} ${style.meImage}`}
    >
      <article style={{ marginLeft: "40px" }}>
        <div style={{ marginTop: "40px" }}>
          <span>me</span>
          <span>쇼핑몰 버튼</span>
        </div>
        <br />
        <div>
          <span>병원이나 의료기관에서만 볼 수 있었던 프락셔널 레이저,</span>
          <br />
          <span>이제는 집에서도 편리하게 사용하실 수 있습니다.</span>
        </div>
        <hr className={style.borderLine} />
        <div>
          <span>주요 기능</span>
          <span>
            <div>
              <div>이미지</div>
              <span>프락셔널</span>
            </div>
            <div>
              <div>이미지</div>
              <span>갈바닉</span>
            </div>
          </span>
        </div>
        <hr className={style.borderLine} />

        <span>이벤트 상품</span>
        <div>
          <div>버튼 1</div>
          <div>버튼 2</div>
        </div>
        {/* <article>
        <div className={style.meImage}></div>
      </article> */}
      </article>
    </section>
  );
};

const FX5000Container = () => {
  return (
    <section
      className={`${style.bottomCommonLayout} ${style.fx5000Container}`}
    ></section>
  );
};

const HairContainer = () => {
  return (
    <section
      className={`${style.bottomCommonLayout} ${style.hairContainer}`}
    ></section>
  );
};

const Test1 = () => {
  const trail = useTrail(amount, { opacity: 1 });
  return (
    <section
      className={`${style.bottomCommonLayout} ${style.meContainer}`}
    ></section>
  );
};
const Test2 = () => {
  return (
    <section className={`${style.bottomCommonLayout} ${style.fx5000Container}`}>
      <Trail></Trail>
    </section>
  );
};
const Test3 = () => {
  return (
    <section className={`${style.bottomCommonLayout} ${style.hairContainer}`}>
      <Trail></Trail>
    </section>
  );
};
