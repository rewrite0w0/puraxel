import style from "./page3.module.css";
import ClinicalTestImageParts from "components/Parts/ClinicalTestImageParts";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function Page3() {
  return (
    <main
      style={{
        // display: "grid:",
        marginTop: "120px",
        marginLeft: "227px",
      }}
    >
      <article
        style={{
          marginBottom: "40px",
          display: "flex",
          flexDirection: "row",
          marginRight: "471px",
          width: "1300px",
          height: "120px",
          // gridTemplateColumns: "480px 200px 180px",
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
        <section style={{ marginTop: "40px", width: "330px" }}>
          <span>
            <span className={style.testTitle}>피시험자</span>
            <span className={style.testDetail}>여성 21명</span>
          </span>
          <br />
          <span>
            <span className={style.testTitle} style={{ marginRight: "42px" }}>
              부위
            </span>
            <span className={style.testDetail}>
              안면 부위와 전완부위 2주 사용 후 2배 증가
            </span>
          </span>
        </section>
      </article>

      <article
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 0.25fr",
          gridTemplateRows: "1fr 1fr",
          // background: "pink",

          // justifyContent: "center",
          // width: "1699px",
          position: "fixed",
          right: 0,

          height: "656px",
          // marginTop: "40px",
          paddingLeft: "40px",
          // paddingTop: "20px",
          borderRadius: "4px",
          paddingRight: "156px",
          background: "rgba(255, 255, 255, 0.7)",
          border: "1px solid #f2f3f7",
          boxShadow: "0px 20px 60px rgba(0,0,0,0.03)",
          boxSizing: "border-box",
        }}
      >
        <section className={style.gridPadding}>
          <ClinicalTestImageParts
            title="피부 보습력 3배 증가"
            // width="171px"
            sx={{ marginBottom: "8px" }}
          />

          <span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;피부 수분 변화에 대한 통계분석 결과,
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;화장품+퓨라셀 1회 사용 직후 300%이상 증가
            </span>
          </span>

          <div
            className={style.image1}
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
          />
        </section>

        <section>
          <ClinicalTestImageParts
            title="피부 치밀도 30% 증가"
            // width="184px"
            sx={{ marginBottom: "8px" }}
          />

          <span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;피부톤을 나타내는 L*value가 퓨라셀
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;사용전과 비교하여 2주 사용후 2배 증가
            </span>
          </span>

          <div
            className={style.image2}
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
          />
        </section>

        <section>
          <ClinicalTestImageParts
            title="피부톤(맑기) 2배 증가"
            // width="156px"
            sx={{ marginBottom: "8px" }}
          />
          <span>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;피부치밀도를 나타내는 Density 값이
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;퓨라셀 사용전과 비교하여 4주 사용후 30%
              증가
            </span>
          </span>

          <div
            className={style.image3}
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
          />
        </section>

        <section>{/* empty */}</section>
        <section>
          <ClinicalTestImageParts
            title="색소 침착 개선"
            color="#55576F"
            sx={{ background: "#f2f3f7" }}
            // width="101px"
          />
          <div
            className={style.image4}
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
          />
        </section>

        <section>
          <ClinicalTestImageParts
            title="안티에이징 효과"
            // width={"112px"}
            color={"#55576F"}
            sx={{ background: "#f2f3f7" }}
          />
          <span style={{ marginTop: "16px" }}></span>

          <div
            className={style.image5}
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
          />
        </section>

        <section></section>
      </article>
    </main>
  );
}
