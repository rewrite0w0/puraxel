import style from "./page3.module.css";
import ClinicalTestImageParts from "components/Parts/ClinicalTestImageParts";

const Title = () => {
  return (
    <article className={style.topContainer}>
      <section className={style.top__container__title}>
        <span className={style.top__container__title__sub}>
          퓨라셀 각 효능에 특화된 앰플 사용 후 결과
        </span>
        <br />
        <span className={style.top__container__title__main}>
          <span>퓨라셀</span>
          &nbsp;
          <span className={style.top__container__title__main__bold}>
            임상 실험
          </span>
        </span>
      </section>
      {/*  */}
      <section className={style.top__container__testinfo}>
        <span className={style.testTitle}>시험 기간</span>
        <span className={style.testDetail}>2020년 8월 21일~ 5월 30일</span>
        <br />
        <span className={style.testTitle}>시험 기관</span>
        <span className={style.testDetail}>**성형외과의원</span>
      </section>
      {/*  */}
      <section className={style.top__container__testdetail}>
        <span>
          <span className={style.testTitle}>피시험자</span>
          <span className={style.testDetail}>30~60세 성인 남성</span>
        </span>
        <br />
        <span>
          <span className={`${style.testTitle} ${style.margin__right}`}>
            부위
          </span>
          <span className={style.testDetail}>
            피시험자의 정수리와 M자&nbsp;
            <span className={style.testDetailSub}>앞머리 측면</span>
          </span>
          <br />

          <div className={`${style.testDetail} ${style.margin__left}`}>
            <span className={style.testDetailSub}>(시험제품의 용법 기준)</span>
          </div>
        </span>
      </section>
    </article>
  );
};

const Explain = () => {
  return (
    <section className={style.flex__container}>
      <article
        className={`${style.paperContainer} ${style.paperContainer__left}`}
      >
        <div
          className={`${style.paperContainer__inner} ${style.paperContainer__inner__left}`}
        >
          <ClinicalTestImageParts title="정수리 탈모" />
          <div className={style.image__para}>
            퓨라셀 + 미스터케어 발모개선 앰플 3개월 적용 후 사진
          </div>

          <div className={style.image__container}>
            <div className={style.image__container__inner}>
              <div
                className={`${style.image__hair01} ${style.image__common}`}
              ></div>
            </div>

            <div className={style.image__container__inner}>
              <div
                className={`${style.image__hair02} ${style.image__common}`}
              ></div>
            </div>
          </div>
        </div>

        <div
          className={`${style.paperContainer__inner} ${style.paperContainer__inner__right}`}
        >
          <ClinicalTestImageParts title="M자 탈모" />
          <div className={style.image__para}>
            퓨라셀 + 미스터케어 발모개선 앰플 3개월 적용 후 사진
          </div>
          <div className={style.image__container}>
            <div className={style.image__container__inner}>
              <div
                className={`${style.image__hair03} ${style.image__common}`}
              ></div>
            </div>

            <div className={style.image__container__inner}>
              <div
                className={`${style.image__hair04} ${style.image__common}`}
              ></div>
            </div>
          </div>
        </div>
      </article>

      <article
        className={`${style.paperContainer} ${style.paperContainer__right}`}
      >
        <div
          className={`${style.paperContainer__inner} ${style.paperContainer__inner__left}`}
        >
          <ClinicalTestImageParts title="모량 테스트" />
          <div>
            <div
              className={`${style.image__hair__volume} ${style.hair__graph__image__common}`}
            ></div>
          </div>
          <div className={style.right_Container}>
            <span className={style.right_SubExp}>원형 탈모 부위</span>
            <span className={`${style.right_Exp} ${style.margin__bottom}`}>
              31.0% 증가
            </span>
            <span className={style.right_SubExp}>M자 탈모 부위</span>
            <span className={style.right_Exp}>11.5% 증가</span>
          </div>
        </div>
        <div
          className={`${style.paperContainer__inner} ${style.paperContainer__inner__right}`}
        >
          <ClinicalTestImageParts title="모발 테스트" />
          <div>
            <div
              className={`${style.image__hair__volume} ${style.hair__graph__image__common}`}
            ></div>
          </div>
          <div className={style.right_Container}>
            <span className={style.right_SubExp}>원형 탈모 부위</span>
            <span className={`${style.right_Exp} ${style.margin__bottom}`}>
              28.6% 증가
            </span>
            <span className={style.right_SubExp}>M자 탈모 부위</span>
            <span className={style.right_Exp}>51.5% 증가</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default function Page3() {
  return (
    <div className={style.container}>
      <Title />
      <Explain />
    </div>
  );
}
