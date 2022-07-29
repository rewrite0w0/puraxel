import { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import NavIconButton from "components/Nav/NavIconButton";
import layoutHeaderKr from "public/locales/kr/layoutHeader.json";

import style from "./Nav.module.css";

export default function NavbarRight() {
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
  };

  const handleCompanyInfoCloseButton = () => {
    setCompanyInfoAnchorState(undefined);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <NavIconButton title={layoutHeaderKr.sns} />

      <NavIconButton title={layoutHeaderKr.lameditech} />

      <NavIconButton
        onClick={handleCompanyInfoButton}
        className={style.buttonStyle}
      >
        {companyOpenState === false
          ? layoutHeaderKr.companyInfoCurrentStateClose
          : layoutHeaderKr.companyInfoCurrentStateOpen}
      </NavIconButton>

      {/* 왜인지 몰라도 여기는 * 스타일이 안먹혀서 수동으로 줌 */}
      <Box onClick={handleCompanyInfoButton} className={style.buttonStyle}>
        {companyOpenState === false
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
              width: "35rem",
              // margin: "2rem",
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
      </Box>

      <NavIconButton title={layoutHeaderKr.kr} />

      <NavIconButton title={layoutHeaderKr.en} />
    </Box>
  );
}
