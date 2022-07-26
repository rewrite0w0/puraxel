import { Box } from "@mui/material";
import Image from "next/image";

import purame from "src/image/ME/me_02_a.png";

export default function Page3() {
  return (
    <>
      <h1>ME!ME!ME!</h1>
      <Image
        src={purame}
        useMap="#temp"
        alt="yo"
        width="1000vw"
        height="1000vh"
        onClick={(e) => console.log(e.target)}
      ></Image>

      <map name="temp">
        <area
          target=""
          alt=""
          title=""
          href="/"
          coords="554,573,74"
          shape="circle"
        />
      </map>
    </>
  );
}
