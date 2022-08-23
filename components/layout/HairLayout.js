import style from "./HairLayout.module.css";
import ModalComponent from "components/Modal/ModalComponent";

export default function HairLayout({ children }) {
  return (
    <main className={style.HairContainer}>
      <article className={style.bodyContainer}>
        {children}

        <footer className={style.footerContainer}>
          <ModalComponent />
        </footer>
      </article>
    </main>
  );
}
