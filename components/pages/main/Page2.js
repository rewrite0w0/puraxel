import Image from "next/image";
import _ from "./page2.module.css";

// export default function Page2() {
//   return <div className={_.image}></div>;
// }

export default function Page2() {
  return (
    <Image
      className={_.image}
      alt="puraxel2"
      width={1274}
      height={742}
      priority
    />
  );
}
