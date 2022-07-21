import { Box } from "@mui/material";
import NavIconButton from "components/Nav/NavIconButton";
import layoutHeaderKr from "public/locales/kr/layoutHeader.json";

export default function NavbarInfo() {
  return (
    <Box sx={{ display: "flex" }}>
      <NavIconButton link="/me" title={layoutHeaderKr.sns} />
      <NavIconButton link="/hair" title={layoutHeaderKr.lameditech} />
      <NavIconButton link="/fx5000" title={layoutHeaderKr.kr} />
      <NavIconButton link="/puraTech" title={layoutHeaderKr.en} />
    </Box>
  );
}
