const ExplainContainer = (props) => {
  const ExplainImage = () => {
    return (
      <section
        className={props.imageCN}
        style={{
          background: "#fff",
          borderRadius: "4px",
          width: "264px",
          heigth: "148px",
          background: `url(${props.imageUrl})"`,
        }}
      ></section>
    );
  };

  const BaseContainer = () => {
    return (
      <section
        style={{
          background: "#dd7a8c",
          opacity: "0.9",
          // padding: "4px 8px",
          borderRadius: "4px",
          width: "59px",
          heigth: "25px",
          color: "#fff",
        }}
      >
        {/*  */}
        기본 기능
      </section>
    );
  };

  const OptionalContainer = () => {
    return (
      <section
        style={{
          background: "#7e818d",
          opacity: "0.9",
          // padding: "4px 8px",
          borderRadius: "4px",
          width: "59px",
          heigth: "25px",
          color: "#fff",
        }}
      >
        {/*  */}
        옵션 기능
      </section>
    );
  };

  const ImageOnExplainContainer = (props) => {
    return (
      <section
        style={{
          background: "#f2f3f7",
          opacity: "0.9",
          // padding: "4px 8px",
          borderRadius: "4px",
          // width: "59px",
          heigth: "25px",
          color: "#4d5058",
        }}
      >
        {props.image}
      </section>
    );
  };

  const InnerExplaianContainer = () => {
    return <h1>12345</h1>;
  };

  const ExplainTitle = () => {
    return <h1>qwer</h1>;
  };

  const Temp = () => {
    return <section>qwer</section>;
  };

  return (
    <section
      style={{
        boxSizing: "border-box",
        width: "594x",
        height: "164px",
        background: "rgba(255,255,255,0.5)",
        borderRadius: "4px",
        border: "1px solid #f2f3f7",
        // display: "flex",
      }}
    >
      <ExplainImage />
      <BaseContainer />
      <OptionalContainer />
      <BaseContainer />
      <div>좌</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", height: "43px", marginBottom: "16px" }}>
          <span
            style={{ color: "#55576f", fontSize: "18px", fontWeight: "700" }}
          >
            레이저
          </span>
          <span
            style={{ color: "#a292a3", fontSize: "14px", fontWeight: "700" }}
          >
            피부 속 채널 생성, 모공 관리
          </span>
        </div>
        <div>아래</div>
      </div>
    </section>
  );
};

export default ExplainContainer;
