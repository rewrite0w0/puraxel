import Image from "next/image";
import _ from "./page1.module.css";
import image from "src/image/main/page1/main-img_01_b.webp";

// export default function Page1() {
//   return <div className={_.image}></div>;
// }

export default function Page1() {
  return (
    <Image
      // className={_.image}
      style={{ marginTop: "180px !important" }}
      src={image}
      alt="puraxel1"
      width={1274}
      height={742}
      priority
    />
  );
}
