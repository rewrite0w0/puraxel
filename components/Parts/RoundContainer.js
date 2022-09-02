import _ from "./RoundContainer.module.css";
import { useState } from "react";

export default function RoundContainer(props) {
  const [toggle, setToggle] = useState(true);

  return (
    <div className={_.container} style={{ ...props.containerStyle }}>
      <div className={_.inner__para} style={{ ...props.paraStyle }}>
        {props.title}
      </div>
    </div>
  );
}
