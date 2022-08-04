import style from "./page3.module.css";
import MePage3Parts from "components/Parts/MePage3";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import ReactCompareImage from "react-compare-image";

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
          width: "1124px",
          height: "107px",
          // gridTemplateColumns: "480px 200px 180px",
        }}
      >
        <span
          style={{
            background: "red",
            display: "grid",
            gridTemplateRows: "1fr 1fr",
          }}
        >
          <span>임시페이지</span>
          <span>지금은 내용없음</span>
        </span>
        <span
          style={{
            background: "black",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            color: "white",
          }}
        >
          <span>시험 기간</span>
          <span>23123~213123</span>
          <span>시험 기관 라임보소</span>
          <span>ㅇㅇ?ㅇㅇㅇ?ㅇㅇㅇㅇ?</span>
        </span>
        <span
          style={{
            background: "yellow",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
          }}
        >
          <span>피시험자</span>
          <span>여성 21명</span>
          <span>부위</span>
          <span>안면 2주 2배 EE</span>
        </span>
      </article>

      <article
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 0.25fr",
          gridTemplateRows: "1fr 1fr",
          background: "pink",
          width: "1699px",
          height: "661px",
          paddingLeft: "40px",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingRight: "80px",
        }}
      >
        <section>
          <MePage3Parts title="미 임상실험 01" />
          <div style={{ marginTop: "8px" }}>
            <span>피부 수분 변화에 대한 통계분석 결과,</span>
            <br />
            <span>화장품+퓨라셀 1회 사용 직후 300%이상 증가</span>
          </div>
          <div
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
          >
            <ReactCompareImage
              // leftImage="src/image/ME/me_03_a.png"
              // rightImage="src/image/ME/me_03_b.png"
              leftImage={"../../../src/image/ME/me_03_a.png"}
              rightImage={"../../../src/image/ME/me_03_b.png"}
            />
          </div>
        </section>

        <section>
          <MePage3Parts title="미 임상실험 02" />
          <div style={{ marginTop: "8px" }}>
            <span>피부톤을 나타내는 L*value가 퓨라셀</span>
            <br />
            <span>사용전과 비교하여 2주 사용후 2배 증가</span>
          </div>
          <div
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
          >
            <ReactCompareImage
              // leftImage="src/image/ME/me_03_a.png"
              // rightImage="src/image/ME/me_03_b.png"
              leftImage={"../../../src/image/ME/me_03_a.png"}
              rightImage={"../../../src/image/ME/me_03_b.png"}
            />
          </div>
        </section>

        <section>
          <MePage3Parts title="미 임상실험 03" />
          <div style={{ marginTop: "8px" }}>
            <span>피부치밀도를 나타내는 Density 값이</span>
            <br />
            <span>퓨라셀 사용전과 비교하여 4주 사용후 30% 증가</span>
          </div>
          <div
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
          >
            <ReactCompareImage
              // leftImage="src/image/ME/me_03_a.png"
              // rightImage="src/image/ME/me_03_b.png"
              leftImage={"../../../src/image/ME/me_03_a.png"}
              rightImage={"../../../src/image/ME/me_03_b.png"}
            />
          </div>
        </section>

        <section>{/* empty */}</section>
        <section>
          <MePage3Parts
            title="미 임상실험 A"
            color="#55576F"
            sx={{ background: "#f2f3f7" }}
          />
          <div
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
          >
            <ReactCompareImage
              // leftImage="src/image/ME/me_03_a.png"
              // rightImage="src/image/ME/me_03_b.png"
              leftImage={"../../../src/image/ME/me_03_a.png"}
              rightImage={"../../../src/image/ME/me_03_b.png"}
            />
          </div>
        </section>

        <section>
          <MePage3Parts
            title="임상 B"
            width={"47px"}
            color={"#55576F"}
            sx={{ background: "#f2f3f7" }}
          />
          <span style={{ marginTop: "16px" }}></span>
          <div
            style={{
              width: "380px",
              height: "164px",
              background: "rgba(255,255,255,0.5)",
              marginTop: "20px",
              borderRadius: "4px",
              border: "1px solid #F2F3F7",
            }}
          >
            <ReactCompareImage
              // leftImage="src/image/ME/me_03_a.png"
              // rightImage="src/image/ME/me_03_b.png"
              leftImage={"../../../src/image/ME/me_03_a.png"}
              rightImage={"../../../src/image/ME/me_03_b.png"}
            />
          </div>
        </section>

        <section></section>
      </article>
    </main>
  );
}
