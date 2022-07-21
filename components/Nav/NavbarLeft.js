import { Box } from "@mui/material";
import NavIconButton from "components/Nav/NavIconButton";
import layoutHeaderKr from "public/locales/kr/layoutHeader.json";

export default function NavbarLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <NavIconButton link="/" title="로고요" />
      <NavIconButton link="/me" title={layoutHeaderKr.me} />
      <NavIconButton link="/hair" title={layoutHeaderKr.hair} />
      <NavIconButton link="/fx5000" title={layoutHeaderKr.fx5000} />
      <NavIconButton link="/puraTech" title={layoutHeaderKr.puraTech} />
    </Box>
  );
}
