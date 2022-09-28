import Image from "next/image";
import _ from "./page1.module.css";

// export default function Page1() {
//   return <div className={_.image}></div>;
// }

export default function Page1() {
  return (
    <Image
      className={_.image}
      alt="puraxel1"
      width={1274}
      height={742}
      priority
    />
  );
}
