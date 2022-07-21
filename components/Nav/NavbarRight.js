import { Box } from "@mui/material";
import NavIconButton from "components/Nav/NavIconButton";
import layoutHeaderKr from "public/locales/kr/layoutHeader.json";

export default function NavbarRight() {
  return (
    <Box sx={{ display: "flex" }}>
      <NavIconButton title={layoutHeaderKr.sns} />
      <NavIconButton title={layoutHeaderKr.lameditech} />
      <NavIconButton title={layoutHeaderKr.kr} />
      <NavIconButton title={layoutHeaderKr.en} />
    </Box>
  );
}
