import { useSpring, animated, useTransition } from "react-spring";
import _ from "./FadeIn.module.css";

export default function Fadein({ children }) {
  const styles = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0.25 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={styles} className={_.container}>
      {children}
    </animated.div>
  );
}
