import style from "./page2Parts.module.css";
export default function Page2Parts() {
  return (
    <article style={{ display: "flex", flexDirection: "column" }}>
      <section>
        <div
          style={{
            display: "flex",
            boxSizing: "border-box",
            width: "594x",
            height: "164px",
            background: "rgba(255,255,255,0.5)",
            borderRadius: "4px",
            border: "1px solid #f2f3f7",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>좌</div>
            <div>우</div>
          </div>
          <div>2</div>
        </div>
      </section>
      <section>
        <div
          style={{
            display: "flex",
            boxSizing: "border-box",
            width: "594x",
            height: "164px",
            background: "rgba(255,255,255,0.5)",
            borderRadius: "4px",
            border: "1px solid #f2f3f7",
          }}
        >
          <div>1</div>
          <div>2</div>
        </div>
      </section>
      <section>
        <span>레이저 모드</span>
        <br />
        <span>안전 기능</span>
      </section>
      <section
        style={{
          display: "flex",
          boxSizing: "border-box",
          width: "594x",
          height: "164px",
          background: "rgba(255,255,255,0.5)",
          borderRadius: "4px",
          border: "1px solid #f2f3f7",
        }}
      >
        <div style={{}}>긴급 멈춤</div>
        <div>응급 시 제품을 놓을 경우 어쩌구저쩌구</div>
      </section>
      <section>접속 센서</section>
      <section>그립 센서</section>
      <section>조사 스위치</section>
      <section
        style={{
          borderRadius: "4px",
          background: "rgba(255,255,255,0.5)",
          width: "558px",
          heigth: "58px",
        }}
      >
        <span>! 주의</span>
        <span>
          본 장비는 눈에 보이지 않는 레이저를 사용하고 있어 눈에 직접 또는
          반사되는 레이저 조사 시 위험합니다. 반드시 보안경 착용 후 사용하며
          절대 직·간접적으로 보지 말아야 합니다.
        </span>
      </section>
    </article>
  );
}
