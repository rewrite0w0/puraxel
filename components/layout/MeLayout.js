import LinkButton from "components/Footer/LinkButton";
import LinkPriceButton from "components/Footer/LinkPriceButton";
import layoutFooterKr from "public/locales/kr/layoutFooter.json";

import { ShopIcon } from "components/Parts/Icons";
import style from "./MeLayout.module.css";

import CommonButtons from "components/Footer/CommonButtons";

export default function MeLayout({ children }) {
  return (
    <main className={style.meContainer}>
      <article className={style.bodyContainer}>
        {children}

        <footer className={style.footerContainer}>
          <LinkButton
            title={layoutFooterKr.ShoppingMallLink}
            // link="https://qwant.com"
            icon={
              <ShopIcon
                sx={{
                  height: "14.88px",
                  width: "17.5px",
                  color: "#fff",
                  marginRight: "7.25px",
                }}
              />
            }
            sx={{
              width: "128px",
              marginRight: "20px",
              fontSize: "18px",
              fontWeight: "600",
              letterSpacing: "-1px",
            }}
          />
          <CommonButtons
            topLeft="퓨라셀 ME"
            topRightDiscountPrice="1,890,000원"
            bottomRightz="12개월"
            bottomRightx="월 157,500원"
            style={{ width: "277px", marginRight: "20px" }}
          />

          <CommonButtons
            topLeft="퓨라셀 ME + 퓨라더마앰플"
            topRightOriginalPrice="1800000원 => "
            topRightDiscountPrice="1,890,000원"
            bottomLeft="18%"
            bottomRightz="12개월"
            bottomRightx="월 157,500원"
            style={{ width: "425px" }}
          />
          {/* <LinkPriceButton
            title={layoutFooterKr.Me}
            price={layoutFooterKr.MePrice}
            installment={layoutFooterKr.MeInstallmentDuration}
            installmentPrice={layoutFooterKr.MeInstallmentPrice}
            link="https://qwant.com"
            sx={{ width: "277px", marginRight: "20px" }}
          /> */}

          {/* <LinkPriceButton
            title={layoutFooterKr.MeAmpoul}
            originalPrice={layoutFooterKr.MeAmpoulOriginalPrice}
            arrow={layoutFooterKr.MeAmpoulArrow}
            price={layoutFooterKr.MeAmpoulPrice}
            offRate={layoutFooterKr.MeAmpoulPriceDiscountRate}
            installment={layoutFooterKr.MeAmpoulInstallment}
            installmentPrice={layoutFooterKr.MeAmpoulInstallmentPrice}
            link="https://www.qwant.com/"
            sx={{ width: "425px" }}
          /> */}

          <LinkButton
            title="여기에 캐러셀 혹은 수동 캐러셀"
            sx={{ width: "92px", position: "absoulte", right: 0, left: 100 }}
          />
        </footer>
      </article>
    </main>
  );
}
