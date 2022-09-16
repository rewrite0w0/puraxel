import style from "./HairLayout.module.css";
import ModalComponent from "components/Modal/ModalComponent";
import modalStyle from "./MeLayout.module.css";

export default function HairLayout({ children }) {
  return (
    <section className={style.HairContainer}>
      <div className={style.wrap}>
        <article className={style.bodyContainer}>
          {children}

          <footer className={style.footerContainer}>
            <ModalComponent class={modalStyle.shoppingMall} />
          </footer>
        </article>
      </div>
    </section>
  );
}
