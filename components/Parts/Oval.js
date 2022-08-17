import { Spring, animated, useSpring, SpringRef, config } from "react-spring";
import style from "./Oval.module.css";

const Oval = (props) => {
  const transitionOval = useSpring({
    from: { y: props.startY, x: props.startX },
    to: { y: props.EndY, x: props.EndX },
    config: { config: config.stiff, duration: 20000 },
    ...props,
  });

  return (
    <animated.div
      style={{
        position: "absolute",
        zIndex: 1,
        left: 0,
        top: 0,
        ...transitionOval,
      }}
      className={style.oval}
      {...props}
    ></animated.div>
  );
};

module.exports = Oval;
