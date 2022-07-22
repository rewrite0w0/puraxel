import { useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import NavIconButton from "components/Nav/NavIconButton";
import layoutHeaderKr from "public/locales/kr/layoutHeader.json";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

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
    <Box sx={{ display: "flex" }}>
      {/* <Button onClick={handleSNSButton}>{layoutHeaderKr.sns}</Button> */}
      {/* <Menu
        open={snsOpenState}
        onClose={handleSNSCloseButton}
        anchorEl={snsAnchorState}
      >
        <MenuItem onClick={handleSNSCloseButton}>
          <FacebookIcon />
        </MenuItem>
        <MenuItem onClick={handleSNSCloseButton}>
          <InstagramIcon />
        </MenuItem>
        <MenuItem onClick={handleSNSCloseButton}>
          <TwitterIcon />
        </MenuItem>
        <MenuItem
          onClick={() => {
            console.log(snsAnchorState);
            setSnsAnchorState(undefined);
          }}
        >
          <QuestionAnswerRoundedIcon />
        </MenuItem>
      </Menu> */}

      <NavIconButton title={layoutHeaderKr.sns} />

      <NavIconButton title={layoutHeaderKr.lameditech}></NavIconButton>

      <Button onClick={handleCompanyInfoButton}>
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
            <h1>{layoutHeaderKr.companyInfoName}</h1>
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

      <NavIconButton title={layoutHeaderKr.kr} />

      <NavIconButton title={layoutHeaderKr.en} />
    </Box>
  );
}
