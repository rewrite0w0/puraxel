import { useEffect, useState } from "react";
import { Box, Menu, Button, MenuItem } from "@mui/material";

// import navStyle from "./Nav.module.css";
import navStyle from "components/Nav/Nav.module.css";

import layoutHeaderKr from "public/locales/kr/layoutHeader.json";

import NavIconButton from "components/Nav/NavIconButton";

export default function Navbars() {
  const [companyOpenState, setCompanyInfoOpenState] = useState(false);
  const [companyInfoAnchorState, setCompanyInfoAnchorState] =
    useState(undefined);

  const [snsOpenState, setSnsOpenState] = useState(false);
  const [snsAnchorState, setSnsAnchorState] = useState(undefined);

  const [productOpenState, setProductOpenState] = useState(false);
  const [productAnchorState, setProductAnchorState] = useState(undefined);

  const handleSNSButton = (e) => {
    setSnsAnchorState(e.currentTarget);
    setSnsOpenState(!snsOpenState);
  };

  const handleSNSCloseButton = () => {
    setSnsAnchorState(undefined);
  };

  const handleCompanyInfoButton = (e) => {
    setCompanyInfoAnchorState(e.currentTarget);
    setCompanyInfoOpenState(!companyOpenState);
  };

  const handleCompanyInfoCloseButton = () => {
    setCompanyInfoAnchorState(undefined);
  };

  const handleProductInfoButton = (e) => {
    setProductAnchorState(e.currentTarget);
    setProductOpenState(!productOpenState);
  };

  const handleProductInfoCloseButton = () => {
    setProductAnchorState(undefined);
  };

  const companyInfoOpenStateCodition = companyOpenState === false;
  // const snsCodition = snsOpenState === false;

  const [currentPage, setCurrentPage] = useState(undefined);

  const currentPageChecker = () => {
    if (document.documentURI.includes("hair")) {
      setCurrentPage("product");
    }

    if (document.documentURI.includes("fx5000")) {
      setCurrentPage("product");
    }

    if (document.documentURI.includes("me")) {
      setCurrentPage("product");
    }

    if (document.documentURI.includes("tech")) {
      setCurrentPage("tech");
    }
  };

  useEffect(() => {
    return currentPageChecker();
  }, []);

  return (
    <nav className={navStyle.header}>
      <section className={navStyle.inner__nav__logos__container}>
        <Box
          className={navStyle.logo}
          onClick={() => {
            location.href = "/";
          }}
        >
          {/* <LogoIcon /> */}
        </Box>

        <div className={navStyle.inner__nav__common}>
          <Button
            onClick={handleProductInfoButton}
            className={`${navStyle.gnbMenu} ${
              currentPage === "product" ? navStyle.underliner__gnb : undefined
            }`}
            style={{
              color: currentPage === "product" ? "#55576F" : "#55576F",
              opacity: currentPage === "product" ? "1" : "0.5",
            }}
            disableRipple
          >
            ??????
            <Menu
              open={productOpenState}
              onClose={handleProductInfoCloseButton}
              anchorEl={productAnchorState}
              className={navStyle.gnb__location__menu}
            >
              <div className={navStyle.gnb__container}>
                <MenuItem
                  disableRipple
                  className={`${navStyle.gnb__location__menu} ${navStyle.SNSMenuFirst}`}
                  onClick={() => {
                    location.href = "/me";
                  }}
                >
                  PURAXEL-Me
                </MenuItem>
                <MenuItem
                  disableRipple
                  className={navStyle.gnb__location__menu}
                  onClick={() => {
                    location.href = "/fx5000";
                  }}
                >
                  PURAXEL
                </MenuItem>
                <MenuItem
                  disableRipple
                  className={`${navStyle.gnb__location__menu} ${navStyle.SNSMenuLast}`}
                  onClick={() => {
                    location.href = "/hair";
                  }}
                >
                  PURAXEL-Hair
                </MenuItem>
              </div>
            </Menu>
          </Button>

          <NavIconButton
            onClick={() => {
              location.href = "/tech";
            }}
            title={"????????????"}
            className={`${navStyle.gnbMenu} ${
              currentPage === "tech" ? navStyle.underliner : undefined
            }`}
          />
        </div>
      </section>

      <section className={navStyle.inner__nav__common}>
        {/* <NavIconButton
          title={"notice"}
          className={`${navStyle.buttonStyleKr} ${navStyle.subMenu}`}
          sx={{ paddingRight: "10px", paddingLeft: "10px" }}
        ></NavIconButton> */}

        {/* <NavIconButton
          title={"newsletter"}
          className={`${navStyle.buttonStyleKr} ${navStyle.subMenu}`}
        ></NavIconButton> */}

        <Button
          onClick={handleSNSButton}
          className={`${navStyle.subMenu}`}
          disableRipple
        >
          {layoutHeaderKr.sns}
          <Menu
            open={snsOpenState}
            onClose={handleSNSCloseButton}
            anchorEl={snsAnchorState}
            className={navStyle.menu__sns__container}
          >
            <div className={navStyle.SNSContainer}>
              <MenuItem
                disableRipple
                className={`${navStyle.SNSMenu} ${navStyle.SNSMenuFirst}`}
                onClick={() => {
                  window.open("https://www.instagram.com/puraxel/", "_blank");
                }}
              >
                INSTAGRAM
              </MenuItem>
              <MenuItem
                disableRipple
                className={navStyle.SNSMenu}
                onClick={() => {
                  window.open(
                    "https://www.facebook.com/Puraxel.official/",
                    "_blank"
                  );
                }}
              >
                FACEBOOK
              </MenuItem>
              <MenuItem
                disableRipple
                className={`${navStyle.SNSMenu} ${navStyle.SNSMenuLast}`}
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/channel/UC7X6D4v-G-b7NmNeU2j-jwQ",
                    "_blank"
                  );
                }}
              >
                YOUTUBE
              </MenuItem>
            </div>
          </Menu>
        </Button>

        {/* <NavIconButton title={layoutHeaderKr.sns}></NavIconButton> */}

        {/* <NavIconButton title={layoutHeaderKr.lameditech}></NavIconButton> */}

        <Button
          disableRipple
          onClick={handleCompanyInfoButton}
          className={`${navStyle.buttonStyleKr} ${navStyle.subMenu}`}
        >
          {companyInfoOpenStateCodition
            ? layoutHeaderKr.lameditechInfoOpen
            : layoutHeaderKr.lameditechInfoClose}
          <Menu
            open={companyOpenState}
            onClose={handleCompanyInfoCloseButton}
            anchorEl={companyInfoAnchorState}
            className={`${navStyle.applyKRFont} ${navStyle.temp}`}
          >
            <section
              className={`${navStyle.companyInfoMenuContainer} ${navStyle.companyInfoMenuContainerText}`}
            >
              {/* ?????? ???????????? ????????? ??????????????? ????????? ???????????? ??????? */}
              {/* ????????? ???????????? ????????? ??????? condition ? kr : en ?????????? */}
              {/* ?????? ????????? ??? ????????? ??????? Menu??? div ????????? element?????? ?????? ????????? ??????*/}

              <span className={navStyle.companyInfoMenuContainerTop}>
                <span className={navStyle.companyInfoMenuContainerTitle}>
                  ???????????? ????????????
                </span>
                <span
                  className={navStyle.companyInfoMenuContainerLink}
                  onClick={() => {
                    window.open("https://lameditech.com/");
                  }}
                ></span>
              </span>
              <br />
              <span className={navStyle.companyInfoMenuContainerText}>
                <span>????????? ????????? | ??????????????? : 119-86-51786</span>
                <br />
                <span>??????????????????????????? : ???2017-????????????-0999???</span>
                <br style={{ marginBottom: "0.8rem" }} />
                <span>??????????????? ????????? ????????? 234, 10??? 1002???</span>
                <br />
                <span>(?????????, ??????????????????????????? 6???)</span>
                <br />
                <span>T. 02-852-7980</span>
                <br />
                <span>F. 02-852-7983</span>
                <br />
                <span>E. sales@lameditech.com</span>
              </span>
            </section>
          </Menu>
        </Button>

        <NavIconButton
          title={layoutHeaderKr.kr}
          className={`${navStyle.buttonStyleKr} ${navStyle.subMenu} ${navStyle.lang__button_kr}`}
          sx={{
            textDecoration: "underline",
            textDecorationThickness: "0.2rem",
            // opacity: 1,
          }}
        />

        <NavIconButton
          onClick={() => {
            // window.open("http://en.puraxel.co.kr/index");
            location.href = "http://en.puraxel.co.kr/index";
          }}
          title={layoutHeaderKr.en}
          className={`${navStyle.buttonStyleKr} ${navStyle.subMenu} ${navStyle.lang__button_en}`}
        />
      </section>
    </nav>
  );
}
