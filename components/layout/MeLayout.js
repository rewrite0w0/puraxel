import MeFooter from "components/Footer/MeFooter";

export default function MeLayout({ children }) {
  return (
    <>
      {children}
      <MeFooter style={{ position: "relative", zIndex: 100 }} />
    </>
  );
}
