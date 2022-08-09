import { useState } from "react";
import style from "./page1.module.css";

export default function Page1() {
  const [currentPage, setCurrentPage] = useState("me");
  // me, fx, hair

  const onHoverHandler = {
    me: () => {
      setCurrentPage("me");
    },
    fx: () => {
      setCurrentPage("fx");
    },
    hair: () => {
      setCurrentPage("hair");
    },
  };

  return (
    <section
      style={{
        marginRight: "228px",
        marginLeft: "228px",
        marginTop: "160px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className={style.title}>피부, 홀로 빛나다</span>
          <div style={{ display: "flex" }}>
            <span className={style.titleExplain}>
              <span>
                <span style={{ fontWeight: 500 }}>프락셔널 레이저</span>로
                생성되는
              </span>
              <br />
              <span>
                5000개의 <span style={{ fontWeight: 500 }}>마이크로 홀</span>
              </span>
            </span>

            <span className={style.titleExplain} style={{ marginLeft: "64px" }}>
              <span>레이저, 시작부터 프로페셔널</span>
              <br />
              <span style={{ fontWeight: 500 }}>
                홈 레이저 뷰티 케어의 시작
              </span>
            </span>
          </div>
        </div>
        <div>
          <div className={style.logo}></div>
        </div>
      </div>
      <div>2</div>
    </section>
  );
}
