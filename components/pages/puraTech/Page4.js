import style from "./page4.module.css";

const CE = () => {
  return <section className={style.ce}></section>;
};

const GMP = () => {
  return <section className={style.gmp}></section>;
};

const INNOBIZ = () => {
  return <section className={style.innobiz}></section>;
};

const ISO = () => {
  return <section className={style.iso}></section>;
};

const KBeauty = () => {
  return <section className={style.KBeauty}></section>;
};

const KIBO = () => {
  return <section className={style.kibo}></section>;
};

const KOITA = () => {
  return <section className={style.koita}></section>;
};

const CertiContainer = (props) => {
  return (
    <section className={style.CertiContainer}>
      <div>{props.image}</div>
      <div className={style.certiContainerText}>
        <span className={style.certiContainerDate}>{props.date}</span>
        <span className={style.certiContainerDetail}>{props.detail}</span>
      </div>
    </section>
  );
};

const CertiTitleContainer = (props) => {
  return (
    <span className={style.CertiTitleContainer}>
      <span
        className={style.CertiTitleContainerTitle}
        style={{ color: props.color, background: props.background }}
      >
        {props.title}
      </span>
      <span className={style.CertiTitleContainerSubject}>{props.subject}</span>
    </span>
  );
};

const HeaderTitle = () => {
  return (
    <section className={style.headerTitle}>
      <span>인증 받은</span>
      <br />
      <span>레이저 기기로</span>
      <br />
      <span>마음까지 편한 관리!</span>
    </section>
  );
};

export default function Page4(props) {
  return (
    <section className={style.container}>
      <HeaderTitle />

      <div style={{ marginTop: "48px", marginLeft: "445px" }}>
        <CertiTitleContainer
          color="#F8F9FA"
          background="#55576F"
          title="PURAXEL Certifications"
          subject="퓨라셀 인증"
        />

        <div style={{ display: "flex", marginTop: "32px" }}>
          <CertiContainer
            image={<KBeauty />}
            date="2020. 03"
            detail="미용기기 전파 인증"
          />
          <CertiContainer
            image={<CE />}
            date="2021. 05"
            detail="유럽 CE 인증"
          />
        </div>
      </div>

      <div style={{ marginTop: "73px", marginLeft: "445px" }}>
        <CertiTitleContainer
          color=""
          background="#f2f3f7"
          title="LaMeditech Certifications"
          subject="기업 인증"
        />
        <div style={{ display: "flex", marginTop: "24px" }}>
          <CertiContainer image={<GMP />} date="2017. 06" detail="KGMP 인증" />
          <CertiContainer
            image={<ISO />}
            date="2012. 02"
            detail="ISO 13485 인증"
          />
          <CertiContainer
            image={<KIBO />}
            date="2016. 04"
            detail="벤처기업 인증"
          />
          <CertiContainer
            image={<KOITA />}
            date="2012. 04"
            detail="기업부설연구소 인증"
          />
          <CertiContainer
            image={<INNOBIZ />}
            date="2020. 05"
            detail="이노비즈 인증"
          />
        </div>
      </div>
    </section>
  );
}
