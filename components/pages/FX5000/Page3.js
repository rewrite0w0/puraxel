import style from "./page3.module.css";
import ClinicalTestImageParts from "components/Parts/ClinicalTestImageParts";

const Title = () => {
  return (
    <article className={style.title__container}>
      <section className={style.title__container__title}>
        <span className={style.title__container__title__para}>
          퓨라셀 각 효능
        </span>
        <br />
        <span className={style.title__container__title__sub}>
          <span className={style.title__container__light}>ME</span>
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
          <span className={style.testDetail}>여성 21명</span>
        </span>
        <br />
        <span>
          <span
            className={`${style.testTitle} ${style.title__testTitle__margin__right}`}
          >
            부위
          </span>
          <span className={style.testDetail}>
            안면 부위와 전완부위 2주 사용 후 2배 증가
          </span>
        </span>
      </section>
    </article>
  );
};

const ImageGrid = () => {
  return (
    <article className={style.paperContainer}>
      <div className={style.paper__container__inner}>
        <section className={style.paper__explain__container}>
          <ClinicalTestImageParts title="피부 보습력 3배 증가" />

          <div className={style.paperPara}>
            <div>피부 수분 변화에 대한 통계분석 결과,</div>

            <div>화장품+퓨라셀 1회 사용 직후 300%이상 증가</div>
          </div>

          <div className={`${style.image1} ${style.imageContainer}`} />
        </section>

        <section className={style.paper__explain__container}>
          <ClinicalTestImageParts title="피부 치밀도 30% 증가" />
          <div className={style.paperPara}>
            <div>피부치밀도를 나타내는 Density 값이</div>
            <div>퓨라셀 사용전과 비교하여 4주 사용후 30% 증가</div>
          </div>

          <div className={`${style.image2} ${style.imageContainer}`} />
        </section>

        <section className={style.paper__explain__container}>
          <ClinicalTestImageParts title="피부톤(맑기) 2배 증가" />
          <div className={style.paperPara}>
            <div>피부톤을 나타내는 L*value가 퓨라셀</div>
            <div>사용전과 비교하여 2주 사용후 2배 증가</div>
          </div>

          <div className={`${style.image3} ${style.imageContainer}`} />
        </section>
      </div>

      <div className={style.paper__container__inner}>
        <section className={style.paper__explain__container}>
          <ClinicalTestImageParts title="색소 침착 개선" />
          <div className={`${style.image4} ${style.imageContainer}`} />
        </section>

        <section className={style.paper__explain__container}>
          <ClinicalTestImageParts title="안티에이징 효과" />

          <div className={`${style.image5} ${style.imageContainer}`} />
        </section>
      </div>
    </article>
  );
};

export default function Page3() {
  return (
    <section className={style.container}>
      <div className={style.container__inner}>
        <Title />
        <ImageGrid />
      </div>
    </section>
  );
}
