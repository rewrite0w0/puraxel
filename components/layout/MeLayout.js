import layoutFooterKr from "public/locales/kr/layoutFooter.json";

import { ShopIcon } from "components/Parts/Icons";
import style from "./MeLayout.module.css";

import CommonButtons from "components/Footer/CommonButtons";
import CommonPlainButtons from "components/Footer/CommonPlainButtons";

export default function MeLayout({ children }) {
  return (
    <section className={style.meContainer}>
      <div className={style.wrap}>
        <article className={style.bodyContainer}>{children}</article>
        <footer className={style.footerContainer}>
          <div style={{ display: "flex" }}>
            <CommonPlainButtons
              title={layoutFooterKr.ShoppingMallLink}
              link="https://lmdt.cafe24.com"
              icon={
                <ShopIcon
                  sx={{
                    height: "5rem",
                    width: "2.5rem",
                    color: "#fff",
                    marginRight: "0.725rem",
                  }}
                />
              }
              class={style.shoppingMall}
              style={
                {
                  // width: "12.8rem",
                  // marginRight: "2rem",
                  // fontSize: "1.8rem",
                  // fontWeight: "600",
                  // letterSpacing: "-0.01em",
                  // color: "#555768",
                  // cursor: "pointer",
                }
              }
            />

            <CommonButtons
              topLeft="퓨라셀 ME"
              topRightDiscountPrice="1,890,000원"
              bottomRightz="12개월"
              bottomRightx="월 157,500원"
              class={style.single}
              link="https://lmdt.cafe24.com"
            />

            <CommonButtons
              topLeft="퓨라셀 ME + 퓨라더마앰플"
              // topRightOriginalPrice="2,433,000원 -> "
              topRightOriginalPrice={<OriginalPrice />}
              topRightDiscountPrice="1,977,600원"
              bottomLeft="23% off"
              bot_left_style={{ backgroundColor: "#F2F3F7" }}
              bottomRightz="12개월"
              bottomRightx="월 164,800원"
              class={style.set}
              link="https://lmdt.cafe24.com"
            />
          </div>
        </footer>
      </div>
    </section>
  );
}

const OriginalPrice = () => {
  return (
    <span>
      <span style={{ marginRight: "0.4rem" }}>2,433,000원</span>
      <svg
        width="11"
        height="8"
        viewBox="0 0 11 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464467C6.97631 0.269205 6.65973 0.269205 6.46447 0.464467C6.2692 0.659729 6.2692 0.976311 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10.3536 4.35355ZM-4.37114e-08 4.5L10 4.5L10 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
          fill="#C7CAD3"
        />
      </svg>
    </span>
  );
};
