import style from "./MainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <section className={style.container}>
      <div className="wrap">
        <article className={style.bodyContainer}>{children}</article>
      </div>
    </section>
  );
}
