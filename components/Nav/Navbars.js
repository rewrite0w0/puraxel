import { useState } from "react";
import { Box, Menu, Button, MenuItem } from "@mui/material";

import style from "../layout/Layout.module.css";
import navStyle from "./Nav.module.css";

import Image from "next/image";
import layoutHeaderKr from "public/locales/kr/layoutHeader.json";

import NavIconButton from "components/Nav/NavIconButton";

const buttonStyle = { fontSize: "1.4vw" };

import PuraxelLogo from "src/image/header/puraxel_logo_basic.svg";
import PuraxelLogoColor from "src/image/header/puraxel_logo_basic.svg";
import { motion } from "framer-motion";

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
      <Box
        onClick={() => {
          location.href = "/";
        }}
      >
        <Image
          src={PuraxelLogo}
          alt="PuraxelLogoColor"
          className={navStyle.logo}
          style={{ backgroundColor: "pink" }}
          width={"10vw"}
          height={"20vh"}
        />
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
      </Box>

      <Box className={navStyle.rightNav}>
        <Button onClick={handleSNSButton} className={navStyle.buttonStyle}>
          {layoutHeaderKr.sns}
          <Menu
            open={snsOpenState}
            onClose={handleSNSCloseButton}
            anchorEl={snsAnchorState}
          >
            <div
              style={{
                height: "100%",
                width: "10vw",
                padding: "1rem",
              }}
            >
              <MenuItem
                onClick={() => {
                  window.open("https://facebook.com", "_blank");
                }}
                onWheelCapture
              >
                FACEBOOK
              </MenuItem>
              <MenuItem
                onClick={() => {
                  window.open("https://youtube.com", "_blank");
                }}
              >
                YOUTUBE
              </MenuItem>
              <MenuItem
                onClick={() => {
                  window.open("https://naver.com", "_blank");
                }}
              >
                NAVERBLOG
              </MenuItem>
            </div>
          </Menu>
        </Button>

        {/* <NavIconButton title={layoutHeaderKr.sns}></NavIconButton> */}

        <NavIconButton title={layoutHeaderKr.lameditech}></NavIconButton>

        <Button
          onClick={handleCompanyInfoButton}
          className={navStyle.buttonStyle}
        >
          {companyInfoOpenStateCodition
            ? layoutHeaderKr.companyInfoCurrentStateClose
            : layoutHeaderKr.companyInfoCurrentStateOpen}
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
              <h1
                onClick={() => {
                  window.open("https://www.lameditech.com/");
                }}
              >
                {layoutHeaderKr.companyInfoName}
              </h1>
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
