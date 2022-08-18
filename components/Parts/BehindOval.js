import _ from ".BehindOval.module.css";
import { useSpring, animated, useTransition } from "react-spring";

const BehindModal = (props) => {
  const transitionOval = useSpring({
    from: { y: props.startY, x: props.startX },
    to: { y: props.EndY, x: props.EndX },
    config: { config: config.stiff, duration: 5000 },
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
      className={_.oval}
      {...props}
    ></animated.div>
  );
};

module.exports = BehindModal;
