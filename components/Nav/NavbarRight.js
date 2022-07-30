import { useState } from 'react';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import NavIconButton from 'components/Nav/NavIconButton';
import layoutHeaderKr from 'public/locales/kr/layoutHeader.json';

import style from './Nav.module.css';

export default function NavbarRight(props) {
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
    console.log(e.currentTarget);
    setCompanyInfoOpenState(!companyOpenState);
    console.log(companyOpenState);
  };

  const handleCompanyInfoCloseButton = () => {
    setCompanyInfoAnchorState(undefined);
  };

  const companyInfoOpenStateCodition = companyOpenState === false;

  return (
    <Box
      {...props}
      // sx={{ display: 'grid', gridAutoRows: 'auto' }}
    >
      <NavIconButton title={layoutHeaderKr.sns}></NavIconButton>

      <NavIconButton title={layoutHeaderKr.lameditech}></NavIconButton>

      <NavIconButton
        onClick={handleCompanyInfoButton}
        title={
          companyInfoOpenStateCodition
            ? layoutHeaderKr.companyInfoCurrentStateClose
            : layoutHeaderKr.companyInfoCurrentStateOpen
        }
      >
        <Menu
          open={companyOpenState}
          onClose={handleCompanyInfoCloseButton}
          anchorEl={companyInfoAnchorState}
        >
          <div
            style={{
              height: '100%',
              width: '35rem',
              // margin: "2rem",
              padding: '1rem',
            }}
          >
            <h1
              onClick={() => {
                window.open('https://www.lameditech.com/');
              }}
            >
              {layoutHeaderKr.companyInfoName}
            </h1>
            <div style={{ color: 'gray' }}>
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
      </NavIconButton>

      <NavIconButton title={layoutHeaderKr.kr}></NavIconButton>

      <NavIconButton title={layoutHeaderKr.en}></NavIconButton>
    </Box>
  );
}
