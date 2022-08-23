import { useSpring, animated, useTransition } from "react-spring";
export default function Fadein({ children }) {
  const styles = useSpring({
    to: [{ opacity: 1 }],
    from: { opacity: 0.25 },
    config: { duration: 1000 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
}
