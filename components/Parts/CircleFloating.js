import { motion, useTransform, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

export default function CircleFloating() {
  return (
    <motion.div
      style={{
        height: "100vh",
        width: "100%",
        padding: 60,
        margin: 10,
        zIndex: 9999,
      }}
    >
      <motion.div
        transition={{
          duration: 0.8,
          delay: 0.75,
          repeat: Infinity,
          repeatType: "reverse",
          // type: "spring",
        }}
        initial="offscreen"
        whileInView="onscreen"
        animate={{ translateY: 1000 }}
        style={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "rgba(245, 40, 145, 0.06)",
          // color: "red",
          // filter: `blur(6px)`,
          // backdropFilter: `blur(6px)`,
        }}
      />
    </motion.div>
  );
}
