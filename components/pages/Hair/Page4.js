import { useState } from "react";
import _ from "./page4.module.css";

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
        height: "100%",
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
        <article>
          <div className={_.sub_title}>
            PURAXEL Hair와 함께 하는 탈모 클리닉
          </div>

          <div className={_.main_title}>
            PURAXEL Hair가 자신 있는 일상을 찾아 드립니다.
          </div>
        </article>

        {/* <div style={{ display: "flex" }}>
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
        </div> */}
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
