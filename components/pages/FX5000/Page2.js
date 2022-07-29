import { Box } from "@mui/material";
import Image from "next/image";
import PuraxelLogo from "src/image/header/puraxel_logo_w.svg";

export default function Page2() {
  return (
    <>
      <h1>Page2</h1>
      <Box sx={{ background: "blue" }}>
        <Image
          src={PuraxelLogo}
          alt="puraxel logo image"
          // width={100}
          // height={50}
          // className={style.logo}
          style={{
            // ":hover": {
            color: "pink",
            backgroundColor: "purple",

            // },
          }}
        />
      </Box>
    </>
  );
}
