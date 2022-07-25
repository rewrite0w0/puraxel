import style from "styles/LayoutMeFooter.module.css";
import MeFooter from "../Footer/MeFooter";

export default function MeLayout({ children }) {
  return (
    <div>
      <body className={style.backGround}>{children}</body>
      <footer className={style.footer}>
        <MeFooter />
      </footer>
    </div>
  );
}
