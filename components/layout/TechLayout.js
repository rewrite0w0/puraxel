import style from "./TechLayout.module.css";

export default function TechLayout({ children }) {
  return (
    <main className={style.TechContainer}>
      <article className={style.bodyContainer}>
        {children}

        <footer className={style.footerContainer}></footer>
      </article>
    </main>
  );
}
