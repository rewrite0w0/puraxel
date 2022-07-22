import MeFooter from "components/Footer/MeFooter";
import style from "styles/LayoutMeFooter.module.css";

export default function MeLayout({ children }) {
  return (
    <div className={style.backGround}>
      <main className={style.body}>{children}</main>
      <footer>
        <MeFooter className={style.footer} />
      </footer>
    </div>
  );
}
