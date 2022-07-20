import { motion } from "framer-motion";

export default function CircleWave(props) {
  return (
    <motion.div
      style={{
        borderRadius: "50%",
        // backgroundColor: !props.color ? "blue" : props.color,
        background: "red",
      }}
      animate={{ y: -100, x: 0 }}
      transition={{
        duration: 2,
        delay: 0.25,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
}
