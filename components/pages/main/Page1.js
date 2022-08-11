import { useState } from "react";
import { useTrail, Trail, animated } from "react-spring";
import style from "./page1.module.css";

export default function Page1() {
  return (
    <section className={style.container}>
      <span className={style.mainImage}></span>
      <article className={style.mainContentContainer}>
        <span className={style.subTitle}>고품격 홈 레이저 퓨라셀</span>
        <br style={{ marginBottom: "20px" }} />
        <span className={style.title}>홈 에스테틱</span>
        <br />
        <span className={style.title}>레이저의 시작</span>
        <br style={{ marginBottom: "96px" }} />
        <span className={style.contents}>프락셔널 레이저 모듈로 생성되는</span>
        <br />
        <span className={style.contents}>5000개의 마이크로 홀. </span>
        <br style={{ marginBottom: "24px" }} />
        <span className={style.subContents}>레이저, 시작부터 프로페셔널.</span>
        <br />
        <span className={style.subContents}>홈 레이저 뷰티 케어의 시작.</span>
        <br />
        <span className={style.subContents}>퓨라셀 ME.</span>
        <br />
      </article>
      <article className={style.mainImageContainer}></article>
    </section>
  );
}
