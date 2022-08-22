import style from "./page2.module.css";

const Title = () => {
  return (
    <section className={style.title}>
      <span className={style.titleTop}>Critical Technology</span>
      <br />
      <span className={style.titleBot}>
        에너지 세기에 따른 <span style={{ fontWeight: 700 }}>천공 깊이</span>
      </span>
    </section>
  );
};

const ExplainTop = () => {
  return (
    <section className={style.expTop}>
      <div className={style.expTopUpper}>
        퓨라셀에 사용된 미용 레이저, 어븀야그
      </div>

      <div className={style.expTopLower}>Er : Yag, 2940nm</div>
    </section>
  );
};

const ExplainBottom = () => {
  return (
    <section className={style.expBot}>
      <div>
        <span>수분에 대한 에너지 흡수도가 높아 레이저 조사 시</span>
        <br />
        <span className={style.expBotBold}>
          피부의 물분자 결합을 깨면서 나오는
        </span>
        <br />
        <span className={style.expBotBold}>
          높은 에너지로 피부표면을 순간적으로 증발시켜
        </span>
        <br />
        <span>
          <span className={style.expBotBold}>미세한 홀을 만드는 원리</span>의
          미용 레이저입니다.
        </span>
      </div>

      <hr className={style.borderLineDash} />
      <div>
        <span>레이저로 인한 천공 깊이는&nbsp;</span>
        <span className={style.expBotBold}>
          단위면적당 레이저 <br />
          에너지 밀도(세기)
        </span>

        <span>
          에 따라 실제{" "}
          <span className={style.expBotBold}>피부에 천공되는 깊이에 차이</span>
          를 줍니다.
        </span>
      </div>
      <hr className={style.borderLineDash} />
      <div>
        <span>
          때문에{" "}
          <span className={style.expBotBold}>
            동일한 에너지로 단위면적이 작으면
          </span>
        </span>
        <br />
        <span>에너지 밀도가 높아 레이저 침투 깊이가 깊어지고</span>
        <br />
        <span>이에 따라 천공되는 깊이도 차이가 발생됩니다.</span>
      </div>
    </section>
  );
};

export default function Page2(props) {
  return (
    <section className={style.container}>
      <div className={style.leftSide}>
        <Title />
        <ExplainTop />
        <ExplainBottom />
      </div>
      <div className={style.rightSide}>
        <div className={style.topImage}></div>
        <div className={style.rightBottomSide}>
          <div className={style.bottomLeftImage}></div>
          <div className={style.bottomRightImage}></div>
        </div>
      </div>
    </section>
  );
}
