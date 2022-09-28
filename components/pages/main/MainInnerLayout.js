import _ from "./MainInnerLayout.module.css";
import MainOval from "components/pages/main/Effect/MainOval";
import ovalStyle from "components/pages/main/Effect/oval.module.css";
import Swipers from "./Swipers";

import { useSpring, animated, useTransition } from "react-spring";

import { useState } from "react";

function FadeIn({ children }) {
  const styles = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0.5 },
    config: { duration: 2000 },
  });

  return (
    <animated.div style={styles} className={_.bg}>
      {children}
    </animated.div>
  );
}

export default function Page0(props) {
  const randomPostion = () => {
    // console.log(Math.floor(Math.random() * (300 - -100) + -100));
    return Math.floor(Math.random() * (200 - -200) + -200);
  };

  const [realPage, setRealPage] = useState(undefined);

  return (
    <section className={`${_.container}`}>
      <div className={_.page__title}>
        <span className={_.page__title__bold}>홀</span>로 빛나다
      </div>

      <div className={_.expalin__para}>레이저의 미세한 홀이</div>

      <div className={_.expalin__para}>당신의 피부를 지켜줍니다.</div>

      <div className={_.product__exlain}>※ 이 제품은 “미용기기” 입니다</div>
      <div className={_.image__container}>
        <Swipers />
      </div>

      <MainOval
        className={ovalStyle.oval__48}
        toy={randomPostion()}
        tox={randomPostion()}
      />
      <MainOval
        className={ovalStyle.oval__80}
        toy={randomPostion()}
        tox={randomPostion()}
      />
      <MainOval
        className={ovalStyle.oval__104}
        toy={randomPostion()}
        tox={randomPostion()}
      />
      <MainOval
        className={ovalStyle.oval__134}
        toy={randomPostion()}
        tox={randomPostion()}
      />
      <MainOval
        className={ovalStyle.oval__160}
        toy={randomPostion()}
        tox={randomPostion()}
      />
      <MainOval
        className={ovalStyle.oval__251}
        toy={randomPostion()}
        tox={randomPostion()}
      />

      {/* <div className={`${_.bg}`}> */}
      {/* <FadeIn>
        <div
          className={`${_.bg} ${
            realPage === 0 ? _.bg1 : realPage === 1 ? _.bg2 : _.bg3
          }`}
        />
      </FadeIn> */}
      {/* </div> */}
    </section>
  );
}
