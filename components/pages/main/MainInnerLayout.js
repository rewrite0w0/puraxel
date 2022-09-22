import _ from "./MainInnerLayout.module.css";

export default function Page0(props) {
  return (
    <section className={`${_.container} ${props.class}`} style={{ ...props }}>
      <div className={_.page__title}>
        <span className={_.page__title__bold}>홀</span>로 빛나다
      </div>

      <div className={_.expalin__para}>레이저의 미세한 홀이</div>
      <div className={_.expalin__para}>당신의 피부를 지켜줍니다.</div>
      <div className={_.image__container}>{props.image}</div>
      <div className={_.product__exlain}>※ 이 제품은 “미용기기” 입니다</div>
    </section>
  );
}
