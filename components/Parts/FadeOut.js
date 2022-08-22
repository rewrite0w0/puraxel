import { useSpring, animated, useTransition } from "react-spring";
export default function FadeOut({ children }) {
  const styles = useTransition([], {
    to: [{ opacity: 1 }],
    from: { opacity: 0.25 },
    leave: { opacity: 1 },
    config: { duration: 1000 },
  });
  return <animated.div style={styles}>{children}</animated.div>;
}
