import meKr from "public/locales/kr/me";
import style from "./page1.module.css";

export default function Page1() {
  return (
    <main className={style.container}>
      <article className={style.containerLeft}>1</article>
      <article className={style.containerRight}>2</article>
    </main>
  );
}
