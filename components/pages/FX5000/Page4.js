import { useState } from "react";
import style from "./page4.module.css";

const YTThumbnailContainer = (props) => {
  return (
    <section
      onClick={props.onClick}
      style={{
        width: "184px",
        heigth: "142px",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        style={{ height: "98px", ...props.sx }}
        src={props.temp}
        className={props.cn}
      ></img>
      <div
        style={{
          height: "35px",
          letterSpacing: "-0.03em",
          fontSize: "12px",
          fontWeight: "600",
          color: "#7E818D",
        }}
      >
        {props.explain}
      </div>
    </section>
  );
};

export default function Page4(props) {
  const [YTLink, setYTLink] = useState("X6oDTHJnxq4");

  const YTLinkHandler = {
    zero: () => {
      setYTLink("X6oDTHJnxq4");
    },
    firstImage: () => {
      setYTLink("iSlAIizlcb8");
    },
    secondImage: () => {
      setYTLink("ciJNn09AT78");
    },
    thirdImage: () => {
      setYTLink("OKQULSJ8L10");
    },
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <section
        style={{
          display: "flex",
          marginTop: "160px",
          marginLeft: "80px",
          marginRight: "80px",
          marginBottom: "80px",
          justifyContent: "space-between",
        }}
      >
        {/* 왼쪽 상단 */}
        <div onClick={YTLinkHandler.zero}>
          <span
            style={{
              fontWeight: "500",
              fontSize: "16px",
              letterSpacing: "-0.01rem",
              color: "#A7ABB6",
            }}
          >
            에스테틱에서 받는 관리 과정을 영상으로 자세히 보기
          </span>
          <br />

          <span
            style={{
              letterSpacing: "-0.02rem",
              color: "#55576F",
              fontSize: "64px",
            }}
          >
            <span
              style={{
                fontWeight: 300,
              }}
            >
              퓨라셀
            </span>
            &nbsp;
            <span style={{ fontWeight: 700 }}>사용방법</span>
          </span>
        </div>

        <div style={{ display: "flex" }}>
          <YTThumbnailContainer
            cn={style.temp}
            onClick={YTLinkHandler.firstImage}
            // temp="url(../../../src/image/FX5000/page4/giphy.gif)"
            explain="고성능 화장품의 흡수율을 높여주는
            퓨라셀 피부 관리법"
          />

          <YTThumbnailContainer
            cn={style.temp}
            onClick={YTLinkHandler.secondImage}
            // temp="url(src/image/FX5000/page4/giphy.gif)"
            explain="피부결, 피부톤, 건조만 고민을
            한 번에 잡아주는 관리법"
          />
          <YTThumbnailContainer
            cn={style.temp}
            onClick={YTLinkHandler.thirdImage}
            // temp="url(src/image/FX5000/page4/giphy.gif)"
            explain="에스테틱 레이저 퓨라셀 동아TV
            스타일美 시즌2 방송"
          />
        </div>
      </section>

      {/* 이미지 꽉 채우기 */}

      <section style={{ height: "inherit" }}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${YTLink}?controls=1&rel=0&disablekb=1&autoplay=1&loop=0&mute=0&modestbranding=1`}
          title="How to use PURAXEL"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
}
