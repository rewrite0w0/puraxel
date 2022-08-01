import { useState } from "react";
import { Box, Menu, Button, MenuItem } from "@mui/material";

import style from "../layout/Layout.module.css";
import navStyle from "./Nav.module.css";

import Image from "next/image";
import layoutHeaderKr from "public/locales/kr/layoutHeader.json";

import NavIconButton from "components/Nav/NavIconButton";

const buttonStyle = { fontSize: "1vw" };

import PuraxelLogo from "src/image/header/puraxel_logo_basic.svg";
import PuraxelLogoColor from "src/image/header/puraxel_logo_basic.svg";
import { motion } from "framer-motion";

import ShortcutLMDT from "src/image/header/shortcut_lmdt.svg";

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
    <Box className={style.header} style={{ ...props.sx }}>
      <Box className={navStyle.leftNav}>
        <Box
          className={navStyle.logo}
          onClick={() => {
            location.href = "/";
          }}
        >
          {/* <Image
            src={PuraxelLogo}
            alt="PuraxelLogoColor"
            className={navStyle.logo}
            style={{ backgroundColor: "pink" }}
            width={"10vw"}
            height={"20vh"}
          /> */}
        </Box>

        <Box>
          <NavIconButton
            onClick={() => {
              location.href = "/me";
            }}
            title={layoutHeaderKr.me}
            sx={buttonStyle}
          />

          <NavIconButton
            onClick={() => {
              location.href = "/fx5000";
            }}
            title={layoutHeaderKr.fx5000}
            sx={buttonStyle}
          />

          <NavIconButton
            onClick={() => {
              location.href = "/hair";
            }}
            title={layoutHeaderKr.hair}
            sx={buttonStyle}
          />

          <NavIconButton
            onClick={() => {
              location.href = "/tech";
            }}
            title={layoutHeaderKr.puraTech}
            sx={buttonStyle}
          />
        </Box>
      </Box>

      <Box className={navStyle.rightNav}>
        <Button onClick={handleSNSButton} className={navStyle.buttonStyleKr}>
          {layoutHeaderKr.sns}
          <Menu
            open={snsOpenState}
            onClose={handleSNSCloseButton}
            anchorEl={snsAnchorState}
          >
            <div
              style={{
                height: "100%",
                width: "5vw",
                padding: "1rem",
              }}
            >
              <MenuItem
                className={navStyle.applyENFont}
                onClick={() => {
                  window.open("https://instagram.com", "_blank");
                }}
              >
                INSTAGRAM
              </MenuItem>
              <MenuItem
                className={navStyle.applyENFont}
                onClick={() => {
                  window.open("https://facebook.com", "_blank");
                }}
                onWheelCapture
              >
                FACEBOOK
              </MenuItem>
              <MenuItem
                className={navStyle.applyENFont}
                onClick={() => {
                  window.open("https://youtube.com", "_blank");
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
          onClick={handleCompanyInfoButton}
          className={navStyle.buttonStyleKr}
        >
          {companyInfoOpenStateCodition
            ? layoutHeaderKr.lameditechInfoOpen
            : layoutHeaderKr.lameditechInfoClose}
          <Menu
            open={companyOpenState}
            onClose={handleCompanyInfoCloseButton}
            anchorEl={companyInfoAnchorState}
          >
            <div
              style={{
                height: "100%",
                width: "30vw",
                padding: "1rem",
              }}
            >
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{layoutHeaderKr.companyInfoName}</span>

                <span
                  onClick={() => {
                    window.open("https://www.lameditech.com/");
                  }}
                  style={{
                    fontSize: "0.3vw",
                    background: "gray",
                    borderRadius: "1.25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "3vw",
                    cursor: "pointer",
                  }}
                >
                  라메디텍 바로가기↗
                </span>
              </p>
              <div style={{ color: "gray" }}>
                <p>{layoutHeaderKr.companyInfoRep}</p>
                <p>{layoutHeaderKr.companyInfoLicense}</p>
                <p>{layoutHeaderKr.companyInfoAddress1A}</p>
                <p>{layoutHeaderKr.companyInfoAddress1B}</p>
                <p>{layoutHeaderKr.companyInfoTel}</p>
                <p>{layoutHeaderKr.companyInfoFax}</p>
                <p>{layoutHeaderKr.companyInfoEmail}</p>
              </div>
            </div>
          </Menu>
        </Button>
        <NavIconButton title={layoutHeaderKr.kr}></NavIconButton>
        <NavIconButton title={layoutHeaderKr.en}></NavIconButton>
      </Box>
    </Box>
  );
}
