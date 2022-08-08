import Image from "next/image";
import style from "./temp.page1.module.css";

import tempME from "../../../src/image/FX5000/page1/fx-5000_01.png";

export default function Page0() {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        marginTop: "210px",
        height: "100vh",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "228px",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "-1px",
            background: "#55576F",
            borderRadius: "4px",
            border: "0.78125px solid #FFF",
            width: "120px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            marginBottom: "26px",
          }}
        >
          PURAXEL
        </div>
        <div
          style={{
            fontSize: "108px",
            letterSpacing: "-2px",
            color: "#55576F",
            fontWeight: "800",
          }}
        >
          FX5000
        </div>
        <div
          style={{
            fontSize: "56px",
            letterSpacing: "-2px",
            fontWeight: "300",
            color: "#55576F",
          }}
        >
          레이저 기술로
        </div>
        <div
          style={{
            fontSize: "56px",
            letterSpacing: "-2px",
            fontWeight: "300",
            color: "#55576F",
            marginBottom: "76px",
          }}
        >
          에스테틱의 혁신을 가져오다
        </div>
        <div
          style={{
            boxSizing: "border-box",
            width: "282px",
            height: "74px",
            background: "rgba(255, 255, 255, 0.5)",
            boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.03)",
            backdropFilter: "blur(20px)",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: "700",
            letterSpacing: "-1px",
            color: "#4D5058",
            marginBottom: "32px",
          }}
        >
          에스테틱 레이저의 시작
        </div>

        <div
          style={{
            color: "#4D5058",
            letterSpacing: "-2px",
            fontSize: "20px",
            fontWeight: "300",
            width: "574px",
            height: "159px",
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 43.4%, rgba(255, 255, 255, 0) 100%)",
            backdropFilter: "blur(20px)",
            borderRadius: "4px",
            display: "flex",
            padding: "20px 59px 71px 20px",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          퓨라셀 FX-5000은 의료용으로만 사용되던 레이저를
          <br />
          미용기기로 만든 국내 최초 레이저 뷰티 디바이스입니다.
        </div>
      </section>
      <section style={{ display: "flex" }}>
        <Image
          src={tempME}
          // width="574px"
          // height="1422px"

          bottom="0"
          style={{ position: "absolute" }}
        />
      </section>
    </main>
  );
}
