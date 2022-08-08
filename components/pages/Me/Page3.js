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
              letterSpacing: "-2px",
              fontWeight: "300",
              color: "#A7ABB6",
            }}
          >
            퓨라셀 각 효능에 특화된 앰플 사용 후 결과
          </span>
          <br />
          <span
            style={{
              fontSize: "48px",
              letterSpacing: "-0.02em",

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
            //   letterSpacing: "-1px",
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
            //   letterSpacing: "-1px",
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

          background: "rgba(255, 255, 255, 0.7)",
          width: "1699px",
          height: "661px",
          marginTop: "40px",
          paddingLeft: "40px",
          // paddingTop: "20px",

          paddingRight: "80px",
        }}
      >
        <section>
          <ClinicalTestImageParts title="피부 보습력 3배 증가" width="171px" />
          <div style={{ marginTop: "8px" }}>
            <span>피부 수분 변화에 대한 통계분석 결과,</span>
            <br />
            <span>화장품+퓨라셀 1회 사용 직후 300%이상 증가</span>
          </div>
          <ReactCompareSlider
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
            changePositionOnHover={true}
            itemOne={
              <ReactCompareSliderImage src="https://puraxel.co.kr/img/main/section10_img01.jpg" />
            }
            itemTwo={
              <ReactCompareSliderImage src="https://puraxel.co.kr/img/main/section10_img02.jpg" />
            }
          />
        </section>

        <section>
          <ClinicalTestImageParts title="피부 치밀도 30% 증가" width="184px" />
          <div style={{ marginTop: "8px" }}>
            <span>피부톤을 나타내는 L*value가 퓨라셀</span>
            <br />
            <span>사용전과 비교하여 2주 사용후 2배 증가</span>
          </div>
          <ReactCompareSlider
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
            changePositionOnHover={true}
            itemOne={
              <ReactCompareSliderImage src="https://puraxel.co.kr/img/main/section10_img01.jpg" />
            }
            itemTwo={
              <ReactCompareSliderImage src="https://puraxel.co.kr/img/main/section10_img02.jpg" />
            }
          />
        </section>

        <section>
          <ClinicalTestImageParts title="피부톤(맑기) 2배 증가" width="156px" />
          <div style={{ marginTop: "8px" }}>
            <span>피부치밀도를 나타내는 Density 값이</span>
            <br />
            <span>퓨라셀 사용전과 비교하여 4주 사용후 30% 증가</span>
          </div>
          <ReactCompareSlider
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
            changePositionOnHover={true}
            itemOne={
              <ReactCompareSliderImage src="https://puraxel.co.kr/img/main/section10_img01.jpg" />
            }
            itemTwo={
              <ReactCompareSliderImage src="https://puraxel.co.kr/img/main/section10_img02.jpg" />
            }
          />
        </section>

        <section>{/* empty */}</section>
        <section>
          <ClinicalTestImageParts
            title="색소 침착 개선"
            color="#55576F"
            sx={{ background: "#f2f3f7" }}
            width="101px"
          />
          <ReactCompareSlider
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
            changePositionOnHover={true}
            itemOne={
              <ReactCompareSliderImage src="https://puraxel.co.kr/img/main/section10_img01.jpg" />
            }
            itemTwo={
              <ReactCompareSliderImage src="https://puraxel.co.kr/img/main/section10_img02.jpg" />
            }
          />
        </section>

        <section>
          <ClinicalTestImageParts
            title="안티에이징 효과"
            width={"112px"}
            color={"#55576F"}
            sx={{ background: "#f2f3f7" }}
          />
          <span style={{ marginTop: "16px" }}></span>
          <ReactCompareSlider
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
            changePositionOnHover={true}
            itemOne={
              <ReactCompareSliderImage src="https://puraxel.co.kr/img/main/section10_img01.jpg" />
            }
            itemTwo={
              <ReactCompareSliderImage src="https://puraxel.co.kr/img/main/section10_img02.jpg" />
            }
          />
        </section>

        <section></section>
      </article>
    </main>
  );
}
