import MeFooter from "components/Footer/MeFooter";
import style from "styles/MeFooterLayout.module.css";

export default function MeLayout({ children }) {
  return (
    <>
      <main className={style.body}>{children}</main>
      <footer>
        <MeFooter className={style.footer} />
      </footer>
    </>
  );
}
