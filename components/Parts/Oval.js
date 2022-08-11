import { Spring, animated, useSpring, SpringRef, config } from "react-spring";
import style from "./Oval.module.css";

const Oval = (props) => {
  const transitionOval = useSpring({
    from: { y: props.startY, x: props.startX },
    to: { y: props.EndY, x: props.EndX },
    config: { config: config.stiff, duration: 5000 },
    ...props,
  });

  const styles = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: 25 },
    config: { duration: 500 },
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
      {...props}
    >
      <animated.div className={style.oval} style={{ ...styles }}>
        ㅇㅋㄷㅋ
      </animated.div>
    </animated.div>
  );
};

module.exports = Oval;
