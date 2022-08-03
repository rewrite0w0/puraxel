import { useState } from "react";
import { Box, Menu, Button, MenuItem } from "@mui/material";

import navStyle from "./Nav.module.css";

import Image from "next/image";
import layoutHeaderKr from "public/locales/kr/layoutHeader.json";

import NavIconButton from "components/Nav/NavIconButton";

import lmdtInfo from "src/image/header/lmdt.svg";

export default function Navbars(props) {
  const [companyOpenState, setCompanyInfoOpenState] = useState(false);
  const [companyInfoAnchorState, setCompanyInfoAnchorState] =
    useState(undefined);

  const [snsOpenState, setSnsOpenState] = useState(false);
  const [snsAnchorState, setSnsAnchorState] = useState(undefined);

  const handleSNSButton = (e) => {
    setSnsAnchorState(e.currentTarget);
    // console.log(e.currentTarget);
    setSnsOpenState(!snsOpenState);
  };

  const handleSNSCloseButton = () => {
    setSnsAnchorState(undefined);
  };

  const handleCompanyInfoButton = (e) => {
    setCompanyInfoAnchorState(e.currentTarget);
    // console.log(e.currentTarget);
    setCompanyInfoOpenState(!companyOpenState);
    // console.log(companyOpenState);
  };

  const handleCompanyInfoCloseButton = () => {
    setCompanyInfoAnchorState(undefined);
  };

  const companyInfoOpenStateCodition = companyOpenState === false;
  const snsCodition = snsOpenState === false;

  return (
    <Box className={navStyle.header}>
      <Box className={navStyle.leftNav}>
        <Box
          className={navStyle.logo}
          onClick={() => {
            location.href = "/";
          }}
        ></Box>

        <Box>
          <NavIconButton
            onClick={() => {
              location.href = "/me";
            }}
            title={layoutHeaderKr.me}
            className={navStyle.gnbMenu}
          />

          <NavIconButton
            onClick={() => {
              location.href = "/fx5000";
            }}
            title={layoutHeaderKr.fx5000}
            className={navStyle.gnbMenu}
          />

          <NavIconButton
            onClick={() => {
              location.href = "/hair";
            }}
            title={layoutHeaderKr.hair}
            className={navStyle.gnbMenu}
          />

          <NavIconButton
            onClick={() => {
              location.href = "/tech";
            }}
            title={layoutHeaderKr.puraTech}
            className={navStyle.gnbMenu}
          />
        </Box>
      </Box>

      <Box className={navStyle.rightNav}>
        <Button
          onClick={handleSNSButton}
          className={(navStyle.buttonStyleKr, navStyle.subMenu)}
          disableRipple
        >
          {layoutHeaderKr.sns}
          <Menu
            open={snsOpenState}
            onClose={handleSNSCloseButton}
            anchorEl={snsAnchorState}
            sx={{ Left: "1601px", Top: "64px", margin: 0, padding: 0 }}
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
                onWheelCapture
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
            <div className={`${navStyle.companyInfoMenuContainer}`}>
              {/* 근데 다국어는 어떻게 처리할거임 이렇게 이미지로 하면? */}
              {/* 이것도 상태관리 이미지 변경? condition ? kr : en 요렇게? */}
              {/* 위치 옮기는 거 어떻게 하지? Menu와 div 사이에 element인데 이걸 어떻게 찾지*/}
              <Image src={lmdtInfo} alt="" useMap="#lameditechLink" />
              <map name="lameditechLink">
                <area
                  target="_blank"
                  alt="linkToLameditech"
                  title="linkToLameditech"
                  href="https://www.lameditech.com"
                  coords="293,46,179,29"
                  shape="rect"
                ></area>
              </map>
              {/* 
              <span className={navStyle.companyTitleContainer}>
                <span className={navStyle.companyTitle}>
                  {layoutHeaderKr.companyInfoName}
                </span>

                <span
                  onClick={() => {
                    window.open("https://www.lameditech.com/");
                  }}
                  className={navStyle.companyLinkButton}
                ></span>
              </span>

              <div className={navStyle.companyInfoDetail}>
                <span>
                  <span>{layoutHeaderKr.companyInfoRep}</span>
                  <br />
                  <span>{layoutHeaderKr.companyInfoLicense}</span>
                </span>
                <br style={{ marginBottom: "8px" }} />
                <span>
                  <span>{layoutHeaderKr.companyInfoAddress1A}</span>
                  <br />
                  <span>{layoutHeaderKr.companyInfoAddress1B}</span>
                  <br />
                  <span>{layoutHeaderKr.companyInfoTel}</span>
                  <br />
                  <span>{layoutHeaderKr.companyInfoFax}</span>
                  <br />
                  <span>{layoutHeaderKr.companyInfoEmail}</span>
                </span>
              </div> */}
            </div>
          </Menu>
        </Button>
        <NavIconButton
          title={layoutHeaderKr.kr}
          className={`${navStyle.buttonStyleKr} ${navStyle.subMenu}`}
          sx={{ marginRight: "16px", padding: 0 }}
        ></NavIconButton>
        <NavIconButton
          title={layoutHeaderKr.en}
          className={`${navStyle.buttonStyleKr} ${navStyle.subMenu}`}
          sx={{ marginRight: "80px" }}
        ></NavIconButton>
      </Box>
    </Box>
  );
}
