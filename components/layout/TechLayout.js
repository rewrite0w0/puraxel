import style from "./TechLayout.module.css";

export default function TechLayout({ children }) {
  return (
    <section className={style.TechContainer}>
      <div className={style.wrap}>
        <article className={style.bodyContainer}>
          {children}

          <footer className={style.footerContainer}></footer>
        </article>
      </div>
    </section>
  );
}
