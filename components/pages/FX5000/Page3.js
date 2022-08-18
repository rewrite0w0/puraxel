import _ from "./page3.module.css";
import ClinicalTestImageParts from "components/Parts/ClinicalTestImageParts";

export default function Page3() {
  return (
    <main className={_.container}>
      <article className={_.topContainer}>
        <section className={_.topLeftContainer}>
          <span className={_.topLeftSub}>
            퓨라셀 각 효능에 특화된 앰플 사용 후 결과
          </span>
          <br />
          <span className={_.topLeftTitle}>
            <span>퓨라셀</span>
            &nbsp;
            <span className={_.topLeftTitleBold}>임상 실험</span>
          </span>
        </section>
        {/*  */}
        <section className={_.midContainer}>
          <span className={_.testTitle}>시험 기간</span>
          <span className={_.testDetail}>2020. 5. 21 ~ 7. 13</span>
          <br />
          <span className={_.testTitle}>시험 기관</span>
          <span className={_.testDetail}>한국피부과학연구원</span>
        </section>
        {/*  */}
        <section className={_.rightContainer}>
          <span>
            <span className={_.testTitle}>피시험자</span>
            <span className={_.testDetail}>여성 21명</span>
          </span>
          <br />
          <span>
            <span className={_.testTitle} style={{ marginRight: "42px" }}>
              부위
            </span>
            <span className={_.testDetail}>
              안면 부위와 전완부위 2주 사용 후 2배 증가
            </span>
          </span>
        </section>
      </article>

      <article className={_.botContainer}>
        <section className={_.gridPadding}>
          <ClinicalTestImageParts
            title="피부 보습력 3배 증가"
            // width="171px"
            sx={{ marginBottom: "8px" }}
          />

          <span className={_.commonText}>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;피부 수분 변화에 대한 통계분석 결과,
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;화장품+퓨라셀 1회 사용 직후 300%이상 증가
            </span>
          </span>

          <div className={`${_.compareImageContainer} ${_.image1}`} />
        </section>

        <section>
          <ClinicalTestImageParts
            title="피부 치밀도 30% 증가"
            // width="184px"
            sx={{ marginBottom: "8px" }}
          />

          <span className={_.commonText}>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;피부톤을 나타내는 L*value가 퓨라셀
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;사용전과 비교하여 2주 사용후 2배 증가
            </span>
          </span>

          <div className={`${_.compareImageContainer} ${_.image2}`} />
        </section>

        <section>
          <ClinicalTestImageParts
            title="피부톤(맑기) 2배 증가"
            // width="156px"
            sx={{ marginBottom: "8px" }}
          />
          <span className={_.commonText}>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;피부치밀도를 나타내는 Density 값이
            </span>
            <br />
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;퓨라셀 사용전과 비교하여 4주 사용후 30%
              증가
            </span>
          </span>

          <div className={`${_.compareImageContainer} ${_.image3}`} />
        </section>

        <section>
          <ClinicalTestImageParts
            title="색소 침착 개선"
            color="#55576F"
            sx={{ background: "#f2f3f7" }}
            // width="101px"
          />
          <div className={`${_.compareImageContainer} ${_.image4}`} />
        </section>

        <section>
          <ClinicalTestImageParts
            title="안티에이징 효과"
            // width={"112px"}
            color={"#55576F"}
            sx={{ background: "#f2f3f7" }}
          />
          <span style={{ marginTop: "16px" }}></span>

          <div className={`${_.compareImageContainer} ${_.image1}`} />
        </section>
      </article>
    </main>
  );
}
