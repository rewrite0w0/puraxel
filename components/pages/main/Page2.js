import Image from "next/image";
import _ from "./page2.module.css";

import image from "src/image/main/page2/main-img_02_b.webp";

// export default function Page2() {
//   return <div className={_.image}></div>;
// }

export default function Page2() {
  return (
    <Image
      // className={_.image}
      src={image}
      alt="puraxel2"
      width={1274}
      height={742}
      style={{ marginTop: "180px !important" }}
      priority
    />
  );
}
