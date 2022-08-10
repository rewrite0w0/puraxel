import Image from "next/image";
import style from "./temp.page1.module.css";

import tempME from "../../../src/image/ME/page1/puraxel_me_me_me.svg";

export default function Page0() {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "1.8fr 1fr",
        marginTop: "136px",
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
            marginBottom: "16px",
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
            marginBottom: "16px",
          }}
        >
          ME
        </div>
        <div
          style={{
            fontSize: "56px",
            letterSpacing: "-2px",
            fontWeight: "300",
            color: "#55576F",
          }}
        >
          빛을
        </div>
        <div
          style={{
            fontSize: "56px",
            letterSpacing: "-2px",
            fontWeight: "300",
            color: "#55576F",
            marginBottom: "56px",
          }}
        >
          얼굴에 물들이다
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
            marginBottom: "12px",
          }}
        >
          홈 에스테틱 레이저의 시작
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
          병원, 의료기관에서만 볼 수 있던 프락셔널 레이저 기기,
          <br />
          이제는 집에서도 편리하게 사용하실 수 있습니다.
        </div>
      </section>
      <section style={{ display: "flex" }}>
        <Image
          src={tempME}
          // width="574px"
          // height="1422px"
          layout="fixed"
          // bottom="0"
          // style={{ position: "absolute" }}
          alt="me me me"
        />
      </section>
    </main>
  );
}
