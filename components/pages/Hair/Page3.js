import style from "./page3.module.css";
import ClinicalTestImageParts from "components/Parts/ClinicalTestImageParts";

const Title = () => {
  return (
    <article className={style.title__container}>
      <section className={style.title__container__title}>
        <span className={style.title__container__title__para}>
          퓨라셀과 각 효능에 특화된 앰플 사용후 결과
        </span>
        <br />
        <span className={style.title__container__title__sub}>
          <span className={style.title__container__light}>PURAXEL Hair</span>
          &nbsp;
          <span className={style.title__container__title__bold}>임상 실험</span>
        </span>
      </section>
      {/*  */}
      <section className={style.title__testinfo__container}>
        <span className={style.testTitle}>시험 기간</span>
        <span className={style.testDetail}>2020. 5. 21 ~ 7. 13</span>
        <br />
        <span className={style.testTitle}>시험 기관</span>
        <span className={style.testDetail}>한국피부과학연구원</span>
      </section>
      {/*  */}
      <section className={style.title__testdetail__container}>
        <span>
          <span className={style.testTitle}>피시험자</span>
          <span className={style.testDetail}>30~60세 성인 남성</span>
        </span>
        <br />
        <span>
          <span
            className={`${style.testTitle} ${style.title__testTitle__margin__right}`}
          >
            부위⠀⠀⠀
          </span>

          <span className={style.testDetail}>
            피시험자의 정수리와 M자앞머리 측면
          </span>
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
            퓨라셀 + 미스터케어 발모개선 앰플
            <br className={style.br1440} /> 3개월 적용 후 사진
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
            퓨라셀 + 미스터케어 발모개선 앰플
            <br className={style.br1440} /> 3개월 적용 후 사진
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
      <div className={style.container__inner}>
        <Title />
        <Explain />
      </div>
    </div>
  );
}
