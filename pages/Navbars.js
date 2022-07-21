import { useState } from "react";
import layoutHeader from "../public/locales/kr/layoutHeader.json";
import { Tab, Box, Tabs, Breadcrumbs } from "@mui/material";

const LinkTab = (props) => {
  return (
    <Tab
      component="a"
      onClick={(e) => {
        e.preventDefault();
      }}
      {...props}
    />
  );
};

export default function Navbars() {
  const [value, setValue] = useState(0);
  return (
    <Tabs>
      <Tabs>
        <LinkTab label={layoutHeader.me} href="/me"></LinkTab>
        <LinkTab label={layoutHeader.hair} href="/hair"></LinkTab>
        <LinkTab label={layoutHeader.fx5000} href="/fx5000"></LinkTab>
        <LinkTab label={layoutHeader.puraTech} href="/puratech"></LinkTab>
      </Tabs>
      <Tabs>
        <LinkTab label={layoutHeader.sns} href="/sns"></LinkTab>
        <LinkTab label={layoutHeader.lameditech} href="/lameditech"></LinkTab>
        <LinkTab
          label={layoutHeader.companyInfoCurrentStateClose}
          href="/me"
        ></LinkTab>
        <LinkTab href="/puratech">
          <Breadcrumbs></Breadcrumbs>
        </LinkTab>
      </Tabs>
    </Tabs>
  );
}
