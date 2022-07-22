import { motion, useTransform, useMotionValue, animate } from "framer-motion";

export default function CircleFloating(props) {
  return (
    // <motion.div
    //   style={{
    //     height: "100vh",
    //     width: "10rem",
    //     padding: 60,
    //     margin: 10,
    //     zIndex: 9999,
    //   }}
    // >
    <motion.div
      transition={{
        duration: 2,
        delay: 0.75,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      initial={{
        x: props.initX ? props.initX : 500,
        y: props.initY ? props.initY : 500,
      }}
      // initial="offscreen"
      // whileInView="onscreen"
      animate={{
        x: props.aniX ? props.aniX : 0,
        y: props.aniY ? props.aniY : 0,
      }}
      style={{
        width: "25rem",
        height: "25rem",
        borderRadius: "50%",
        background: "rgba(245, 40, 145, 0.06)",
        // color: "red",
        // filter: `blur(6px)`,
        // backdropFilter: `blur(6px)`,
      }}
    />
    // </motion.div>
  );
}
