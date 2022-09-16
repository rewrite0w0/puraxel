import style from "./FX5000Layout.module.css";
import ModalComponent from "components/Modal/ModalComponent";
import modalStyle from "./MeLayout.module.css";

export default function FX5000Layout({ children }) {
  return (
    <section className={style.FX5000Container}>
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
