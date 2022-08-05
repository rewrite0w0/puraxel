import Image from "next/image";
import style from "./temp.page1.module.css";

import tempME from "../../../src/image/FX5000/page1/fx5000.svg";

export default function Page0() {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        // background: "black",
        height: "100vh",
      }}
    >
      <section
        style={{
          marginTop: "161px",
          display: "flex",
          flexDirection: "column",
          marginLeft: "228px",
        }}
      >
        {/* <div
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
          에스테틱의 시작
        </div> */}
        <span
          style={{
            fontSize: "48px",
            letterSpacing: "-2px",
            color: "#55576F",
            fontWeight: "300",
            marginBottom: "24px",
          }}
        >
          에스테틱의 시작
        </span>
        <span
          style={{
            fontSize: "96px",
            letterSpacing: "-2px",
            color: "#55576F",
            fontWeight: "300",
          }}
        >
          PURAXEL
        </span>
        <span
          style={{
            fontSize: "96px",
            letterSpacing: "-2px",
            color: "#55576F",
            fontWeight: "300",
            marginBottom: "77px",
          }}
        >
          FX-5000
        </span>

        <span
          style={{
            fontSize: "40px",
            letterSpacing: "-2px",
            color: "#4D5058",
            fontWeight: "300",
          }}
        >
          레이저 기술로
        </span>
        <span style={{ marginBottom: "24px" }}>
          <span
            style={{
              fontSize: "48px",
              letterSpacing: "-2px",
              color: "#55576F",
              fontWeight: "600",
            }}
          >
            에스테틱에 혁신
          </span>
          <span
            style={{
              fontSize: "40px",
              letterSpacing: "-2px",
              color: "#4D5058",
              fontWeight: "300",
            }}
          >
            을 가져오다
          </span>
        </span>
        <span
          style={{
            fontSize: "24px",
            letterSpacing: "-2px",
            color: "#4D5058",
            fontWeight: "300",
          }}
        >
          퓨라셀 PURAXEL은
        </span>
        <span
          style={{
            fontSize: "24px",
            letterSpacing: "-2px",
            color: "#4D5058",
            fontWeight: "300",
          }}
        >
          에스테틱에서 만날 수 있는
        </span>
        <span
          style={{
            fontSize: "24px",
            letterSpacing: "-2px",
            color: "#4D5058",
            fontWeight: "300",
          }}
        >
          고품격 미용 레이저입니다.
        </span>
      </section>
      <section style={{ display: "flex" }}>
        <div className={style.rightImage}></div>
        {/* <Image
          src={tempME}
          alt="puraxel FX5000"
          className={style.rightImage}
          // width={574}
          // height={1422}
          // layout="fixed"
          // bottom="0"
          // style={{ position: "absolute" }}
        /> */}
      </section>
    </main>
  );
}
