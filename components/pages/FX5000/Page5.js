import { useState, useEffect } from "react";
import style from "./page5.module.css";

import parts01 from "src/image/ME/page4/me_04_01.svg";
import parts02 from "src/image/ME/page4/me_04_02.svg";
import parts03 from "src/image/ME/page4/me_04_03.svg";
import parts04 from "src/image/ME/page4/me_04_04.svg";

import parts01onPaper from "src/image/FX5000/page5/fx-5000_01_active.svg";
import parts02onPaper from "src/image/FX5000/page5/fx-5000_02_active.svg";
import parts03onPaper from "src/image/FX5000/page5/fx-5000_03_active.svg";
import parts04onPaper from "src/image/FX5000/page5/fx-5000_04_active.svg";

import parts01onPaperOff from "src/image/ME/page4/me_01_inactive.svg";
import parts02onPaperOff from "src/image/ME/page4/me_02_inactive.svg";
import parts03onPaperOff from "src/image/ME/page4/me_03_inactive.svg";
import parts04onPaperOff from "src/image/ME/page4/me_04_inactive.svg";

import Image from "next/image";
import { Paper } from "@mui/material";

const PaperLeftBot = (props) => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        padding: "24px",
        borderBottom: "1px solid #F2F3F6",
        width: "300px",
        fontSize: "16px",
        letterSpacing: "-1px",
      }}
    >
      <div style={{ color: "#A7ABB6" }}>{props.title}</div>
      <div style={{ color: "#4D5058", marginLeft: "50px" }}>
        {props.explain}
      </div>
    </section>
  );
};

const PaperRightBot = (props) => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        padding: "24px",
        borderBottom: "1px solid #F2F3F6",
        width: "425px",
      }}
    >
      <div
        style={{ fontSize: "16px", letterSpacing: "-1px", color: "#A7ABB6" }}
      >
        {props.title}
      </div>

      <div
        style={{
          color: "#4D5058",
          fontSize: "16px",
          letterSpacing: "-1px",
          marginLeft: "50px",
        }}
      >
        <div>{props.firstEX}</div>
        <div>{props.secondEX}</div>
      </div>
    </section>
  );
};

const Parts01 = () => {
  return <div className={style.meParts01} imagenum="pu"></div>;
  // return <Image src={parts01} />;
};

const Parts02 = () => {
  return <div className={style.meParts02} imagenum="ra"></div>;
  // return <Image src={parts02} />;
};
const Parts03 = () => {
  return <div className={style.meParts03} imagenum="xel"></div>;
  // return <Image src={parts03} />;
};
const Parts04 = () => {
  return <div className={style.meParts04} imagenum="me"></div>;
  // return <Image src={parts04} />;
};

export default function Page4(props) {
  const [parts, setParts] = useState(undefined);

  const imageOnClickHandler = {
    onPu: () => {
      setParts("pu");
    },
    onRa: () => {
      setParts("ra");
    },
    onXel: () => {
      setParts("xel");
    },
    onMe: () => {
      setParts("me");
    },
  };

  const PartViewer = () => {
    if (parts === "pu") {
      return <Parts01 />;
    }

    if (parts === "ra") {
      return <Parts02 />;
    }
    if (parts === "xel") {
      return <Parts03 />;
    }
    if (parts === "me") {
      return <Parts04 />;
    }
  };

  useEffect(() => {
    return setParts("pu");
  }, []);

  return (
    <div className={style.container}>
      <div
        style={{
          // background: "pink",
          display: "flex",
          // width: "40%",
          justifyContent: "center",
          // marginTop: "500px",
          padding: "25px",
          marginTop: "145px",
          marginRight: "266px",
          marginLeft: "160px",
          marginBottom: "100px",
        }}
      >
        {<PartViewer />}
      </div>
      <div
        style={{
          display: "flex",
          // width: "60%",
          overflow: "inherit",
          justifyContent: "flex-end",
        }}
      >
        {/* {<PartViewer />} */}
        <article
          style={{
            width: "1124px",
            heigth: "640px",
            marginBottom: "220px",
            marginTop: "220px",
            borderRadius: "4px",
            border: "1px solid #F2F3F7",
            boxShadow: "border-box",
            display: "grid",
            gridTemplateRows: "1fr 4fr",
            gridTemplateColumns: "1fr 1.2fr",
            padding: "48px 80px",
            background: "#fff",
          }}
        >
          <section className={style.paperLeftTop}>
            <span
              style={{
                letterSpacing: "-2px",
                fontSize: "48px",
                // background: "#55576F",
                color: "#55576F",
              }}
            >
              제품 구성 및 사양
            </span>
          </section>
          <section className={style.paperRightTop}>
            <div
              className={style.paperRightTopImages}
              partsid="pu"
              onClick={imageOnClickHandler.onPu}
              style={{
                filter: parts === "pu" ? "grayScale(0)" : "grayScale(1)",
              }}
            >
              <Image
                src={parts01onPaper}
                style={{
                  marginBottom: parts === "pu" ? "10px" : "0px",
                }}
              />
            </div>
            <div
              className={style.paperRightTopImages}
              partsid="ra"
              onClick={imageOnClickHandler.onRa}
              style={{
                filter: parts === "ra" ? "grayScale(0)" : "grayScale(1)",
              }}
            >
              <Image
                src={parts02onPaper}
                style={{
                  marginBottom: parts === "ra" ? "10px" : "0px",
                }}
              />
            </div>
            <div
              className={style.paperRightTopImages}
              partsid="xel"
              onClick={imageOnClickHandler.onXel}
              style={{
                filter: parts === "xel" ? "grayScale(0)" : "grayScale(1)",
              }}
            >
              <Image
                src={parts03onPaper}
                style={{
                  marginBottom: parts === "xel" ? "10px" : "0px",
                }}
              />
            </div>
            <div
              className={style.paperRightTopImages}
              partsid="me"
              onClick={imageOnClickHandler.onMe}
              style={{
                filter: parts === "me" ? "grayScale(0)" : "grayScale(1)",
              }}
            >
              <Image
                src={parts04onPaper}
                style={{
                  marginBottom: parts === "me" ? "10px" : "0px",
                }}
              />
            </div>
          </section>
          <section className={style.paperLeftBottom}>
            <PaperLeftBot title="제품명" explain="퓨라셀 me" />
            <PaperLeftBot title="레이저 종류" explain="Er.YAG" />
            <PaperLeftBot title="레이저 파장" explain="2940nm(+-1%)" />
            <PaperLeftBot title="레이저 출력 범위" explain="80~140mJ(+-20%)" />
            <PaperLeftBot title="레이저 레벨 범위" explain="1~2 level" />
            <PaperLeftBot title="레이저 반복" explain="3~6 seconds interval" />
          </section>
          <section className={style.paperRightBottom}>
            <PaperRightBot
              title="기능모드"
              firstEX="1) Fractional Laser"
              secondEX="2) Galvanic"
            />

            <PaperRightBot
              title="제품 무게"
              firstEX="Main Body: 350g"
              secondEX="Cradle: 110g"
            />
            <PaperRightBot
              title="배터리 사양"
              firstEX="50 x 57 x 220 mm (Main body)"
              secondEX="98 x 98 x 85 mm (Cradle)"
            />

            <PaperRightBot
              title="제품 치수"
              firstEX="Built-in Rechargeable"
              secondEX="11.1V 850mAh Lithium-Polymer Battery"
            />
          </section>
        </article>
      </div>
    </div>
  );
}
