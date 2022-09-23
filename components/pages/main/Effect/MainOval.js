import { animated, config, easings, useSpring } from "react-spring";

export default function MainOval(props) {
  const transitionOval = useSpring({
    from: { y: 0, x: 0 },
    to: {
      y: props.toy,
      x: props.tox,
    },
    config: {
      // config: config.stiff,
      // duration: 2000,
      // easing: easings.easeInOutBounce,
      // mass: 1,
      // tension: 80,
      // friction: 1,

      tension: 200,
      friction: 70,
    },

    loop: { reverse: true },
  });

  return <animated.div {...props} style={{ ...transitionOval }}></animated.div>;
}
