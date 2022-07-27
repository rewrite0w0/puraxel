import style from "../Footer/MeFooterLayout.module.css";
import MeFooter from "../Footer/MeFooter";

export default function MeLayout({ children }) {
  return (
    <div>
      <body className={style.backGround}>{children}</body>
      <footer>
        <MeFooter />
      </footer>
    </div>
  );
}
