import style from "./page3.module.css";
import ClinicalTestImageParts from "components/Parts/ClinicalTestImageParts";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function Page3() {
  return (
    <section
      style={{
        width: "auto",
        height: "100%",
      }}
    >
      <div
        style={{
          // display: "grid",
          display: "flex",
          flexDirection: "column",
          marginTop: "120px",
          marginLeft: "227px",
          justifyItems: "flex-end",
          alignSelf: "center",
        }}
      >
        <article
          style={{
            display: "flex",

            justifySelf: "flex-start",
            width: "fit-content",

            marginBottom: "24px",
          }}
        >
          <section
            style={{
              marginRight: "65px",
              width: "600px",
            }}
          >
            <span
              style={{
                fontSize: "32px",
                letterSpacing: "-0.02em",
                fontWeight: "300",
                color: "#A7ABB6",
                lineHeight: "132%",
              }}
            >
              퓨라셀 각 효능에 특화된 앰플 사용 후 결과
            </span>
            <br />
            <span
              style={{
                fontSize: "48px",
                letterSpacing: "-0.02em",
                lineHeight: "124%",
                color: "#55576F",
              }}
            >
              <span>퓨라셀</span>
              &nbsp;
              <span style={{ fontWeight: "700" }}>임상 실험</span>
            </span>
          </section>
          {/*  */}
          <section
            style={{
              marginRight: "98px",
              marginTop: "40px",
              width: "255px",
            }}
          >
            <span
              className={style.testTitle}
              // style={{
              //   marginRight: "16px",
              //   fontWeight: 500,
              //   fontSize: "16px",
              //   letterSpacing: "-0.01em",
              //   color: "#7E818D",
              // }}
            >
              시험 기간
            </span>
            <span className={style.testDetail}>2020. 5. 21 ~ 7. 13</span>
            <br />
            <span
              className={style.testTitle}
              // style={{
              //   marginRight: "16px",
              //   fontWeight: 500,
              //   fontSize: "16px",
              //   letterSpacing: "-0.01em",
              //   color: "#7E818D",
              // }}
            >
              시험 기관
            </span>
            <span className={style.testDetail}>한국피부과학연구원</span>
          </section>
          {/*  */}
          <section style={{ marginTop: "40px", width: "360px" }}>
            <span>
              <span className={style.testTitle}>피시험자</span>
              <span className={style.testDetail}>여성 21명</span>
            </span>
            <br />
            <span>
              <span className={style.testTitle} style={{ marginRight: "44px" }}>
                부위
              </span>
              <span className={style.testDetail}>
                안면 부위와 전완부위 2주 사용 후 2배 증가
              </span>
            </span>
          </section>
        </article>

        <article className={style.paperContainer}>
          <div style={{ display: "flex" }}>
            <section style={{ marginRight: "75px" }}>
              <ClinicalTestImageParts
                title="피부 보습력 3배 증가"
                width="171px"
              />

              <span className={style.paperPara}>
                <span>피부 수분 변화에 대한 통계분석 결과,</span>
                <br />
                <span>화장품+퓨라셀 1회 사용 직후 300%이상 증가</span>
              </span>

              <div className={`${style.image1} ${style.imageContainer}`} />
            </section>

            <section style={{ marginRight: "75px" }}>
              <ClinicalTestImageParts
                title="피부 치밀도 30% 증가"
                width="184px"
              />
              <span className={style.paperPara}>
                <span>피부톤을 나타내는 L*value가 퓨라셀</span>
                <br />
                <span>사용전과 비교하여 2주 사용후 2배 증가</span>
              </span>

              <div className={`${style.image2} ${style.imageContainer}`} />
            </section>

            <section style={{ marginRight: "75px" }}>
              <ClinicalTestImageParts
                title="피부톤(맑기) 2배 증가"
                width="156px"
              />
              <span className={style.paperPara}>
                <span>피부치밀도를 나타내는 Density 값이</span>
                <br />
                <span>퓨라셀 사용전과 비교하여 4주 사용후 30% 증가</span>
              </span>

              <div className={`${style.image3} ${style.imageContainer}`} />
            </section>
          </div>

          <div style={{ display: "flex" }}>
            {/* <section>empty</section> */}
            <section style={{ marginRight: "75px" }}>
              <ClinicalTestImageParts
                title="색소 침착 개선"
                color="#55576F"
                sx={{ background: "#f2f3f7" }}
                width="101px"
              />
              <span className={style.paperPara}></span>
              <div className={`${style.image4} ${style.imageContainer}`} />
            </section>

            <section style={{ marginRight: "75px" }}>
              <ClinicalTestImageParts
                title="안티에이징 효과"
                width={"112px"}
                color={"#55576F"}
                sx={{ background: "#f2f3f7" }}
              />

              <span className={style.paperPara}></span>
              <div className={`${style.image5} ${style.imageContainer}`} />
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
