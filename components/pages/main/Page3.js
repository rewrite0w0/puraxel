import Image from "next/image";
import _ from "./page3.module.css";

// export default function Page3() {
//   return <div className={_.image}></div>;
// }

export default function Page1() {
  return (
    <Image
      className={_.image}
      alt="puraxel3"
      width={1274}
      height={742}
      priority
    />
  );
}
