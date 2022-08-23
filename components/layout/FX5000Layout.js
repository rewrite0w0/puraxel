import style from "./FX5000Layout.module.css";
import ModalComponent from "components/Modal/ModalComponent";

export default function FX5000Layout({ children }) {
  return (
    <main className={style.FX5000Container}>
      <article className={style.bodyContainer}>
        {children}

        <footer className={style.footerContainer}>
          <ModalComponent />
        </footer>
      </article>
    </main>
  );
}
